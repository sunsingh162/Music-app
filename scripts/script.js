console.log('this is music app');
window.addEventListener('load',() => {
    let sound=document.querySelectorAll(".sound");
    let pads=document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];


    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
            console.log('playing');
            //sound[index].currentTime=0;
            
            sound[index].play();

            document.addEventListener('play', function(e){
              var sound = document.querySelectorAll('.sound');
              for(var i = 0, len = sound.length; i < len;i++){
                  if(sound[i] != e.target){
                      sound[i].pause();
                  }
              }
          }, true); 

        pad.addEventListener("dblclick",function(){
            console.log('paused');
            sound[index].pause();
        })    
        
         
            
            createBubble(index);
            
    });
});

    
        function createBubble(index){

        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease-in-out`;
        /* bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        }); */
      };
});