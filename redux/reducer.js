import { types } from './types';
let initState = {
  defaultCity: 'zhengzhou',
  ImgList:[],
  Com_ImgList:[],
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case types.DEFAUTL_CITY:

      return Object.assign({}, state, {
        defaultCity: action.text
      });
      case types.Chinese_City:
      return Object.assign({}, state, {
        Chinese: action.text
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
      case types.Com_Save_Img:
      console.log(state)
      return Object.assign({}, state, {
        Com_ImgName:action.text.company_name.data.title,
        Com_NextImg:action.text.company_name.next,
        Com_PrevImg:action.text.company_name.prev,
        Com_ImgList:state.Com_ImgList.concat(action.text.company_name.data.img_path),
        Com_ImgLength:action.text.company_name.data.img_path.length+state.Com_ImgList.length,
      });
      case types.Com_Set_Img_Length:
      return Object.assign({}, state, {
        Com_ImgIndex: action.text
      });
    default:

      return state
  }
};

export default reducer;