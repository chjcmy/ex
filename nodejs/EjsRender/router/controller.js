module.exports = function (app){

    app.get("/", function(req, res){
        var date = new Date();

        var render_data = {
            str : "문자열입니다",
            number : 100,
            date : date
        };

        res.render("index.ejs", render_data);
    });

    app.get("/test", function(req, res){
        res.render("test.ejs");
    });

}