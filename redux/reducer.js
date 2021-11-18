const initialState = {
  itemList:[],
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
       return{
         ...state,
         itemList:state.itemList.concat({
           id:Math.random(),
           name:action.payload
         })
       }
      break;
    default:
    return state;

  }
}

export default rootReducer;
