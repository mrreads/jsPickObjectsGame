class Game
{
    constructor(height, width, img) 
    {
        this.height = height;
        this.width = width;
        if (!document.querySelector(`#menu`)) { document.body.innerHTML = `<div id="menu"></div>`; }
        this.element = document.querySelector(`#menu`);
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
        this.element.style.position = "relative";
        this.element.style.backgroundImage = 'url("'+img+'")';

        this.logo = document.createElement("p");
        this.element.appendChild(this.logo);
        this.start = document.createElement("p");
        this.element.appendChild(this.start);
        this.logo.textContent = `МАНИСОВ the game`;
        this.start.textContent = `Начать игру`;
        this.start.addEventListener('click', function()
        {
            this.startGame();
        }.bind(this));
    }

    startGame()
    {
        let field = new GameArena('field', this.height, this.width, './img/background1.jpg');
        let player = new GamePlayer('player', 100, 100, field, './img/player1.jpg');
    }
}

let game = new Game(800, 800, './img/menu1.jpg');

