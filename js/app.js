document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);



});

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const playerListitem = createplayerListitem(event.target);
    const playerList = document.querySelector('#player-list');
    playerList.appendChild(playerListitem);

    event.target.reset();
}

const createplayerListitem = function (form) {
    const playerListitem = document.createElement('li');
    playerListitem.classList.add('player-list-item')

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    playerListitem.appendChild(name);
    
    const team = document.createElement('h3');
    team.textContent = form.team.value;
    playerListitem.appendChild(team);
    
    const position = document.createElement('p');
    position.textContent = form.position.value;
    playerListitem.appendChild(position);

    return playerListitem;



};

const handleDeleteAllClick = function (event) {
    const playerList = document.querySelector('#player-list');
    playerList.innerHTML = '';
  };