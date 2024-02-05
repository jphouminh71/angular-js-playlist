const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Task to start the BrowserSync server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./", // Set the base directory of your project
    },
  });
});

// Task to watch for changes and reload the browser
gulp.task(
  "watch",
  gulp.series("browser-sync", function () {
    gulp.watch("**/*.*").on("change", browserSync.reload);
  })
);

// Default task to run the 'watch' task
gulp.task("default", gulp.series("watch"));
