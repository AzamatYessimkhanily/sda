function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}


function animate({duration, draw, timing}) {
let start = performance.now();
  requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }


  elem.onclick = function() {
    animate({
      duration: 1000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        elem.style.width = progress * 85 + '%';
      }
    });
  };

