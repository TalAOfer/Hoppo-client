import { classes } from "./classes"


const level1 = new classes.Level({
    //Instance of background
    background : new classes.Sprite({
        position: {
            x: 0,
            y: -720
        },
        width: 480,
        height: 1440,
        imgSrc: '/bigBGforHoppo.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false })
    //Instances of platforms with colliders in mid
    ,platforms : [new classes.Sprite({
        position: {
            x: 300,
            y: 400
        },
        width: 100,
        height: 42,
        imgSrc: '/platform1.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 0,
            y: 280
        },
        width: 205,
        height: 53,
        imgSrc: '/sideplatform.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 200,
            y: 100
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 190,
            y: 600
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 0,
            y: 700
        },
        width: 480,
        height: 47,
        imgSrc: '/scene1ground.png',
        borderY: 1,
        borderWidth: 1
    }),new classes.Sprite({
        position: {
            x: 165,
            y: 530 - 720
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 185,
            y: 100 - 720
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 290,
            y: 330 - 720
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 0,
            y: 220 - 720
        },
        width: 100,
        height: 42,
        imgSrc: '/platform1.png',
        borderY: 1,
        borderWidth: 1
    }),new classes.Sprite({
        position: {
            x: 280,
            y: -30 - 720
        },
        width: 30,
        height: 171,
        imgSrc: '/highwallnormal.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true })]
})

const level2 = new classes.Level({
    background : new classes.Sprite({
        position: {
            x: 0,
            y: 0
        },
        width: 480,
        height: 720,
        imgSrc: '/bgreal-scene2new.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false
    }),
    platforms: [ new classes.Sprite({
        position: {
            x: 165,
            y: 530
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 185,
            y: 100
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 290,
            y: 330
        },
        width: 105,
        height: 53,
        imgSrc: '/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 0,
            y: 220
        },
        width: 100,
        height: 42,
        imgSrc: '/platform1.png',
        borderY: 1,
        borderWidth: 1
    }),new classes.Sprite({
        position: {
            x: 280,
            y: -30
        },
        width: 30,
        height: 171,
        imgSrc: '/highwallnormal.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    })]
})

const level3 = new classes.Level({
    background : new classes.Sprite({
        position: {
            x: 0,
            y: 0
        },
        width: 480,
        height: 720,
        imgSrc: '/bgreal-scene3.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false
    }),
     platforms : [new classes.Sprite({
        position: {
            x: 110,
            y: 400
        },
        width: 48,
        height: 55,
        imgSrc: '/platform2redt.png',
        borderY : 1,
        borderWidth : 1
    }),new classes.Sprite({
        position: {
            x: 385,
            y: 630
        },
        width: 48,
        height: 55,
        imgSrc: '/platform2redt.png',
        borderY: 1,
        borderWidth: 1
    }), new classes.Sprite({
        position: {
            x: 30,
            y: 90
        },
        width: 48,
        height: 55,
        imgSrc: '/platform2redt.png',
        borderY: 1,
        borderWidth: 1
    }),new classes.Sprite({
        position: {
            x: 250,
            y: 150
        },
        width: 74,
        height: 37,
        imgSrc: '/newcloud.png',
        borderY : 160,
        borderWidth: 1
    }),new classes.Sprite({
        position: {
            x: 305,
            y: 270
        },
        width: 30,
        height: 171,
        imgSrc: '/highwall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    }),new classes.Sprite({
        position: {
            x: 280,
            y: 638
        },
        width: 30,
        height: 171,
        imgSrc: '/highwall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    })]
})

export const levelData = {
    level1,
    level2,
    level3
}

/*
const backgroundScene4 = new classes.Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: '/bgreal-scene4.png'
})

const platformsScene4 = [new classes.Sprite({
    position: {
        x: 30,
        y: 610
    },
    width: 74,
    height: 37,
    imgSrc: '/newcloud.png',
    borderY : 625,
    borderWidth : 1
}), new classes.Sprite({
    position: {
        x: 220,
        y: 550
    },
    width: 45,
    height: 32,
    imgSrc: '/cloudsmall.png',
    borderY : 560,
    borderWidth: 1
}), new classes.Sprite({
    position: {
        x: 100,
        y: 300
    },
    width: 45,
    height: 32,
    imgSrc: '/cloudsmall.png',
    borderY : 310,
    borderWidth: 1
}), new classes.Sprite({
    position: {
        x: 230,
        y: 100
    },
    width: 74,
    height: 37,
    imgSrc: '/newcloud.png',
    borderY : 110,
    borderWidth: 1
}),new classes.Sprite({
    position: {
        x: 345,
        y: -10
    },
    width: 30,
    height: 294,
    imgSrc: '/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new classes.Sprite({
    position: {
        x: 345,
        y: 480
    },
    width: 30,
    height: 294,
    imgSrc: '/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
})]

const backgroundScene5 = new classes.Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: '/bgreal-scene5.png'
})

const platformsScene5 = [new classes.Sprite({
    position: {
        x: 250,
        y: 600
    },
    width: 48,
    height: 48,
    imgSrc: '/platformscene52.png',
    borderY : 1,
    borderWidth : 1
}), new classes.Sprite({
    position: {
        x: 350,
        y: 400
    },
    width: 38,
    height: 45,
    imgSrc: '/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new classes.Sprite({
    position: {
        x: 350,
        y: 300
    },
    width: 38,
    height: 45,
    imgSrc: '/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new classes.Sprite({
    position: {
        x: 80,
        y: 210
    },
    width: 38,
    height: 45,
    imgSrc: '/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new classes.Sprite({
    position: {
        x: 230,
        y: 80
    },
    width: 258,
    height: 55,
    imgSrc: '/platformscene5groundwall.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new classes.Sprite({
    position: {
        x: 230,
        y: 250
    },
    width: 30,
    height: 224,
    imgSrc: '/highwallscene5.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new classes.Sprite({
    position: {
        x: 345,
        y: 700
    },
    width: 30,
    height: 294,
    imgSrc: '/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
})]

const backgroundScene6 = new classes.Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: '/bgreal-scene6.png'
})

const platformsScene6 = [new classes.Sprite({
    position: {
        x: 60,
        y: 550
    },
    width: 48,
    height: 48,
    imgSrc: '/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new classes.Sprite({
    position: {
        x: 350,
        y: 400
    },
    width: 48,
    height: 48,
    imgSrc: '/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new classes.Sprite({
    position: {
        x: 100,
        y: 300
    },
    width: 48,
    height: 48,
    imgSrc: '/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new classes.Sprite({
    position: {
        x: 230,
        y: 100
    },
    width: 48,
    height: 48,
    imgSrc: '/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
})]
*/