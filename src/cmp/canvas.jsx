
import React, { useRef, useEffect } from 'react'
import { FPS } from '../game/constants'
import { playerController } from '../game/player-controller'
import { renderServices } from '../game/render'
import { levelServices } from '../services/level-services'
import { playerServices } from '../services/player-services'
import { socketService } from '../services/socket-services'


export function Canvas({ props }) {

    const canvasRef = useRef(null)
    const cRef = useRef(null)
    const sceneRef = useRef(null)
    const playerIdRef = useRef(null)

    const keys = {
        keyPressed: {},
        keyReleased: {},
        lastKey: null,
        keyUp: null
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        cRef.current = c
        canvas.width = 480;
        canvas.height = 720;
        c.fillRect(0, 0, canvas.width, canvas.height);
        const currentScene = levelServices.getScene()
        addEventListeners()

        sceneRef.current = currentScene
        playerServices.createPlayer()
        socketService.on('playerId', (id) => {
            playerIdRef.current = id
            console.log('my id is', id)
        })
        animate()
    }, [])


    const addEventListeners = () => {
        //Handle the players input when pressing down a key
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) {
                keys.keyPressed[event.keyCode || event.which] = true;
                keys.keyReleased[event.keyCode || event.which] = false;
            }
            keys.keyPressed[event.keyCode || event.which] = true;
        })

        window.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 87:
                    keys.keyPressed[event.keyCode || event.which] = false;
                    keys.keyReleased[event.keyCode || event.which] = true;
                    break
                case 68:
                    setTimeout(() => {
                        keys.keyPressed[event.keyCode || event.which] = false;
                        keys.keyReleased[event.keyCode || event.which] = true;
                    }, 100)
                    break
                case 65:
                    setTimeout(() => {
                        keys.keyPressed[event.keyCode || event.which] = false;
                        keys.keyReleased[event.keyCode || event.which] = true;
                    }, 100)
                case 32:
                    setTimeout(() => {
                        keys.keyPressed[event.keyCode || event.which] = false;
                        keys.keyReleased[event.keyCode || event.which] = true;
                    }, 100)


            }
            //keys.keyPressed[event.keyCode || event.which] = false;
            //keys.keyReleased[event.keyCode || event.which] = true;
        })
    }

    const animate = () => {
        //calls animate function every window frame
        setTimeout(() => {
            window.requestAnimationFrame(animate)

            const currentPlayers = playerServices.getPlayers()
            const player = currentPlayers[0]

            renderServices.renderGame(sceneRef.current, cRef.current, keys)
            playerController.keyHandlerFunc(player, keys)
            player.update(keys);
            socketService.emit('update', currentPlayers)
            renderServices.handleCamera(player, cRef.current)
        }, 1000 / FPS)
    }


    return <canvas className='canvas' ref={canvasRef} {...props} />
}

