import { ADDTODODATA, GETTODODATA } from './ActionType';

const initialState = {
  todo: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODODATA:
      return {
        ...state,
        todo: ("http://localhost:8000/tasks",{
          method: "POST",
          body: JSON.stringify({
            todo:action.payload
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }),
      };
    
    case GETTODODATA:
      return {
        ...state,
        todo: action.payload,
      };
    
    default:
      return state;
  }
}
