//----------ADDING NAMES TO WAITING LIST------------ //

const input = document.getElementById('newName');
const waitingList  = document.getElementById('waitingList')
const addbtn = document.getElementById('addbtn');

const addingName = function(){
    const list = document.createElement('p');
    list.innerText = input.value;
    waitingList.appendChild(list);
    clear();
}

const clear = function(){
    input.value = "";
}

addbtn.addEventListener('click', addingName, clear)


    //---------SELECTING TEAMS----------//

let minusBtn = document.querySelector('.minus')
let plusBtn = document.querySelector('.plus')
let teamInput = document.querySelector('.amountTeams')

let count = 0;
teamInput.value = count;
teamInput.innerText = teamInput.value;

//------------INCREASE TEAMS------------//

const plusingTeams = function() {
    count++;
    teamInput.value = count;
    teamInput.innerText = teamInput.value;
    return;
}

plusBtn.addEventListener("click", plusingTeams);

//------------DECREASE TEAMS------------//

const restingTeams = function(){
    count--;
    teamInput.value = count;
    teamInput.innerText = teamInput.value;
    return;
}

minusBtn.addEventListener('click',restingTeams);
