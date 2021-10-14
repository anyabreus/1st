const player1 = {
    name: 'Sonya',
    hp: 95,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

const player2 = {
    name: 'Kitana',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
};

function createPlayer(playerNumber, playerOject) {
    const player = document.createElement('div');
    const progressBar = document.createElement('div');
    const character = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const img = document.createElement('img');

    player.classList.add(playerNumber);
    progressBar.classList.add('progressbar');
    character.classList.add('character');
    life.classList.add('life');
    name.classList.add('name');

    document.querySelector('div.arenas').appendChild(player);

    player.appendChild(progressBar);
    player.appendChild(character);

    progressBar.appendChild(life);
    progressBar.appendChild(name);

    character.appendChild(img);

    life.style.width = playerOject.hp + '%';
    name.innerText = playerOject.name;
    img.src = playerOject.img;

    // для варианта с одним аргументом, но по поводу eval слышала, что применять не стоит.
    // life.style.width = eval(playerNumber).hp + '%';
    // name.innerText = eval(playerNumber).name;
    // img.src = eval(playerNumber).img;
};

createPlayer('player1', player1);
createPlayer('player2', player2);

