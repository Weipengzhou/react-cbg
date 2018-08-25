import { types } from './types';
let initState = {
  defaultCity: 'beijing',
  ImgList:[],
  
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case types.DEFAUTL_CITY:

      return Object.assign({}, state, {
        defaultCity: action.text
      });
    case types.Cun_Code:

      return Object.assign({}, state, {
        token: action.text
      });
    case types.Save_Img:
      return Object.assign({}, state, {
        ImgName:action.text.renderingsCenter.data.title,
        NextImg:action.text.renderingsCenter.next,
        PrevImg:action.text.renderingsCenter.prev,
        ImgList:state.ImgList.concat(action.text.renderingsCenter.data.img_path),
        ImgLength:action.text.renderingsCenter.data.img_path.length+state.ImgList.length,
      });
      case types.Set_Img_Length:
      return Object.assign({}, state, {
        ImgIndex: action.text
      });
    default:

      return state
  }
};

export default reducer;