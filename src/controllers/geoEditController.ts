import Database from "bun:sqlite";
import fetch from "node-fetch";

export default (db: Database) => {
  return {
    
    removeGeoById: ({ params: { id }, set }) => {
      const query = db.query(`DELETE FROM routes WHERE id = $id;`);
      const result = query.get({ $id: id });
      set.status = 200;
      return new Response(JSON.stringify({ message: "success!", id }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    consol: () => {
      console.log("hit");
    },
    createGeo: ({ body, set }) => {
      //body = json content of post request
      console.log("running query");
      const query = db.prepare(
        `INSERT INTO routes (route, name, gpx, length, difficulty, terrain, desc, elevation) VALUES ($route, $name, $gpx, $length, $difficulty, $terrain, $desc, $elevation);`
      );
      const { route, name, gpx, length, difficulty, terrain, desc, elevation } =
        body;
      query.run({
        $route: JSON.stringify(route),
        $name: name,
        $gpx: gpx,
        $length: length,
        $difficulty: difficulty,
        $terrain: terrain,
        $desc: desc,
        $elevation: elevation,
      });
      console.log("query complete");
      set.status = 200;

      return new Response(JSON.stringify({ message: "success!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    updateGeo: ({ params: { id }, body, set }) => {
      const attrs = Object.keys(body);
      const updateValues = attrs.map((a) => `${a} = $${a}`).join(`, `);
      let query = db.query(`UPDATE routes SET ${updateValues} WHERE id = $id;`);
      let updateObj = {};
      for (let a in body) {
        updateObj = {
          ...updateObj,
          ["$" + a]: body[a],
        };
      }
      console.log(updateObj);
      let result = query.run({ ...updateObj, $id: id });
      set.status = 200;

      return new Response(JSON.stringify({ message: "success!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },
  };
};
