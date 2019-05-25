//JSON is a simple data exchange format between JavaScript and the server.
//Browser is a JavaScript object SERVER Can be J.S., Python, PHP, ASP.NET



$("button").click(function() {
    $.getJSON("parse.json",function(obj){ 


    $.each(obj,function(key,value) {
        $("ul").append("<li>"+value.name+"<li>");
    });

    });



});
