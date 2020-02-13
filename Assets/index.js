var ElWiz = $("#wizard");



$("#wizard").click(function(){
$(this).toggleClass("hide")

});
$("#wizard").mouseEnter(function(){
    $(this).append($("<span> Say hi!</span>"))
})