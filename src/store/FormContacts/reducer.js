import { CONTACTS_CHANGE_PHONE_NUMBER } from './action'
import { CONTACTS_CHANGE_EMAIL_TEXT } from './action'

const defaultSate = {
  phone: '',
  email: '',
}

export const formContactsReducer = (state=defaultSate, action) => {
  console.log(state);
  switch (
    action.type
  ) {
      case CONTACTS_CHANGE_PHONE_NUMBER:
        return {
          ...state,
          phone: action.payload
        };
      case CONTACTS_CHANGE_EMAIL_TEXT:
        return {
          ...state,
          email: action.payload
        }
      default: 
        return state;
      }
}

