import { Canvas } from "../cmp/canvas"
import { physics } from "./physics"

export const renderServices = {
    renderGame,
    handleCamera
}

function handleCamera(player, c) {
    let scroll = 0
    if (player.position.y < 360 && player.position.y > -461) {
        scroll = Math.floor(player.velocity.y / 1.2)
        c.translate(0, (-scroll))
    } else if (player.position.y > 360) {
        c.setTransform(1, 0, 0, 1, 0, 0);
    } else if (player.position.y < -461) {
        c.save();
        c.restore()
    }
    c.save();
}

function renderGame(scene, c, keys, clientId) {
    //console.log(scene)
    const background = scene.background
    const platforms = scene.platforms
    const players = scene.players

    //draw background
    c.drawImage(
        background.img,
        background.currentFrame * (background.img.width / background.frameMax),
        0,
        background.img.width / background.frameMax,
        background.img.height,
        background.position.x,
        background.position.y,
        (background.img.width / background.frameMax) * background.scale,
        background.img.height * background.scale)

    //draw background collider
    c.fillRect(background.collider.position.x,
        background.collider.position.y,
        background.collider.width,
        background.collider.height)


    //draw each platform
    platforms.forEach(platform => {
        c.drawImage(
            platform.img,
            platform.currentFrame * (platform.img.width / platform.frameMax),
            0,
            platform.img.width / platform.frameMax,
            platform.img.height,
            platform.position.x,
            platform.position.y,
            (platform.img.width / platform.frameMax) * platform.scale,
            platform.img.height * platform.scale)

        //draw each platform collider
        /*
        c.fillRect(platform.collider.position.x,
            platform.collider.position.y, 
            platform.collider.width, 
            platform.collider.height)*/
    })
    //draw players
    // players.forEach(player => {
    //     c.drawImage(
    //         player.currentSprite,
    //         player.currentFrame * (player.img.width / player.frameMax),
    //         0,
    //         player.img.width / player.frameMax,
    //         player.img.height,
    //         player.position.x,
    //         player.position.y,
    //         (player.img.width / player.frameMax) * player.scale,
    //         player.img.height)
    for (let id in players) {
        const currentPlayer = players[id]
        // console.log(currentPlayer);
        switch(currentPlayer.animal){
            case 'gorilla':
                currentPlayer.sprites.idle.right.src = '/gorilla-right.png'
                currentPlayer.sprites.idle.left.src = '/gorilla-left.png'
                // console.log(currentPlayer.currentSprite);
                break
        }
        c.fillStyle = 'red'
        c.fillRect(currentPlayer.position.x , currentPlayer.position.y , currentPlayer.width ,currentPlayer.height )

        // c.drawImage(
        //     currentPlayer.currentSprite,
        //     currentPlayer.currentFrame * (currentPlayer.img.width / currentPlayer.frameMax),
        //     0,
        //     currentPlayer.img.width / currentPlayer.frameMax,
        //     currentPlayer.img.height,
        //     currentPlayer.position.x,
        //     currentPlayer.position.y,
        //     (currentPlayer.img.width / currentPlayer.frameMax) * currentPlayer.scale,
        //     currentPlayer.img.height)
        // c.drawImage(currentPlayer.currentSprite, currentPlayer.position.x, currentPlayer.position.y, currentPlayer.width, currentPlayer.height)


        c.fillStyle = 'black'
        c.fillRect(physics.getColliderDirection(currentPlayer) , currentPlayer.colliderBox.position.y , currentPlayer.colliderBox.width ,currentPlayer.colliderBox.height )


        if (keys.keyPressed[87] && !currentPlayer.isJumping && id === clientId) {

            c.fillStyle = '#433732'
            c.fillRect(currentPlayer.currentSprite === currentPlayer.sprites.idle.right ? currentPlayer.position.x : currentPlayer.position.x - 10,
                currentPlayer.chargeBar.position.y - 20,
                currentPlayer.chargeBar.width,
                currentPlayer.chargeBar.height)

            c.fillStyle = '#EAA141'
            c.fillRect((currentPlayer.currentSprite === currentPlayer.sprites.idle.right ? currentPlayer.position.x : currentPlayer.position.x - 10) + 1,
                currentPlayer.chargeBar.position.y - 19,
                currentPlayer.chargeBar.tick.width,
                currentPlayer.chargeBar.tick.height)

            currentPlayer.chargeBar.tick.width += 0.9
        }
    }
}

