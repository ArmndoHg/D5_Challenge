//----------ADDING NAMES TO WAITING LIST------------ //
const input = document.getElementById('newName');
const waitingList  = document.getElementById('waitingList')
const addbtn = document.getElementById('addbtn');

const addingName = function(){
    const list = document.createElement('p');
    list.innerText = input.value;
    waitingList.appendChild(list);
    }

    addbtn.addEventListener('click',addingName)