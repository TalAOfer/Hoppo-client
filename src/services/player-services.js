import { classes } from "../game/classes";
import { utils } from "../game/utils";

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
        x: utils.getRandomInt(100,450),
        y: 600},
        velocity: {
        x: 0,
        y: 0
        },
        width: 44,
        height: 55
    })
    players.push(player)
}

