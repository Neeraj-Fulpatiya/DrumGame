// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("i got clicked");
// }
//eventtarget method  addeventListener() sets up a fucntion to be clled whenerver the specified ebent is deliveres to the target
// common targets are elemetns ,documetn and window but the target may be any object that supports evebts (such as XMLHttpReqest)
// is has 2 perimeters 
//  1 is type =  a case sensitive string representing the event type to listen for
//  and we have to add this event as an string which here is click we can learn more in w3 schools

//  2 is listener =it is a javascript fucntoin which is going to be called when that clcik event gets detected

// now what 1st line is going to do find first first button in our document which is w drum buton and then it adds eventlistenr to that
// button so that it listens to the clcik that happens to it

// ->->one thing to notice is that we didnt add parenthesis in handleclcik method that is beocs if we would have added that parenthesis
// then as soon as our page get refresh and as soon as that event listner is added that function would get a call and thats what wee donot want
// mtlb ye h ki hm chahte h ki jb actual click ho tb he wo event trugger ho naaki page load hote he

// kuch log anonmuous function ko use krte h joki same he kaam krta h 

// document.querySelector("button").addEventListener("click",function(){
//     alert("i got clciekd");
// });
// this anonmuous is the best way to do the thing but we can prefer any

// what if we wanted to add event listener to all the buttons simply we will use loop


//  var totalNumberOfDrums=document.querySelectorAll(".drum").length;
// // .drum se lia mne kyoki agr button se leta or koi agr button xtra bad me jodta to muje aage dikkt aati

// for(var i=0;i<totalNumberOfDrums;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         // alert("we all are reeady to move further");
//     var audio=new Audio("sounds/nrj.mp3");
//     audio.play();

//     })
// }
var totalNumberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<totalNumberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
    //     switch(buttonInnerHtml){
    //         // case "w":
    //         //     var clip1=new Audio("sounds/clip1");
    //         //     clip1.play();
    //         //     break;

    //             // case "w":
    //             //     var clip1=new Audio("sounds/clip1");
    //             //     clip1.play();
    //             //     break;
    //                 case "w":
    //                     var clip1=new Audio("sounds/clip1.mp3");
    //                     clip1.play();
    //                     break;
    //                     case "a":
    //                         var clip2=new Audio("sounds/clip2.mp3");
    //                         clip2.play();
    //                         break;
    //                         case "s":
    //                             var clip3=new Audio("sounds/nrj.mp3");
    //                             clip3.play();
    //                             break;
    //                             case "d":
    //                                 var clip4=new Audio("sounds/clip4.mp3");
    //                                 clip4.play();
    //                                 break;
    //                                 case "j":
    //                                     var clip5=new Audio("sounds/clip5.mp3");
    //                                     clip5.play();
    //                                     break;
    //                                     case "k":
    //                                         var clip6=new Audio("sounds/clip6.mp3");
    //                                         clip6.play();
    //                                         break;   
    //      case "l":
    //     var clip7=new Audio("sounds/clip7.mp3");
    //     clip7.play();
    //     break;
    //   default:
    //     var no=new Audio("sounds/no.mp3");
    //     no.play();

    //     }
    makeSound(buttonInnerHtml);
    }
    )
}

// now adding event listener to the whole doucent by writing ,see below
document.addEventListener("keydown",function(event){
    // alert("sahil tere 17 marks b jyada aa gye");
     makeSound(event.key);

})
 function makeSound(key){
    switch(key){
        // case "w":
        //     var clip1=new Audio("sounds/clip1");
        //     clip1.play();
        //     break;

            // case "w":
            //     var clip1=new Audio("sounds/clip1");
            //     clip1.play();
            //     break;
                case "w":
                    var clip1=new Audio("sounds/clip1.mp3");
                    clip1.play();
                    break;
                    case "a":
                        var clip2=new Audio("sounds/clip2.mp3");
                        clip2.play();
                        break;
                        case "s":
                            var clip3=new Audio("sounds/nrj.mp3");
                            clip3.play();
                            break;
                            case "d":
                                var clip4=new Audio("sounds/clip4.mp3");
                                clip4.play();
                                break;
                                case "j":
                                    var clip5=new Audio("sounds/clip5.mp3");
                                    clip5.play();
                                    break;
                                    case "k":
                                        var clip6=new Audio("sounds/clip6.mp3");
                                        clip6.play();
                                        break;   
     case "l":
    var clip7=new Audio("sounds/clip7.mp3");
    clip7.play();
    break;
  default:
    var no=new Audio("sounds/no.mp3");
    no.play();

    }


}

