import { types }  from './types';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case types.CITY_INDEX:
    return Object.assign({}, state, {
      city:action.text
    });
    default:
      return state
  }
};

export default reducer;