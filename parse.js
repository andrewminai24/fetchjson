


$("button").click(function() {
    $.getJSON("parse.json",function(obj){ 


    $.each(obj,function(key,value) {
        $("ul").append("<li>"+value.name+"<li>");
    });

    });



});
