import { classes } from "../game/classes";
import { utils } from "../game/utils";
import { socketService } from "./socket-services";


export const playerServices = {
    createPlayer,
    getPlayers
}

const players = []

function getPlayers() {
    return players
}

function createPlayer(){
    const player = new classes.Character({
        position: {
        x: Math.floor(utils.getRandomInt(100,450)),
        y: 600},
        velocity: {
        x: 0,
        y: 0
        },
        width: 44,
        height: 55
    })
    
    player.sprites = {
        idle: {
            right: new Image(44, 55),
            left: new Image(44, 55)
        }
    }
    player.animal = 'gorilla'
    
    player.sprites.idle.right.src = `/${player.animal}-right.png`
    player.sprites.idle.left.src = `/${player.animal}-left.png`

    socketService.emit('newPlayer', player)
    players.push(player)
    return player
}

