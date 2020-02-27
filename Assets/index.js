var ElWiz = $("#wizard");



$("#wizDiv").click(function(){

if ($("#wizard").is(":visible"))
    $("#wizard").fadeOut(1000);
else 
    $("#wizard").fadeIn(1000);
});

$("#wizDiv").mouseenter(function(){
    $(this).prepend($("<span id='greeting'> Hi!</span>"))
});

$('#wizDiv').mouseleave(function(){
    $('#greeting').remove()
})
