import { Elysia } from "elysia";
import initEditGeoController from "../controllers/geoEditController";
import Database from "bun:sqlite";
//api endpoints for routes table access requiring auth
export default (db: Database) => {
  const GeoController = initEditGeoController(db);

  return (
    new Elysia({ prefix: "/geo" })
      .post("/", GeoController.createGeo)
      // .get('/', GeoController.consol)
      .put("/:id", GeoController.updateGeo)
      .delete("/:id", GeoController.removeGeoById)
     
  );
  // .post('/e', GeoController.getElevation)
};
