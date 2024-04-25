/* implements api endpoints for the getGeo controller */

import { Elysia } from 'elysia'
import initGetGeoController from '../controllers/geoGetController';
import Database from 'bun:sqlite';
//api endpoints for route db access not requiring auth

export default (db: Database) => {
    const GeoController = initGetGeoController(db);

    return new Elysia({ prefix: '/geo'})
        .get('/', GeoController.getGeoList)
        .get('/:id', GeoController.getGeoById)
        
        
}