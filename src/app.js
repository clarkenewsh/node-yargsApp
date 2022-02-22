// import yargs NPM yargs package
const yargs = require("yargs");
// import utils/index.js file
const Movie = require("./utils");

// In the terminal we are running - node src/app.js --add --title="spiderman" --actor="Tom Holland"
const app = (yargsObj) => {
    // check if add key exists - in terminal we are typing: node src/app.js --add
    if(yargsObj.add){
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        // Add movie to array, console log at end of runtime
    } else if(yargsObj.addMore) {
        const movie1 = new Movie(yargsObj.title, yargsObj.actor);
        const movie2 = new Movie(yargsObj.title1, yargsObj.actor1);
        movie1.add();
        // console.log(movie1.list());
        movie2.add();
        console.log(movie1.list());

    } else {
        console.log("incorrect command");
    }
}

// Call the app function
app(yargs.argv);
// console.log(yargs.argv.name);


