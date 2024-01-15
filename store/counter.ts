import {defineStore} from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0
    }),

    actions: {
        increment() {
            this.count++
            // console.log(this.count)
        },
        decrement() {
            this.count--
            // console.log(this.count)
        }
    },
    getters: {
        oddOrEven: (state) => {
            // console.log(state)
            return state.count % 2 === 0 ? 'even' : 'odd'
        }
    }
})
