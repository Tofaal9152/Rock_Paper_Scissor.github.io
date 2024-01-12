let choices = document.querySelectorAll(".imageTag")
let msh22 = document.querySelector("#msh2")
let you = document.querySelector("#youCount")
let pc = document.querySelector("#pcCount")
let countYou=0;
let countPc=0;
let cmputerChoice = () => {
    const choiceList = ["Rock", "Paper", "Scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return choiceList[ranIdx];
};

let playgame = (yourChoice) => {
    const cmpChoice = cmputerChoice();
    if (yourChoice === cmpChoice) {
        console.log("Draw");
        msh22.innerText="Draw";
    }
    else if (yourChoice === "Rock") {
        if (cmpChoice === "Paper") {
            console.log("Win_Paper");
            countPc++;
            msh22.innerText="Pc Winner - Paper";
            pc.innerText=`${countPc}`

        } 
        else {
            console.log("Win_Rock");
            countYou++;
            msh22.innerText="You Winner - Rock";
            you.innerText=`${countYou}`
            
        }


    }
    else if (yourChoice === "Paper") {
        if (cmpChoice === "Rock") {
            console.log("Win_Paper");
            countYou++;
            msh22.innerText="You Winner - Paper";
            you.innerText=`${countYou}`
        } 
        else {
            console.log("Win_Scissor");
            countPc++;
            msh22.innerText="Pc Winner - Scissor";
            pc.innerText=`${countPc}`
        }


    }
    else if (yourChoice === "Scissor") {
        if (cmpChoice === "Paper") {
            console.log("Win_Scissor");
            countYou++;
            msh22.innerText="You Winner - Scissor";
            you.innerText=`${countYou}`
        } 
        else {
            console.log("Win_Rock");
            countPc++;
            msh22.innerText="Pc Winner - Rock";
            pc.innerText=`${countPc}`
        }

    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourChoice = choice.getAttribute("id");
        playgame(yourChoice);
    })
})
