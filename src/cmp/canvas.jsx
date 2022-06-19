
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
    const playerRef = useRef(null)

    const keys = {
        keyPressed: {},
        keyReleased: {},
        lastKey: null,
        keyUp: null
    }

    let currentPlayers = {}

    const animate = () => {
        //calls animate function every window frame
        setTimeout(() => {
            window.requestAnimationFrame(animate)

            const currentPlayers = sceneRef.current.players
            playerRef.current.position.x = sceneRef.current.players[playerIdRef.current].position.x
            playerRef.current.position.y = sceneRef.current.players[playerIdRef.current].position.y
            

   

            renderServices.renderGame(sceneRef.current, cRef.current, keys, playerIdRef.current)
            playerController.keyHandlerFunc(playerRef.current, keys)
            playerRef.current.update(keys, sceneRef.current);
            renderServices.handleCamera(playerRef.current, cRef.current)
            socketService.emit('updateToServer', playerRef.current)
     
        }, 1000 / FPS)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const c = canvas.getContext('2d')
        playerRef.current = playerServices.createPlayer()
        // console.log(playerRef.current.position.x + ',' + playerRef.current.position.y);
        console.log(playerRef.current);

        cRef.current = c
        canvas.width = 480;
        canvas.height = 720;
        c.fillRect(0, 0, canvas.width, canvas.height);
        const currentScene = levelServices.getScene()
        addEventListeners()

        sceneRef.current = currentScene
        // playerServices.createPlayer()
        socketService.on('playerId' ,(id) => {
            playerIdRef.current = id
            console.log('my id is', playerIdRef.current)
            socketService.on('serverToClient', players => {
                console.log('happend 1 ');
                for(let id in players){
                    if(sceneRef.current.players[id] === undefined && id !== playerIdRef.current){
                        sceneRef.current.players[id] = playerServices.createPlayer()
                        // sceneRef.current.players[id].position = players[id].position

                    }
                }
                sceneRef.current.players = players  
            })
        })
        // socketService.on('serverToClient', players => { 
        //     console.log('happend 2 ');
        //     sceneRef.current.players = players  
        // })
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

    return <canvas className='canvas' ref={canvasRef} {...props} />
}

