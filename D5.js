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


    //---------SELECTING TEAM----------//

let minusBtn = document.querySelector('.minus')
let plusBtn = document.querySelector('.plus')
let teamInput = document.querySelector('.amountTeams')

let count = 0;
teamInput.value = count;
teamInput.innerText = teamInput.value;

//------------INCREASE TEAM------------//

const plusingTeam = function() {
    count++;
    teamInput.value = count;
    teamInput.innerText = teamInput.value;
    addingTeam ();
    return;
}

plusBtn.addEventListener("click", plusingTeam);

//------------DECREASE TEAM------------//

const restingTeam = function(){
    count--;
    teamInput.value = count;
    teamInput.innerText = teamInput.value;
    removingTeam ();
    return;
}

minusBtn.addEventListener('click',restingTeam);

//--------------ADDING TEAM------------//

let teams = document.querySelector('.teams');

const addingTeam = function () {
  const teamCard = document.createElement("div");
  const h2 = document.createElement("h2");
  const bodyCard = document.createElement("div");

  teamCard.classList.add("teamCard");
  h2.innerText = `Team ${count}`;
  bodyCard.classList.add("bodyCard");
  
  teams.appendChild(teamCard);
  teamCard.appendChild(h2);
  teamCard.appendChild(bodyCard);
};

//------------REMOVING TEAM-----------//

const removingTeam = function (){
  teams.removeChild(teams.lastElementChild);
};