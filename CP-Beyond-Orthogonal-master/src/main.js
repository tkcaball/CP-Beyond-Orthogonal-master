// Code Practice: Beyond Orthogonal
// Name: Tiffany Caballero
// Date: 01/23/26

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors = null
let { height, width } = game.config