var ElWiz = $("#wizard");



$("#wizard").click(function(){
$(this).toggleClass("hide")

});
$("#wizard").hover(function(){
    $(this).append($("<span> Say hi!</span>"))
})