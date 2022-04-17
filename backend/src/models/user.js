import neo4j from "neo4j-driver";
import { config } from "dotenv";
import { nanoid } from "nanoid";
config();

const { url, db_username, db_password, database } = process.env;

const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = driver.session({ database });

const findAll = async () => {
  const result = await session.run(`MATCH (n:User) RETURN n`);
  return result.records.map((i) => i.get("n").properties);
};

const findById = async (id) => {
  const result = await session.run(
    `MATCH (n:User {_id: "${id}"}) RETURN n LIMIT 1`
  );
  return result.records[0].get("n").properties;
};

const create = async (obj) => {
  const result = await session.run(
    `MERGE (n:User {username:"${obj.username}"}) 
        ON CREATE SET n._id= "${nanoid(8)}",
                    n.firstname = "${obj.firstname}",
                    n.lastname = "${obj.lastname}",
                    n.email = "${obj.email}",
                    n.password = "${obj.password}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const findByIdAndUpdate = async (id, obj) => {
  const result = await session.run(
    `MATCH (n:User {_id: "${id}"})
        SET n.firstname = "${obj.firstname}",
            n.lastname = "${obj.lastname}",
            n.email = "${obj.email}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const changePassword = async (id, password) => {
  const result = await session.run(
    `MATCH (n:User {_id: "${id}"})
            SET n.password = "${password}"
        RETURN n`
  );
  return result.records[0].get("n").properties;
};

const findBYIdAndDelete = async (id) => {
  await session.run(`MATCH (n:User {_id: "${id}"}) DETACH DELETE n`);
  return await findAll();
};

const createRelationshipHasVisit = async (userId, hotelId) => {
  const result = await session.run(
    `MATCH (u:User {_id: "${userId}"}), (h:Hotel {_id: "${hotelId}"})
    MERGE (u)-[v:HAS_VISITE]->(h)
    RETURN u, v, h`
  );
  return result.records[0];
};

const getHotelsVisited = async (id) => {
  const result = await session.run(
    `MATCH (u:User {_id: "${id}"})-[:HAS_VISITE]->(h:Hotel)
    RETURN h`
  );
  return result.records.map((i) => i.get("h").properties);
};

export default {
  findAll,
  findById,
  findBYIdAndDelete,
  create,
  changePassword,
  findByIdAndUpdate,
  createRelationshipHasVisit,
  getHotelsVisited,
};
