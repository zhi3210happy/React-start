//此处为新写法
import { handleActions } from 'easy-action'
const initialState={
  count:0
}
export default handleActions({
  INCREMENT(state,action){
    return Object.assign({}, state, {count: state.count + 1})
   },
  INCREMENT_IF_ODD(state,action){
    return Object.assign({},state,{count:(state.count % 2 !== 0) ? state.count + 1 : state.count})
  },
  DECREMENT(state,action) {
    return Object.assign({}, state, {count: state.count - 1})
  }
},initialState)
