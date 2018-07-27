import { types }  from './types';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case types.Index_Baojia:
      return state ;
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};

export default reducer;