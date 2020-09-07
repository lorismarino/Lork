/* eslint-disable */
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const webpack = require('webpack-stream')
const plugins = require('gulp-load-plugins')()
const del = require('del')

// Folders
const folders = {
  src: './',
  dist: './dist/',
  exemples: './exemples/',
}

// Messages
const message = {
  compiled: "<%= file.relative %> has been compiled.",
  compiledMinified: "<%= file.relative %> has been compiled and minified.",
  exported: "<%= file.relative %> has been exported.",
  exportedMinified: "<%= file.relative %> has been exported and minified.",
  clean: "<%= file.relative %> has been deleted.",
  error: "<%= error.message %>"
}

/******
 * Development
 */

// Server

const server = () => {
  browserSync.init({
    server: '.',
    open: false,
  })

  console.log('\n\x1b[33m%s\x1b[0m', 'HERE WE GO !!!\n');

  gulp.watch(`${folders.src}scss/**/*.scss`, styles)
  gulp.watch(`${folders.src}js/**/*.js`, scripts)
  gulp.watch(`${folders.exemples}**/*.html`).on("change", browserSync.reload);
}

// Compile scss and add autoprefixer
const styles = () => {
  return gulp.src(`${folders.src}scss/main.scss`)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass()
      .on("error", plugins.notify.onError({
        message: message.error,
        title: "Scss error"
      }))
    )
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(`${folders.dist}css`))
    .pipe(plugins.notify({
      message: message.compiled,
      title: "Scss"
    }))
    .pipe(browserSync.stream())
}


// Compile es6 modules
const scripts = () => {
  return gulp.src(`${folders.src}js/main.js`)
    .pipe(plugins.plumber())
    .pipe(webpack({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      mode: 'development',
      devtool: '#inline-source-map'
    }))
    .pipe(gulp.dest(`${folders.dist}js`))
    .pipe(plugins.notify({
      message: message.compiled,
      title: "Js"
    }))
    .pipe(browserSync.stream())
}

/******
 * Production
 */

// Clean dist
const clean = () => {
  return del(`${folders.dist}`)
}

// Compile scss, add autoprefixer and minify
const minStyles = () => {
  return gulp.src(`${folders.src}scss/**/*.scss`)
    .pipe(plugins.sass()
      .on("error", plugins.notify.onError({
        message: message.error,
        title: "Scss error"
      }))
    )
    .pipe(plugins.autoprefixer())
    .pipe(plugins.cleanCss())
    .pipe(gulp.dest(`${folders.dist}css`))
    .pipe(plugins.notify({
      message: message.compiledMinified,
      title: "Css"
    }))
}

// Compile and minify es6
const minScripts = () => {
  return gulp.src(`${folders.src}js/main.js`)
    .pipe(plugins.plumber())
    .pipe(webpack({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env']
              }
            }
          }
        ]
      },
      mode: 'production'
    }))
    .pipe(gulp.dest(`${folders.dist}js`))
    .pipe(plugins.notify({
      message: message.compiledMinified,
      title: "Js"
    }))
}

exports.default = gulp.series(gulp.parallel(styles, scripts), server)
exports.build = gulp.series(clean, gulp.parallel(minStyles, minScripts))
