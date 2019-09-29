windoww = document.getElementById("window")
window.addEventListener('click', function(e){
    if(e.target.id=="title"){
        console.log(e.pageX + "," + e.pageY);
        windoww.css("left", e.pageX);
        windoww.css("top", e.pageY);
    }
});