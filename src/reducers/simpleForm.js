const STATE = {
  firstName: 'Cham',
  lastName: 'Bruce',
  email: '12313123@qq.com'
}
export default function simpleForm (state = STATE, action) {
  switch (action.type) {
    case 'SUBMIT':
      return Object.assign({}, state, action.payload)
    case 'RESET':
      return Object.assign({}, {}, state)
    default:
      return state
  }
}
