import { types }  from './types';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case types.CITY_INDEX:
    return Object.assign({}, state, {
      city:action.text
    });
    case types.INDEX_COMPANY_SAVE:
    return Object.assign({}, state, {
      indexCity:action.text.city,
      indexCompany:action.text.companies_list
    });
    default:
      return state
  }
};

export default reducer;