var dataBase;

var gameState = 0;
var playerCount = 0;

var form, game, player;

function setup(){
    dataBase = firebase.database();
    
    createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    
}

