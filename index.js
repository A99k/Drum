var button=document.querySelectorAll('.drum')
button.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        let val=event.target.innerHTML;
      
        playSound(val);
    })
})

document.addEventListener('keypress',(event)=>{
    playSound(event.key)
})

function playSound(val){
    switch (val) {
        case "a":
            {
                let audio=new Audio('./sounds/crash.mp3')
            audio.play();
            break;
            }
               
        case "w":
                {
                    let audio=new Audio('./sounds/kick-bass.mp3')
                  audio.play();
                   break;
                }
        
       case "j":
                    {
                        let audio=new Audio('./sounds/snare.mp3')
                    audio.play();
                    break;
                    }
                       
        case "d":
                        {
                            let audio=new Audio('./sounds/tom-1.mp3')
                          audio.play();
                           break;
                        }
                        case "k":
                            {
                                let audio=new Audio('./sounds/tom-2.mp3')
                            audio.play();
                            break;
                            }
                               
                        case "l":
                                {
                                    let audio=new Audio('./sounds/tom-3.mp3')
                                  audio.play();
                                   break;
                                }
                                case "s":
                                    {
                                        let audio=new Audio('./sounds/tom-4.mp3')
                                      audio.play();
                                       break;
                                    }
                        
        default:
            break;
       }
}