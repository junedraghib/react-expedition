import { createStore } from 'redux';

const store = createStore((state ={ count:0 }, action) => {
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            }
            break;

        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            }
            break;

        case 'RESET':
            return {
                count: 0
            }
            break;

        case 'SET':
            return {
                count: action.count
            }
            break;
        default:
            return state;
            break;
    }
})

//watch for changes and run every times it detect a change in store
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

// unsubscribe(); 

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})



