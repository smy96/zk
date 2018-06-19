var listData = require("./data/data.json");
var jsonobj = {
    "/api/list": listData
};
module.exports = function(url) {
    listData(url)
}