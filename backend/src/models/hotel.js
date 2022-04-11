import neo4j from "neo4j-driver";
// import { uri, user, password, database } from "../../DBLogin.js";
import { config } from "dotenv";
import { nanoid } from "nanoid";
config();

const { url, db_username, db_password, database } = process.env;

const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = driver.session({ database });

const findAll = async (type) => {
  const result = await session.run(`match (n:${type}) return n`);
  return result.records.map((i) => i.get("n").properties);
};

const findById = async (type, id) => {
  const result = await session.run(
    `match (n:${type} {_id: "${id}"}) return n limit 1`
  );
  return result.records[0].get("n").properties;
};

const create = async (type, obj) => {
  let parms = "";
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      parms += `n.${key}= "${element}", `;
    }
  }
  parms = parms.slice(0, parms.length - 2);
  const result = await session.run(
    `MERGE (n:${type} {name:"${obj.name}"}) ON CREATE SET n._id= "${nanoid(
      8
    )}", ${parms} return n`
  );
  return result.records[0].get("n").properties;
};

const createRelationship = async (type, srcName, srcId, desName, desId) => {
  const result = await session.run(
    `MATCH (src:${srcName} {_id: "${srcId}"}), (des:${desName} {_id: "${desId}"})
    MERGE (src)-[r:${type}]->(des)
    RETURN  src, r, des`
  );
  return result.records;
};

const findByIdAndUpdate = async (type, id, obj) => {
  // n.name = "${obj.name}", n.address="${obj.address}"
  let parms = "";
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      parms += `n.${key} = ${element},`;
    }
  }
  const result = await session.run(
    `match (n:${type} {_id: "${id}"}) set ${parms} return n`
  );
  return result.records[0].get("n").properties;
};

const findBYIdAndDelete = async (type, id, obj) => {
  await session.run(`match (n:${type} {_id: "${id}"}) delete n`);
  return await findAll();
};

export default {
  findAll,
  findById,
  create,
  createRelationship,
  findByIdAndUpdate,
  findBYIdAndDelete,
};
