wwindow = document.querySelectorAll(".window")[0];
windoww = document.querySelectorAll(".desktop")[0].offsetWidth-1;
windowh = document.querySelectorAll(".desktop")[0].offsetHeight-45;
dragrd = wwindow.querySelectorAll(".drag-rd")[0];
dragru = wwindow.querySelectorAll(".drag-ru")[0];
draglu = wwindow.querySelectorAll(".drag-lu")[0];
dragld = wwindow.querySelectorAll(".drag-ld")[0];

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
    if(w>200){
      wwindow.style.width = w + 'px';
    }
    if(h>200){
      wwindow.style.height = h + 'px';
    }
  }

  function onMouseMove(event){
    if(event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
    resize(event.clientX - wwindow.getBoundingClientRect().left, event.clientY - wwindow.getBoundingClientRect().top);
    else{
      document.removeEventListener('mousemove', onMouseMove);
      wwindow.onmouseup = null;
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  wwindow.onmouseup = function(){
    document.removeEventListener('mousemove', onMouseMove);
    wwindow.onmouseup = null;
  };
};

// thanks @Bravo on stackoverflow for help me on this part https://stackoverflow.com/questions/58350597/creating-an-html-template-that-looks-like-windown-but-have-problems-with-the-res
dragru.onmousedown = function (event) {
  let bottom = wwindow.getBoundingClientRect().bottom;
  let left = wwindow.getBoundingClientRect().left;

  function resize(w, h) {
      if (w > 200) {
          wwindow.style.width = w + 'px';
      }
      if (h > 200) {
          wwindow.style.top = bottom - h + 'px';
          wwindow.style.height = h + 'px';
      }
  }

  function onMouseMove(event) {
      if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
          resize(event.clientX - left, bottom - event.clientY);
      else {
          document.removeEventListener('mousemove', onMouseMove);
          wwindow.onmouseup = null;
      }
  }

  document.addEventListener('mousemove', onMouseMove);

  wwindow.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      wwindow.onmouseup = null;
  };
};

draglu.onmousedown = function (event) {
  let bottom = wwindow.getBoundingClientRect().bottom;
  let right = wwindow.getBoundingClientRect().right;
  let left = wwindow.getBoundingClientRect().left;

  function resize(w, h, x) {
      if (w > 200) {
          wwindow.style.left = x + 'px';
          wwindow.style.width = w + 'px';
      }
      if (h > 200) {
          wwindow.style.top = bottom - h + 'px';
          wwindow.style.height = h + 'px';
      }
  }

  function onMouseMove(event) {
      if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
          resize(right - event.clientX, bottom - event.clientY, event.clientX);
      else {
          document.removeEventListener('mousemove', onMouseMove);
          wwindow.onmouseup = null;
      }
  }

  document.addEventListener('mousemove', onMouseMove);

  wwindow.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      wwindow.onmouseup = null;
  };
};

dragld.onmousedown = function (event) {
  let top = wwindow.getBoundingClientRect().top;
  let right = wwindow.getBoundingClientRect().right;
  let left = wwindow.getBoundingClientRect().left;

  function resize(w, h, x) {
      if (w > 200) {
          wwindow.style.left = x + 'px';
          wwindow.style.width = w + 'px';
      }
      if (h > 200) {
          wwindow.style.height = h + 'px';
      }
  }

  function onMouseMove(event) {
      if (event.pageY < windowh && event.pageY > 1 && event.pageX < windoww && event.pageX > 1)
          resize(right - event.clientX, event.clientY - top, event.clientX);
      else {
          document.removeEventListener('mousemove', onMouseMove);
          wwindow.onmouseup = null;
      }
  }

  document.addEventListener('mousemove', onMouseMove);

  wwindow.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      wwindow.onmouseup = null;
  };
};