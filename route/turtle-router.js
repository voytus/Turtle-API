const express = require(`express`);

//definign router level middleware, need a router object
const router = express.Router();

//express passes in the reques and response obj 
router.get(`/getAll`, (request, response, next) => {
    
    response.contentType(`application/json`) //content Type is a shortcut for ctreting the `Content-type`: `value` header
        .status(200)
        .json(database);

});
router.post(`/create`, (request, response, next) => {
//data parsed into the request.body object can be assesed anywhere
// we have access to the request object
// we must use express.json() or body-poaser() middleware

//if (!request.body) return next({statusCode: 400, message: 'Body cannot be empty'});
if (Object.keys(request.body).length == 0) return next({statusCode: 400, message: 'Body cannot be empty'});

const newTurtleData = request.body;

newTurtleData.id = idCounter++;
database.push(newTurtleData);

response.status(201)

});
router.put(`/update`);
router.delete(`/delete:id`, (request, response, next) => {
    // acolon followed by name in a patch is a path parameter
    //that can be accesec on the request.params object
    const id = request.params.id;
    //if req.params was nnot a number id is assigned NaN
    if (isNaN(id)) return next({statusCode: 400, message: 'ID must be a number'});
    //find the index of the user in the array by their id
    //if user doesn't exists
    // 

    const index = database.findIndex(function(turtle) {
        return turtle.Id == id; //find an user Id and match it for existing one 
        // -1 --calback no id found with the given id
    if (index == -1) return next({
        statusCode: 404,
        message: 'Turtle does not exists with id ${id}'
    });

    database.splice(index, 1);
    response.status(200)
        .send('User deleted succesfully');
    });

    //     response.status(400).send(`${request.params.id} is not a number`);
    // }
    // response.status(200).json({
    //     id
    })

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

