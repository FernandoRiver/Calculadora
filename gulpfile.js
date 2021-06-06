const { src, dest, watch} = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
// CSS JavaScript

function css(){
    return src("src/scss/app.scss")
    .pipe( sass() )
    .pipe( dest("build/css/") );
}

function JavaScript(){
    return src("src/js/**/*.js")
    .pipe( concat("bundle.js") )
    .pipe( dest("build/js/") )

}

function watchArchivos(){ 
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", JavaScript);

}

exports.watch = watchArchivos;