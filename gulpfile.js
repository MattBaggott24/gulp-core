const { src, dest, watch } = require("gulp");
const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");

const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");

gulp.task("default", () => {
	// selects a source folder and pipes the files to the dist folder
	return gulp
		.src("src/pages/*")
		.pipe(
			nunjucksRender({
				path: ["src/templates"],
			})
		)
		.pipe(gulp.dest("dist"));
});

gulp.task("buildSass", () => {
	return gulp.src("./src/sass/**/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./dist/css"));
});
