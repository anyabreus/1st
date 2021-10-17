const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const sonya = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

const kitana = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

function createElement(tagName, className) {
    const tag = document.createElement(tagName);
    if(className) {
        tag.classList.add(className);
    }
    return tag;
};

function createPlayer(playerOject) {
    const player = createElement('div', 'player'+playerOject.player);
    const progressBar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img = createElement('img');

    player.appendChild(progressBar);
    player.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img);

    life.style.width = playerOject.hp + '%';
    name.innerText = playerOject.name;
    img.src = playerOject.img;

    return player;
};

randomButton.addEventListener('click', function() {
    changeHp(sonya);
    changeHp(kitana);
    
    checkWin(sonya);
    checkWin(kitana);
});

// function playerLose(name) {
//     const loseTitle = createElement('div', 'loseTitle');
//     loseTitle.innerText = name + ' lose...';
//     return loseTitle;
// };

function playerWins(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' wins!';
    return loseTitle;
};

function draw() {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = 'Draw!';
    return loseTitle;
};

function changeHp(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.floor(Math.random() * 20) + 1;
    
    if(player.hp <= 0) {
        player.hp = 0;
        randomButton.disabled = true;
    };

    playerLife.style.width = player.hp + '%';
    
    console.log(player.hp);
};

function checkWin(player) {
    if(player.hp <= 0) {
        if(sonya.hp > kitana.hp) {
            arenas.appendChild(playerWins(sonya.name));
        } else if(sonya.hp < kitana.hp) {
            arenas.appendChild(playerWins(kitana.name));
        } else {
            arenas.appendChild(draw());
        };
    };
};

arenas.appendChild(createPlayer(sonya));
arenas.appendChild(createPlayer(kitana));

