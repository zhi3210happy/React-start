import { createAction } from 'easy-action'

const CtShow = createAction('CT_SHOW')
const CtShowRequest = createAction('CT_SHOW_REQUEST')

const CtHide = createAction('CT_HIDE')
const CtHideRequest = createAction('CT_HIDE_REQUEST')


export default{
  CtShow,
  CtHideRequest,
  CtHide,
  CtShowRequest
}
