let project_folder = "docs"; // Главная папка сборки
let source_folder = "#source"; // Место сборки

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/CSS/",
		js: project_folder + "/JS/",
		lib: project_folder + "/LIB/",
		Img: project_folder + "/IMG/",
		fonts: project_folder + "/FONTS/",
	},
	src: {
		html: source_folder + "/**.html",
		css: source_folder + "/SCSS/style.scss",
		js: source_folder + "/JS/script.js",
		lib: source_folder + "/lib/**",
		Img: source_folder + "/IMG/**",
		fonts: source_folder + "/fonts/*.ttf",
	},
	watch: {
		html: source_folder + "/**/*.html",
		css: source_folder + "/SCSS/**/*.scss",
		js: source_folder + "/JS/**/*.js",
		lib: source_folder + "/lib/**",
		Img: source_folder + "/IMG/**",
	},
	clean: "./" + project_folder + "/"
}
var sass = require('gulp-sass')(require('sass'));
let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	del = require('del'),
	prefix = require('gulp-autoprefixer'),
	clean_css = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	babel = require('gulp-babel');



function clean() {
	return del(path.clean);
}
function browserSync() {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/"
		},
		port: 3002,
		notify: false,
	})
}
function img() {
	return src(path.src.Img)
		.pipe(dest(path.build.Img))
		.pipe(dest(browsersync.stream()))
		.pipe(browsersync.stream())
}
function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		.pipe(dest(path.build.html))
		.pipe(dest(browsersync.stream()))
		.pipe(browsersync.stream())
}
function css() {
	return gulp.src(path.src.css)
		.pipe(sass(), { outputStyle: "expanded" })
		.pipe(prefix({
			overrideBrowserslist: ["last 5 versions"],
			cascade: true
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(gulp.dest(path.build.css))
		.pipe(dest(browsersync.stream()))
		.pipe(browsersync.stream())
}

function js() {
	return gulp.src(path.src.js)
		.pipe(fileinclude())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest(path.build.js))
		.pipe(dest(browsersync.stream()))
		.pipe(browsersync.stream())
}

function lib() {
	return gulp.src(path.src.lib)
		.pipe(gulp.dest(path.build.lib))
		.pipe(dest(browsersync.stream()))
		.pipe(browsersync.stream())
}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.lib], lib);
	gulp.watch([path.watch.Img], img);

}

let build = gulp.series(clean, gulp.parallel(css, html, js, lib, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.css = css;
exports.img = img;
exports.js = js;
exports.lib = lib;
exports.build = build;
exports.html = html;
exports.watch = watch;
exports.default = watch;