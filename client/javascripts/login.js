var main = function(){
    "use strict";

    $("button").on("click", function(){
        var acctName = $(this).attr("id");
        console.log(acctName+" attempting to login");
        $.post("user/"+acctName, function(res){
            window.open(document.URL + res);
        });
    });
};

$(document).ready(main);