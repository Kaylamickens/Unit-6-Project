$("img").hide();
$(".reset").hide();

$(".no").click(function() {
    $(".scary-movie").slideDown();
    $(".bed").slideDown();
    $(".pick").text("Yay to going home! Now, would you rather watch a scary movie or go to bed? *Click the image*");
    $(".haunted-house").hide();
    $(".no").hide();
    $("body").css("background-color", "white");
    $(".reset").show();



});
$(".yes").click(function() {
    $(".haunted-house").show();
    $(".scary-haunted-maze").show();
    $(".pick").text("Yay to haunted house! Which haunted house would you like to attend? haunted house or scary haunted mazed *Click the image*");
    $(".no").hide();
    $("body").css("background-color","white");
    $(".reset").show();

});
$(".haunted-house").click(function() {
    $(".scary-haunted-maze").hide();
    $(".pick").text("Enjoy the haunted house!");
    $(".reset").show();


});

$(".scary-haunted-maze").click(function() {
    $(".haunted-house").hide();
    $(".pick").text("Enjoy the maze!");
    $(".reset").show();
});


$(".scary-movie").click(function() {
    $(".bed").hide();
    $(".pick").text("Have fun watching the scary movie and staying home!");
    $(".reset").show();
});

$(".bed").click(function() {
    $(".scary-movie").hide();
    $(".pick").text("Have a good night!");
    $(".reset").show();
});

$(".reset").click(function() {
    $(".no").slideDown();
    $(".haunted-house").slideDown();
    $("img").hide();
    $(".reset").hide();
    $("body").css("background-color", "lightblue");


});