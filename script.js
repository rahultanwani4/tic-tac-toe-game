let boxes= document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newgame= document.querySelector("#newgame");
let win=document.querySelector(".win");
let msg=document.querySelector("#msg");
let turnx = true;
let count=0;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,3,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnx)
        {
            box.innerText = "x";
            turnx=false;
        }
        else{
            box.innerText = "o";
            turnx=true;
        }
        box.disabled = true;
        count++;
        let cheched=check();
        if(count === 9 && !checked)
        {
            gamedraw();
        }
    });
});
const gamedraw = () => {
    msg.innerHTML="Game was a draw";
    win.classList.remove("hide");
    disabledbox();
}
const check = ()=>{
    for(pattern of winPatterns){
        let posi1= boxes[pattern[0]].innerText;
        let posi2= boxes[pattern[1]].innerText;
        let posi3= boxes[pattern[2]].innerText;
        if(posi1 != "" && posi2 != "" && posi3 != "")
            if(posi1 === posi2 && posi2=== posi3)
                {
                    showWinner(posi1);
                    disabledbox();
                } 
        }
};

const showWinner =(winner) =>{
    msg.innerHTML ="Congratulations, Winner is ${winner}";
    win.classList.remove("hide");
}
const disabledbox = () =>{
    for(let box of boxes)
    {
        box.disabled = true;

    }
}
const enablebox = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText = "";
    }
}
const resetgame = () =>{
    turnx=true;
    count=0;
    enablebox();
    win.classList.add("hide");

}
newgame.addEventListener("click",resetgame());
reset.addEventListener("click",resetgame());

