const express = require(`express`);

//definign router level middleware, need a router object
const router = express.Router();

//express passes in the reques and response obj 
router.get(`/getAll`, (request, response, next) => {
    
    response.contentType(`application/json`) //content Type is a shortcut for ctreting the `Content-type`: `value` header
        .status(200)
        .json(database);

});
router.post(`/create`);
router.put(`/update`);
router.delete(`/delete:id`, (request, response, next) => {
    // acolon followed by name in a patch is a path parameter
    //that can be accesec on the request.params object
    const id =request.params.id;
    //if req.params was nnot a number id is assigned NaN

    response.status(200).send(id);

let IdCounter = 3;
const database = [
    {
        id: 1,
        size: "LARGE",
        colour: "RED",
        snappy: false,
        species: "leatherback",
        doesKungFu: true,
        born: new Date('1989-05-12')
    },
    {
        id: 2,
        size: "LARGE",
        colour: "GREEN",
        snappy: true,
        species: "leatherback",
        doesKungFu: false,
        born: new Date('1840-03-01')
    }

];
module.exports = router;

