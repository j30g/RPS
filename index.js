let start=document.querySelector('#start');
let modal=document.querySelector('.modal');
let closeModal=document.querySelector('#closeModal');
let p1name=document.querySelector('#p1name');
let p2name=document.querySelector('#p2name');
let p1=document.querySelector('#p1');
let p2=document.querySelector('#p2');
let p1img=document.querySelector('#p1img')
let p2img=document.querySelector('#p2img')
let winner=document.querySelector('#winner')
let reroll=document.querySelector('#reroll')
let error=document.querySelectorAll('#error_noName')
let selectallerror=[...error]

let p1Score=document.querySelector('#p1Score')
let p2Score=document.querySelector('#p2Score')
var player1points=1
var player2points=1


start.addEventListener('click',()=>{
    if(p1name.value==='' && p2name.value===''){
        modal.style.display=''
        error[0].style.display='block'
        error[1].style.display='block'
      }else if(p1name.value===''){
        modal.style.display=''
        error[0].style.display='block'
        error[1].style.display='none'
      }else if(p2name.value===''){
        modal.style.display=''
        error[1].style.display='block'
        error[0].style.display='none'
      }else{
        modal.style.display='block'
        error[0].style.display=''
        error[1].style.display=''
        p1.innerHTML=p1name.value
        p2.innerHTML=p2name.value
      }
})

reroll.addEventListener('click',()=>{
    p1.innerHTML=p1name.value
    p2.innerHTML=p2name.value

    var p1RandomPicker=(Math.floor(Math.random() * 3));
    var p2RandomPicker=(Math.floor(Math.random() * 3));
    

    switch(p1RandomPicker){
        case 0:
            console.log('player 1 picked :','Rock')
            p1img.src='images/p1Rock.png'
        break;
        case 1:
            console.log('player 1s picked :','Paper')
            p1img.src='images/p1Paper.png'
        break;
        case 2:
            console.log('player 1 picked :','Scissor')
            p1img.src='images/p1Scissor.png'
        break;
    }

    switch(p2RandomPicker){
        case 0:
            console.log('player 2 picked :','Rock')
            p2img.src='images/p2Rock.png'
        break;
        case 1:
            console.log('player 2 picked :','Paper')
            p2img.src='images/p2Paper.png'
        break;
        case 2:
            console.log('player 2 picked :','Scissor')
            p2img.src='images/p2Scissor.png'
        break;
    }

    if(p1RandomPicker===p2RandomPicker){
        console.log('its a tie')
        winner.innerHTML='Its a tie'
    }else if(p1RandomPicker==0 && p2RandomPicker==1){
        console.log('P2 win')
        winner.innerHTML='Player 2 Win!'
        p2Score.innerHTML=player2points++
    }else if(p1RandomPicker==0 && p2RandomPicker==2){
        console.log('P1 win')
        winner.innerHTML='Player 1 Win!'
        p1Score.innerHTML=player1points++
    }else if(p1RandomPicker==1 && p2RandomPicker==0){
        console.log('P1 win')
        winner.innerHTML='Player 1 Win!'
        p1Score.innerHTML=player1points++
    }else if(p1RandomPicker==1 && p2RandomPicker==2){
        console.log('P2 win')
        winner.innerHTML='Player 2 Win!'
        p2Score.innerHTML=player2points++
    }else if(p1RandomPicker==2 && p2RandomPicker==1){
        console.log('P1 win')
        winner.innerHTML='Player 1 Win!'
        p1Score.innerHTML=player1points++
    }else if(p1RandomPicker==2 && p2RandomPicker==0){
        console.log('P2 win')
        winner.innerHTML='Player 2 Win!'
        p2Score.innerHTML=player2points++
    }
})

closeModal.addEventListener('click',()=>{
    modal.style.display=''
    modal.style.opacity=''
})