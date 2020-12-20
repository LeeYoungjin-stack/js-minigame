
let checkplay = 0;
const buttonselect = document.querySelector(".play-button"); // 버튼셀렉 
let buttonimg = document.querySelector("button > i");
const bodyselect = document.querySelector("body");

countdown( "time1", 0, 10 );



function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;
    let test;

    function twoDigits( n )  
    {
       return (n <= 9 ? "0" + n : n);
     }

function updateTimer()
{
  msLeft = endTime - (+new Date);

  if ( msLeft < 1000 ) {
      element.innerHTML = "countdown's over!";
  } 
  else {
      time = new Date( msLeft );
      hours = time.getUTCHours();
      mins = time.getUTCMinutes();
      element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
      test= setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
  }
}

function makeRetryfunc()
{

    const icon = document.createElement("i"); // 이미지 만들거야
    icon.setAttribute('class' , 'fas fa-play fa-2x');
    buttonselect.appendChild(icon);
    // retry 큰 div 자체를 만들거야 
    const addDiv = document.createElement("DIV");
    addDiv.setAttribute('class', 'addretry');
    bodyselect.appendChild(addDiv);
    addDiv.style.width="475px";
    addDiv.style.height="150px";
    addDiv.style.borderRadius="35px";
    addDiv.style.backgroundColor ="black";
    addDiv.style.opacity = "0.4";
    addDiv.style.position = "absolute";
    addDiv.style.transform = "translate(750px,400px)";
    addDiv.style.display="flex";
    addDiv.style.flexDirection="column";
    addDiv.style.justifyContent="center";
    addDiv.style.alignItems="center";
    // retry 버튼추가 
    const retrybutton = document.createElement("BUTTON");
    retrybutton.setAttribute('class', 'addRetryButton');
    const retryicon = document.createElement("I");
    const retrybuttonselect = document.querySelector(".retrybutton");
    retryicon.setAttribute('class', 'fas fa-redo fa-2x');
    addDiv.appendChild(retrybutton);
    retrybutton.style.transform= "translateY(-5px)"
    retrybutton.style.width ="65px";
    retrybutton.style.height ="65px";
    retrybutton.style.backgroundColor ="burlywood";
    retrybutton.style.border="none";
    retrybutton.style.outline="none";
    retrybutton.style.cursor="pointer";
    retrybutton.style.borderRadius="10px";
    retrybutton.style.border="3px solid black";
    retrybutton.appendChild(retryicon);

    // Replay 추가
    const replay = document.createElement("DIV");
    replay.setAttribute('class', 'replayAndMark');
    replay.innerText="Replay";
    replay.style.color= "white";
    replay.style.fontSize = "32px";
    // replay.style.margin ="5px";
    addDiv.appendChild(replay);
    // question mark 추가 
    const question = document.createElement("I");
    question.setAttribute('class', 'fas fa-question');
    question.style.color="red";
    question.style.transform="translateX(10px)";
    replay.appendChild(question);

}


function btnImgReset(){
    buttonimg= document.querySelector("button > i");
            buttonselect.removeChild(buttonimg)

}

    buttonselect.addEventListener("click", event=> {
        if (checkplay==0)
    {
         checkplay=1;
        btnImgReset(); // / 버튼아래있는 이미지 무조건 삭제 
        
         const icon = document.createElement("i"); // 이미지 만들거야
         icon.setAttribute('class' , 'fas fa-stop fa-2x');
         buttonselect.appendChild(icon);
         element = document.getElementById("time1");
         endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
         updateTimer();
     }
    
        else {
             // 버튼아래이미지 전체셀렉
            btnImgReset(); // / 버튼아래있는 이미지 무조건 삭제
            makeRetryfunc(); 
            clearTimeout(test);
            checkplay=0;
        }
    
    })
    

}




