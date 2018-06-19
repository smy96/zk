var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");
var url = require("url");
var path = require("path");
var fs = require("fs");
var mock = require("./mock");
// var listData = require("./mock/data/data.json");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                var pathname = url.parse(req.url, true).pathname;

                pathname = pathname === "/" ? "/index.html" : pathname;
                if (/\/api\//.test(req.url)) {
                    if (pathname === "/api/list") {
                        res.end(JSON.stringify(mock("/api/list")));
                    }

                } else {
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }
            }
        }))
})