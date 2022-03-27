import neo4j from "neo4j-driver";
// import { uri, user, password, database } from "../../DBLogin.js";
import { config } from "dotenv";
import { nanoid } from "nanoid";
config();

const { url, username, password, database } = process.env;

const driver = neo4j.driver(url, neo4j.auth.basic(username, password));
const session = driver.session({ database });

const findAll = async () => {
  const result = await session.run(`match (h:Hotel) return h`);
  return result.records.map((i) => i.get("h").properties);
};

const findById = async (id) => {
  const result = await session.run(
    `match (h:Hotel {_id: '${id}'}) return h limit 1`
  );
  return result.records[0].properties;
};

const create = async (hotel) => {
  const result = await session.run(
    `create (h:Hotel {_id: '${nanoid(8)}', title: '${hotel.title}', address:'${
      hotel.address
    }'}) return h`
  );
  return result.records[0].properties;
};

const findByIdAndUpdate = async (id, hotel) => {
  const result = await session.run(
    `match (h:Hotel {_id: '${id}'}) set title = '${hotel.title}', address='${hotel.address}'}) return h`
  );
  return result.records[0].properties;
};

const findBYIdAndDelete = async (id, hotel) => {
  await session.run(`match (h:Hotel {_id: '${id}'}) delete h`);
  return await findAll();
};

export default {
  findAll,
  findById,
  create,
  findByIdAndUpdate,
  findBYIdAndDelete,
};
