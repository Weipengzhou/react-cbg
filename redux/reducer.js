import { types }  from './types';
let initState={
  defaultCity:'beijing'
}
const reducer = (state=initState, action) => {
  switch (action.type) {
    case types.Default_City:
    return Object.assign({}, state, {
      defaultCity:action.text
    });

    default:
      return state
  }
};

export default reducer;