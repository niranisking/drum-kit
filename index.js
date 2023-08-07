for (let a = 0; a < document.querySelectorAll(".drum").length; a++ ) {

document.querySelectorAll(".drum")[a].addEventListener("click", function() {
  this.style.color = "purple"

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  });

}




document.addEventListener("keypress", function(event) {

  makeSound(event.key)

  buttonAnimation(event.key)

})









function makeSound (alphabet) {

 


  switch (alphabet) {
    case "w": 
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      
      break;

    case "a": 
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();

      break;

    case "s": 
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();

    break;

    case "d": 
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();

    break;

    case "j": 
      var snare = new Audio ('sounds/snare.mp3');
      snare.play();

    break;

    case "k": 
      var crash = new Audio ('sounds/crash.mp3');
      crash.play();

      break;

    case "l": 
      var kick = new Audio ('sounds/kick.mp3');
      kick.play();



      case "c": 
      var tom1 = new Audio ('sounds/tom-1.mp3');
      tom1.play();
      
      break;

    case "q": 
      var tom2 = new Audio ('sounds/tom-2.mp3');
      tom2.play();

      break;

    case "f": 
      var tom3 = new Audio ('sounds/tom-3.mp3');
      tom3.play();

    break;

    case "i": 
      var tom4 = new Audio ('sounds/tom-4.mp3');
      tom4.play();

    break;

    case "m": 
      var snare = new Audio ('sounds/snare.mp3');
      snare.play();

    break;

    case "o": 
      var crash = new Audio ('sounds/crash.mp3');
      crash.play();

      break;

    case "z": 
      var kick = new Audio ('sounds/kick.mp3');
      kick.play();

    break; 



    


  
    default: console.log(buttonInnerHTML); }


}




function buttonAnimation (currentkey) {

//  var activeButton = document.querySelector("." + currentkey)

 switch (currentkey) {
  case "w":

  // activeButton.classList.add("pressed")
  document.querySelector(".w").classList.add("pressed");
  
    break;

      case "a":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".a").classList.add("pressed");

      
        break;

        case "z":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".z").classList.add("pressed");

      
        break;

        case "o":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".o").classList.add("pressed");

      
        break;

        case "m":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".m").classList.add("pressed");

      
        break;

        case "i":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".i").classList.add("pressed");

      
        break;

        case "s":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".s").classList.add("pressed");

      
        break;

        case "d":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".d").classList.add("pressed");

      
        break;

        case "j":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".j").classList.add("pressed");

      
        break;

        case "k":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".k").classList.add("pressed");


      
        break;

        case "l":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".l").classList.add("pressed");

      
        break;
 

        case "f":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".f").classList.add("pressed");

      
        break;

        case "q":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".q").classList.add("pressed");

      
        break;

        case "c":
    
      // activeButton.classList.add("pressed")
      document.querySelector(".c").classList.add("pressed");

      
        break;
  default: console.log(buttonInnerHTML);

 }

}










































//   var audio0 = new Audio('sounds/tom-1.mp3');
//   audio0.play();  
   
// }); 
//     }

//    else if ( a == 1 ) {

//         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//           this.style.color = "white"
//           var audio1 = new Audio('sounds/tom-2.mp3');
//           audio1.play();  
           
//         }); 
//             }

//    else if ( a == 2 ) {

//                 document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                   this.style.color = "white"
//                   var audio2 = new Audio('sounds/tom-3.mp3');
//                   audio2.play();  
                   
//                 }); 
//                     }


//   else if ( a == 3 ) {

//                         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                           this.style.color = "white"
//                           var audio3 = new Audio('sounds/tom-4.mp3');
//                           audio3.play();  
                           
//                         }); 
//                             }
    
//   else if ( a == 4 ) {

//                                 document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                   this.style.color = "white"
//                                   var audio4 = new Audio('sounds/snare.mp3');
//                                   audio4.play();  
                                   
//                                 }); 
//                                     }

//   else if ( a == 5 ) {

//                                         document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                           this.style.color = "white"
//                                           var audio5 = new Audio('sounds/crash.mp3');
//                                           audio5.play();  
                                           
//                                         }); }
//   else if ( a == 6 ) {

//                                             document.querySelectorAll(".drum")[a].addEventListener("click", function() {
//                                               this.style.color = "white"
//                                               var audio6 = new Audio('sounds/kick.mp3');
//                                               audio6.play();  
                                               
//                                             }); 
//                                         }