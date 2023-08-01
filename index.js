for (let a = 0; a < document.querySelectorAll(".drum").length; a++ ) {

    if ( a == 0 ) {

document.querySelectorAll(".drum")[a].addEventListener("click", function() {
  this.style.color = "white"
  var audio0 = new Audio('sounds/tom-1.mp3');
  audio0.play();  
   
}); 
    }

   else if ( a == 1 ) {

        document.querySelectorAll(".drum")[a].addEventListener("click", function() {
          this.style.color = "white"
          var audio1 = new Audio('sounds/tom-2.mp3');
          audio1.play();  
           
        }); 
            }

   else if ( a == 2 ) {

                document.querySelectorAll(".drum")[a].addEventListener("click", function() {
                  this.style.color = "white"
                  var audio2 = new Audio('sounds/tom-3.mp3');
                  audio2.play();  
                   
                }); 
                    }


  else if ( a == 3 ) {

                        document.querySelectorAll(".drum")[a].addEventListener("click", function() {
                          this.style.color = "white"
                          var audio3 = new Audio('sounds/tom-4.mp3');
                          audio3.play();  
                           
                        }); 
                            }
    
  else if ( a == 4 ) {

                                document.querySelectorAll(".drum")[a].addEventListener("click", function() {
                                  this.style.color = "white"
                                  var audio4 = new Audio('sounds/snare.mp3');
                                  audio4.play();  
                                   
                                }); 
                                    }

  else if ( a == 5 ) {

                                        document.querySelectorAll(".drum")[a].addEventListener("click", function() {
                                          this.style.color = "white"
                                          var audio5 = new Audio('sounds/crash.mp3');
                                          audio5.play();  
                                           
                                        }); }
  else if ( a == 6 ) {

                                            document.querySelectorAll(".drum")[a].addEventListener("click", function() {
                                              this.style.color = "white"
                                              var audio6 = new Audio('sounds/kick.mp3');
                                              audio6.play();  
                                               
                                            }); 
                                        }
  
}