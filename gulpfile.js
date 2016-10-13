var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var htmlreplace = require('gulp-html-replace');
var cssmin = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');

gulp.task('default', function() {

    // Delete existing dist files
    del([
        'dist/**/*',
    ]);

    var templates = [
            'app/**/*.html',
            '!*/index.html',
            '!*/index-async.html',
            '!*app/bower_components/**/*.html'
    ];

    // Add templates for lazy loading
    gulp.src(templates)
        .pipe(gulp.dest('dist/'));

    // Create a template cache for eagar loading
    gulp.src(templates)
        .pipe(htmlmin(
            {
                collapseWhitespace: true,
                caseSensitive: true,
            }
        ))
        .pipe(templateCache('templates.min.js',{
            module:'myApp'
        }))
        .pipe(gulp.dest('dist/js'));
        
    // Concatinate and minify all css files
    gulp.src([
            'app/bower_components/html5-boilerplate/dist/css/normalize.css',
            'app/bower_components/html5-boilerplate/dist/css/main.css',
            'app/app.css',
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.css'))
        .pipe(cssmin({'keepSpecialComments' : '0'}))
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('dist/css/'));

    // Concatinate and minify all js files
    gulp.src([
            'app/**/*.js',
            '!app/bower_components/**/*.js',
            '!app/**/*_test.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(uglify({ 'outSourceMap' : true }))
        .pipe(gulp.dest('dist/js/'));
    
    // Clean up imports
    gulp.src('app/index.html')
        .pipe(htmlreplace({
            'css':'css/app.min.css',
            'js':['js/app.min.js','js/templates.min.js']
        }))
        .pipe(replace(/src="(.+?)"\scdn="(.+?)"/gmi, 'src="$2"'))
        .pipe(replace(/href="(.+?)"\scdn="(.+?)"/gmi, 'href="$2"'))
        .pipe(htmlmin(
            {
                collapseWhitespace: true,
                caseSensitive: true,
            }
        ))
        .pipe(gulp.dest('dist/'));

    // Copy data folder
    gulp.src('app/data/**/*')
    .pipe(gulp.dest('dist/data'));
});