dropupcontent = document.getElementById('start-content'); //you can change the id to the same id of your dropup content

// close te dropdown when you click out the menu
window.addEventListener('click', function(e){
    if(dropupcontent.classList.contains('dropup-show') && !e.target.classList.contains("start-btn") && e.target.id!=dropupcontent.id && e.target.parentElement.id!=dropupcontent.id)
        toggleUp();
});


function toggleUp(){
    dropupcontent.classList.toggle("dropup-show");
}


