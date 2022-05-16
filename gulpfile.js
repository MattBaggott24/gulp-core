const { src, dest, series, watch } = require("gulp");
const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));

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
	watch("*src/html/**/*.html", series(build, browsersyncReload));
	watch("src/sass/**/*.scss", series(style, browsersyncReload));
}
exports.default = series(style, build, browsersyncServer, watchTask);
