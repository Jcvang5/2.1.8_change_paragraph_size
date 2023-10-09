$( document ).ready(function() {
    console.log("test");
    $("#minimize").on("click",mini);
    
    function mini(){
    $(".footer").attr("font-size", "7px");
    $(".footnote").attr("font-size", "10px");
    }
    });



