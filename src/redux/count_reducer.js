//reducer will receive two params, preState,action

const initial = 0
export default function countReducer(preState=initial, action) {
    // if(preState === undefined) preState=0
    const { type, data } = action
    switch (type) {
        case 'increment':
            console.log(preState)
            return preState + data*1
        case 'decrement':
            return preState - data*1
        default:
            return preState
    }
}