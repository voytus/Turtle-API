//Turtle:
// -create one
// -update
// -delete 
//-read all
const express = require(`express`);
const morgan = require(`morgan`);
const turtleRouter = require(`./route/turtle-router`);
const PORT = process.env.PORT || 3000; //if process.env is not defined or null, it will be assigned to PORT
///otherwise a port 3000 will be asssigned
//babalejs.io
//webpack.org

const app = express();

//app.use allows for middleware to be mounted to the application

app.use(morgan(`dev`));
app.use(`/turtle`, turtleRouter);

app.use(function (error, request, response, next) {
    response.status(error.message || 500)
    .send(error.message || "Somethign wrong");

});

app.listen(PORT, () => console.log(`Up and running`));


