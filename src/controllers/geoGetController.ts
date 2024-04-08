import Database from "bun:sqlite";
import fetch from "node-fetch";
//retrieve data from routes table
//no auth required
export default (db: Database) => {
  return {

    getGeoList: ({ set }) => {
      const startTime = performance.now();
      console.log("running query", startTime)

      const query = db.query(`SELECT * FROM routes;`); //create database structure and edit ..change table 'maps?'
      const result = query.all();
      set.status = 200; //OK status
      const endTime = performance.now();
      const elapsedTime = endTime - startTime;
      console.log("query complete", endTime, "final time = ", elapsedTime); 
      return new Response(JSON.stringify({ routes: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    getGeoById: ({ params: { id }, set }) => {
      const query = db.query(`SELECT * FROM routes WHERE id = $id;`);
      const result = query.get({ $id: id });
      set.status = 200;

      return new Response(JSON.stringify({ route: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
  
  };
};
