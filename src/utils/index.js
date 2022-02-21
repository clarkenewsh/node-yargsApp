const movieArr = [];

class Movie {
    constructor(title, actor = "you dont know who's in this") {
        this.title = title;
        this.actor = actor;
    }
    // add to movie arr function
    add() {
        movieArr.push(this);
        return movieArr;
    };
    list() {
        return movieArr;
    }
}

// export the file to app.js
module.exports = Movie;