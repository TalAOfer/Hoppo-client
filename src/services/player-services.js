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
    socketService.emit('newPlayer', {x : player.position.x, y : player.position.y})

    players.push(player)
}

