import {ADD_ITEM} from './actions';
import {REMOVE_ITEM} from './actions';



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

      case REMOVE_ITEM:
         return{
           ...state,
           itemList:state.itemList.filter(item => item.id !== action.payload)
         }
        
    default:
    return state;

  }
}

export default rootReducer;
