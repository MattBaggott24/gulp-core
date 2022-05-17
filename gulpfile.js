const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const prettier = require("gulp-prettier");

const sass = require("gulp-sass")(require("sass"));

function buildImages() {
	return gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
}

function build() {
	return gulp
		.src("src/html/pages/*")
		.pipe(
			nunjucksRender({
				path: ["src/html/components"],
			})
		)
		.pipe(prettier())
		.pipe(gulp.dest("dist"));
}
function style() {
	return gulp
		.src("./src/sass/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(prettier({ singleQuote: true }))
		.pipe(gulp.dest("./dist/css"))
		.pipe(browserSync.stream());
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
	watch("*src/html/**/*.html", series(build, browsersyncReload));
	watch("src/sass/**/*.scss", series(style, browsersyncReload));
	watch("src/images/*", series(buildImages, browsersyncReload));
}

exports.default = series(style, build, buildImages, browsersyncServer, watchTask);
