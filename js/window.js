wwindow = document.querySelectorAll(".window")[0];
windoww = document.querySelectorAll(".desktop")[0].offsetWidth-1;
windowh = document.querySelectorAll(".desktop")[0].offsetHeight-45;
dragrd = wwindow.querySelectorAll(".drag-rd")[0];

dragwindow = wwindow.querySelectorAll(".title")[0];
  window.addEventListener('click', function(e){
});

dragwindow.onmousedown = function(event) {
  let shiftX = event.clientX - wwindow.getBoundingClientRect().left;
  let shiftY = event.clientY - wwindow.getBoundingClientRect().top;

  wwindow.style.zIndex = 10;

  windoww = document.querySelectorAll(".desktop")[0].offsetWidth-1;
  windowh = document.querySelectorAll(".desktop")[0].offsetHeight-45; 

  function moveAt(pageX, pageY) {
    wwindow.style.left = pageX - shiftX + 'px';
    wwindow.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
      if(event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
      moveAt(event.pageX, event.pageY);
      else{
        document.removeEventListener('mousemove', onMouseMove);
        wwindow.onmouseup = null;
      }
  }

  // move the wwindow on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the wwindow, remove unneeded handlers
  wwindow.onmouseup = function() {
    wwindow.style.zIndex = 9;
    document.removeEventListener('mousemove', onMouseMove);
    wwindow.onmouseup = null;
  };
};

dragrd.onmousedown = function(event) {
  function resize(w, h){
    console.log(w + ", " + h);
    wwindow.style.width = w + 'px';
    wwindow.style.height = h + 'px';
  }

  function onMouseMove(event){
    resize(event.clientX - wwindow.getBoundingClientRect().left, event.clientY - wwindow.getBoundingClientRect().top);
  }

  document.addEventListener('mousemove', onMouseMove);

  wwindow.onmouseup = function(){
    document.removeEventListener('mousemove', onMouseMove)
  };
};