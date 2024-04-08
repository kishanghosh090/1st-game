let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-game");
let message = document.querySelector(".message");
let msg = document.querySelector(".msg");

let turnO = true;
const winnum = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnO){
            box.innerText = "X"
            turnO =false;
        }
        else{
            box.innerText = "O"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations, '${winner}' is Winner `;
    message.classList.remove("hide");
    disableBoxes();

}

const checkwinner = () => {
    for(let pattern of winnum){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val)
            }
            else{
                nowinner()
            }
        }
    }
}
const resetGame = () => {
    turnO = true;
    enableBoxes();
    message.classList.add("hide");
}
const nowinner = () => {
    if(pos1val === ""){
        alert("Nobody Won The Game")
    }
}
newGameBtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)