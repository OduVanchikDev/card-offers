
import { CHENGE_FILD, INCRIMENT_CHILDREN, DICREMENT_CHILDREN } from './FormContacts/action';



const initialState = {
  'children': 0,
  'maritalStatus':'',
  'incomeType':'2ndfl',
  after2018: false,
  disabled: false,
}

export const  appReducer  = (state=initialState, action) => {
  console.log(state)
  switch (action.type) {
    case CHENGE_FILD:
      return {...state, [action.payload.key]: action.payload.value};
    case INCRIMENT_CHILDREN:
      return {...state, children: state.children + 1};
    case DICREMENT_CHILDREN:
      return {...state, children: state.children - 1};
    default:
      return state;
  }
}

