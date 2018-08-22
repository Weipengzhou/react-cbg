import { types } from './types';
let initState = {
  defaultCity: 'beijing'
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.Default_City:
      return Object.assign({}, state, {
        defaultCity: action.text
      });
    case types.Cun_Code:
      return Object.assign({}, state, {
        token: action.text
      });
    default:
      return state
  }
};

export default reducer;