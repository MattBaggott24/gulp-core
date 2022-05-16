const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
// sass.compiler = require("node-sass");

// gulp.task("default", () => {
// 	// selects a source folder and pipes the files to the dist folder
// });

function build() {
	return gulp
		.src("src/html/pages/*")
		.pipe(
			nunjucksRender({
				path: ["src/html/components"],
			})
		)
		.pipe(gulp.dest("dist"));
}

// gulp.task("buildSass", () => {
// 	// return gulp.src("./src/sass/**/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./dist/css"));
// 	return gulp.src("./src/sass/styles.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./dist/css"));
// });

function style() {
	return gulp.src("./src/sass/styles.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./dist/css")).pipe(browserSync.stream());
}

function browsersyncServer(cb) {
	browserSync.init({
		server: {
			baseDir: "./dist",
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browserSync.reload();
	cb();
}

function watchTask() {
	watch("*src/html/**/*.html", series(build, browsersyncReload)); //maybe add 2 lines here
	watch("src/sass/**/*.scss", series(style, browsersyncReload));
}
exports.default = series(style, build, browsersyncServer, watchTask);

// function watch() {
// 	browserSync.init({
// 		server: {
// 			baseDir: "./dist",
// 		},
// 	});
// 	gulp.watch("./sass/**/*.scss", style);
// 	gulp.watch("./html/**/*.html").on("change", browserSync.reload);
// }

// exports.style = style;
// exports.build = build;
// exports.watch = watch;
