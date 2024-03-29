class Memo {
    constructor() {
        this.field = []
        this.w = 5
        this.h = 4
    }


    startGame(width, height) {
        if (width > 0) {
            this.w = width
        }

        if (height > 0) {
            this.h = height
        }

        this.field = Array(this.w * this.h)

    }
}

Vue.component('card', {
    template: '<div class="card" @click="select">{{x}},{{y}}</div>',
    props: ['x', 'y'],
    methods: {
        select() {
            console.log(this.x, this.y)
        }
    }

})

const app = new Vue({
    el: '#app',
    data: {
        time: 0,
        boardWidth: 5,
        boardHeight: 4,
        memo: new Memo(),
        i: null
    },
    methods: {
        startGame() {
            console.log("GameStarted")
            this.memo.startGame(Number(this.boardWidth), Number(this.boardHeight))
            clearInterval(this.i)
            this.time = 0

            this.i = setInterval(() => {
               this.time += 1
            }, 1000);
        }
    }
})
