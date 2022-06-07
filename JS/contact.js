function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) =>{
          setTimeout(() => elemento.innerHTML += letra, 110 * i);
            
      });
    }
    
    const titulo = document.querySelector('h1');
    typeWriter (titulo);

    function checkInputs(inputs) {
        var filled = true;
        
        inputs.forEach(function(input) {
            
          if(input.value === "") {
              filled = false;
          }
        
        });
        
        return filled;
        
      }
      var inputs = document.querySelectorAll("input");
      var button = document.querySelector("button");
      inputs.forEach(function(input) {
          
        input.addEventListener("keyup", function() {
          if(checkInputs(inputs)) {
            button.disabled = false;
          } else {
            button.disabled = true;
          }
        });
      });