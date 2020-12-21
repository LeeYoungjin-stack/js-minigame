const bgm = new Audio('sound/bg.mp3');
const winbgm = new Audio('sound/game_win.mp3');
const stopalert = new Audio('sound/alert.wav');
const bugmusic = new Audio('sound/bug_pull.mp3');
const carrotmusic = new Audio('sound/carrot_pull.mp3');
let checkplay = 0;
const buttonselect = document.querySelector(".play-button"); // 버튼셀렉 
let buttonimg = document.querySelector("button > i");
const bodyselect = document.querySelector("body");
const retryicon = document.createElement("I");
const playboxselect = document.querySelector(".play-button_box");
const sectionselect = document.querySelector(".sectionhere");
countdown( "time1", 0, 10 );
const widthmin=500;
const widthmax=1430;
const heightmin= 320;
const heightmax= 550;
let carrotnum=0;
let carrotcount = document.querySelector(".carrot-count");
carrotcount.innerHTML = carrotnum;


function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;
    let test;
    const retrybutton = document.createElement("BUTTON");

    function twoDigits( n )  
    {
       return (n <= 9 ? "0" + n : n);
     }

function updateTimer()
{
  msLeft = endTime - (+new Date);

  if ( msLeft < 1000 ) {
      element.innerHTML = "0:0";
      if(carrotnum>0){
        const addDiv = document.createElement("DIV");
        addDiv.setAttribute('class', 'you lost');
        sectionselect.appendChild(addDiv);
        addDiv.style.width="475px";
        addDiv.style.height="150px";
        addDiv.style.borderRadius="35px";
        addDiv.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
        addDiv.style.position = "absolute";
        addDiv.style.transform = "translate(750px,400px)";
        addDiv.style.display="flex";
        addDiv.style.flexDirection="column";
        addDiv.style.justifyContent="center";
        addDiv.style.alignItems="center";
        // retry 버튼추가 
        retrybutton.setAttribute('class', 'addRetryButton');
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
        replay.innerText="YOU LOST";
        replay.style.color= "white";
        replay.style.fontSize = "32px";
    
        addDiv.appendChild(replay);
        // question mark 추가 
        const question = document.createElement("I");
        question.setAttribute('class', 'fas fa-poo');
        question.style.color = "brown";
        question.style.transform="translateX(10px)";
        replay.appendChild(question);
        clearTimeout(test);
        checkplay=0;

      }
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

    //play icon 재생성
    const icon = document.createElement("i"); 
    icon.setAttribute('class' , 'fas fa-play fa-2x');
    buttonselect.appendChild(icon);
    // section에 retry 큰 div 생성
    const addDiv = document.createElement("DIV");
    addDiv.setAttribute('class', 'addretry');
    sectionselect.appendChild(addDiv);
    addDiv.style.width="475px";
    addDiv.style.height="150px";
    addDiv.style.borderRadius="35px";
    addDiv.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
    addDiv.style.position = "absolute";
    addDiv.style.transform = "translate(750px,400px)";
    addDiv.style.display="flex";
    addDiv.style.flexDirection="column";
    addDiv.style.justifyContent="center";
    addDiv.style.alignItems="center";
    // retry 버튼추가 
    retrybutton.setAttribute('class', 'addRetryButton');
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
            buttonselect.removeChild(buttonimg);

}

function retryDivReset(){
    resetRetrySelect= document.querySelector("section > div");
    sectionselect.removeChild(resetRetrySelect);

}



function getRandomImageWidth() {
    return Math.random() * (widthmax-widthmin) + widthmin;
}

function getRandomImageHeight(){
    return Math.random() * (heightmax-heightmin) + heightmin;
}

function makeCarrotandBug(){
    for(i =0 ; i<10 ; i ++)
    {
    const createImage = document.createElement("IMG");
    const createImagetwo = document.createElement("IMG");
         createImage.setAttribute('src', 'img/carrot.png');
         createImage.setAttribute('width', '70');
         createImage.setAttribute('height', '70');
         createImage.setAttribute('class', 'carrot');
         createImagetwo.setAttribute('src', 'img/bug.png');
         createImagetwo.setAttribute('width', '70');
         createImagetwo.setAttribute('height', '70');
         createImagetwo.setAttribute('class', 'bug');
         sectionselect.append(createImage);
         sectionselect.append(createImagetwo);
         let createwidth = parseInt(getRandomImageWidth());
         let createheight = parseInt(getRandomImageHeight());
         let createwidthtwo = parseInt(getRandomImageWidth());
         let createheighttwo = parseInt(getRandomImageHeight());
         createImage.style.position ="absolute";
         createImage.style.left = createwidth +"px";
         createImage.style.top = createheight+"px";
         createImage.style.cursor= "pointer";
         createImagetwo.style.position ="absolute";
         createImagetwo.style.left = createwidthtwo +"px";
         createImagetwo.style.top = createheighttwo+"px";
         createImagetwo.style.cursor = "pointer";
         carrotnum += 1;
        carrotcount.innerHTML = carrotnum;
         createImage.addEventListener("click", event =>{
            //당근삭제 + 당근의 개수 표시
            carrotmusic.play(); 
            sectionselect.removeChild(createImage);
            carrotnum -= 1;
            carrotcount.innerHTML= carrotnum;
            //마지막 당근 클릭시 
            if(carrotnum == 0){
                //play icon 재생성
    // section에 retry 큰 div 생성
    const addDiv = document.createElement("DIV");
    addDiv.setAttribute('class', 'addretry');
    sectionselect.appendChild(addDiv);
    addDiv.style.width="475px";
    addDiv.style.height="150px";
    addDiv.style.borderRadius="35px";
    addDiv.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
    addDiv.style.position = "absolute";
    addDiv.style.transform = "translate(750px,400px)";
    addDiv.style.display="flex";
    addDiv.style.flexDirection="column";
    addDiv.style.justifyContent="center";
    addDiv.style.alignItems="center";
    // retry 버튼추가 
    retrybutton.setAttribute('class', 'addRetryButton');
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
    replay.innerText="YOU WON";
    replay.style.color= "white";
    replay.style.fontSize = "32px";
    // replay.style.margin ="5px";
    addDiv.appendChild(replay);
    // question mark 추가 
    const question = document.createElement("I");
    question.setAttribute('class', 'fas fa-birthday-cake');
    question.style.color="red";
    question.style.transform="translateX(10px)";
    replay.appendChild(question);
    bgm.pause();
    winbgm.play();
    clearTimeout(test);
    checkplay=0;
            }

         })

         createImagetwo.addEventListener("click", event => {

            bugmusic.play();
            buttonselect.style.visibility = "hidden";
    
    // retry 큰 div 자체를 만들거야 
    const addDiv = document.createElement("DIV");
    addDiv.setAttribute('class', 'you lost');
    sectionselect.appendChild(addDiv);
    addDiv.style.width="475px";
    addDiv.style.height="150px";
    addDiv.style.borderRadius="35px";
    addDiv.style.backgroundColor= "rgba(0, 0, 0, 0.4)";
    addDiv.style.position = "absolute";
    addDiv.style.transform = "translate(750px,400px)";
    addDiv.style.display="flex";
    addDiv.style.flexDirection="column";
    addDiv.style.justifyContent="center";
    addDiv.style.alignItems="center";
    // retry 버튼추가 
    retrybutton.setAttribute('class', 'addRetryButton');
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
    replay.innerText="YOU LOST";
    replay.style.color= "white";
    replay.style.fontSize = "32px";

    addDiv.appendChild(replay);
    // question mark 추가 
    const question = document.createElement("I");
    question.setAttribute('class', 'fas fa-poo');
    question.style.color = "brown";
    question.style.transform="translateX(10px)";
    replay.appendChild(question);
    clearTimeout(test);
    checkplay=0;
            //you lost 


         })
    }
}

function deleteCarrotandBug(){
    

    for(i =0; i<10 ; i++)
    {
    if(carrotnum>0)
    {
        console.log("당근"+carrotnum);
        resetCarrot = document.querySelector(".carrot")
        sectionselect.removeChild(resetCarrot);
        carrotnum -= 1;
    }
        
    
    resetBug =  document.querySelector(".bug")
    sectionselect.removeChild(resetBug);    
    }
  
}

    //헤더 재생or 중지버튼 클릭시
    buttonselect.addEventListener("click", event=> {
        if (checkplay==0)
    {
         checkplay=1;
         bgm.play();
        btnImgReset(); // / 버튼아래있는 이미지 무조건 삭제 
         const icon = document.createElement("i"); // 이미지 만들거야
         icon.setAttribute('class' , 'fas fa-stop fa-2x');
         buttonselect.appendChild(icon);
         element = document.getElementById("time1");
         endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
         updateTimer();
         makeCarrotandBug();
     }
    
        else {
             // 버튼아래이미지 전체셀렉
             bgm.pause();
             stopalert.play();
            btnImgReset(); // / 버튼아래있는 이미지 무조건 삭제
            makeRetryfunc(); 
            clearTimeout(test);
            checkplay=0;
        }
    
    })

    
    //retry 버튼눌렀을때 아이콘은 다시 stop으로, + 시간초기화 
    retrybutton.addEventListener("click", event =>{
        bgm.play();
        buttonselect.style.visibility = "visible";
        console.log("당근개수" + carrotnum);
        btnImgReset();
        const icon = document.createElement("i"); // 이미지 만들거야
        icon.setAttribute('class' , 'fas fa-stop fa-2x');
        buttonselect.appendChild(icon);
        retryDivReset();
        deleteCarrotandBug();
        makeCarrotandBug();
      
         element = document.getElementById("time1");
         endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
         updateTimer();
         checkplay=1;
         
    })



}




