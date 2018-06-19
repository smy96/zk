define(["jquery", "render"], function($, render) {
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function(res) {
            console.log(res);
            render(res, "#list-tpl", ".ul-list");
        }
    })

})