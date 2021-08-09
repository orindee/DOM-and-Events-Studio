function init(){

const takeoff=document.getElementById('takeoff');
let paragraph=document.getElementById('flightStatus');
let shuttleBackground=document.getElementById('shuttleBackground');
let shuttleHeight=document.getElementById("spaceShuttleHeight");
const landing=document.getElementById("landing");
let status=document.getElementById("flightStatus");
const abortMission=document.getElementById("missionAbort");
const up=document.getElementById("up");
const down=document.getElementById("down");
const left=document.getElementById("left");
const right=document.getElementById("right");
const rocket=document.getElementById("rocket");
rocket.style.position='absolute';
rocket.style.bottom="0px";
rocket.style.left="0px";

takeoff.addEventListener('click', function(){
let confirmation=window.confirm('Are you ready for takeoff?');
   if (confirmation===true){
       paragraph.innerText="Let's go!";
       shuttleBackground.style.background="blue";
       shuttleHeight.innerText="10,000";

       return true;
   } else {
           document.write('User does not want to continue!');
       }
   })

landing.addEventListener('click',function(){
    alert('The shuttle is landing. Landing gear engaged.');
status.innerText="Mission aborted.";
shuttleBackground.style.background="green";
shuttleHeight.innerText="0";
})

abortMission.addEventListener('click',function(){
    let confirmation=window.confirm('Are you sure you want to abortion the mission?');
    if (confirmation===true){
        status.innerText="Mission aborted.";
        shuttleBackground.style.background="green";
        shuttleHeight.innerText="0";
        rocket.style.bottom=parseInt(rocket.style.bottom);
        return true;
    } else {
            status.innerText='User does not want to continue!';
        }
    })
 
up.addEventListener('click',function(){
    let x=10;
    shuttleHeight.innerHTML=(parseInt(shuttleHeight.innerHTML))+10000;
    let newPosition=(parseInt(rocket.style.bottom)+x)+'px';
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
})

down.addEventListener('click',function(){
    let x=10;
   shuttleHeight.innerHTML=(parseInt(shuttleHeight.innerHTML))-10000;
    let newPosition=(parseInt(rocket.style.bottom)+x)+'px';
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
})


left.addEventListener('click',function(){
    let x=10;
    let newPosition=parseInt(rocket.style.left)+x+'px';
    rocket.style.left=parseInt(rocket.style.left) - 10 + 'px'; 
})


right.addEventListener('click',function(){
    let x=10;
    let newPosition=parseInt(rocket.style.left)+x+'px';
    rocket.style.left=parseInt(rocket.style.left) + 10 + 'px'; 
})


}
window.onload =init;
