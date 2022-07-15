console.log('welcome buddy')

let music=new Audio("tones/music.mp3");
let turn=new Audio("tones/ting.mp3");
let gameover=new Audio("tones/gameover.mp3");
// let reset=document.getElementsByClassName('reset');
let Turn='X';
let isgameover=false;

const change_turn = () =>{
   
    return Turn ==="X"?"O":"X";

}


const checkwin = ()=>{
  let boxtext= document.getElementsByClassName('boxtext');
  let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
  ]
  wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector('.Info').innerText= boxtext[e[0]].innerText +" won";
        
        isgameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px"
        let boxtexts=document.querySelectorAll('.boxtext');
        
        Array.from(boxtexts).forEach(element =>{
            element.innerText=" ";
    
        });
    }
  })

}

music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
       if(boxtext.innerText===''){
        boxtext.innerText= Turn;
       Turn= change_turn();
        turn.play();
        checkwin();

        if(!isgameover){

            document.getElementsByClassName('Info')[0].innerText="Turn for "+Turn;
        }
       }

    })
})


reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=" ";

    });
    Turn="X";
    isgameover=false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName('Info')[0].innerText="Turn for "+Turn;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})