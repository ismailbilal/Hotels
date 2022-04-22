import neo4j from "neo4j-driver";
import { config } from "dotenv";
import { nanoid } from "nanoid";
config();

const { url, db_username, db_password, database } = process.env;

const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = driver.session({ database });

const findAll = async () => {
  const result = await session.run(`MATCH (n:Admin) RETURN n`);
  return result.records.map((i) => i.get("n").properties);
};

const findById = async (id) => {
  const result = await session.run(
    `MATCH (n:Admin {_id: "${id}"}) RETURN n LIMIT 1`
  );
  return result.records[0].get("n").properties;
};

const create = async (obj) => {
  const result = await session.run(
    `MERGE (n:Admin {username:"${obj.username}"}) 
        ON CREATE SET n._id= "${nanoid(8)}",
                    n.password = "${obj.password}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const changeEmail = async (id, obj) => {
  const result = await session.run(
    `MATCH (n:Admin {_id: "${id}"})
            n.email = "${obj.email}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const changePassword = async (id, obj) => {
  const result = await session.run(
    `MATCH (n:Admin {_id: "${id}"})
            SET n.password = "${obj.password}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const findBYIdAndDelete = async (id) => {
  await session.run(`MATCH (n:Admin {_id: "${id}"}) DETACH DELETE n`);
  return await findAll();
};

export default {
  findAll,
  findById,
  findBYIdAndDelete,
  create,
  changePassword,
  changeEmail,
};
