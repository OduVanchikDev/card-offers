export const CONTACTS_CHANGE_PHONE_NUMBER = 'CONTACTS_CHANGE_PHONE_NUMBER';
export const CONTACTS_CHANGE_EMAIL_TEXT = 'CONTACTS_CHANGE_EMAIL_TEXT';
export const CHENGE_FILD = 'CHENGE_FILD';

export const DICREMENT_CHILDREN = 'DICREMENT_CHILDREN';
export const INCRIMENT_CHILDREN = 'INCRIMENT_CHILDREN';

export const incrimentChildren = () => ({
  type: INCRIMENT_CHILDREN,
 })


export const decrimentChildren = () => ({
  type: DICREMENT_CHILDREN,
 })

export const setPhoneNumber = phone => ({
  type: CONTACTS_CHANGE_PHONE_NUMBER,
  payload: phone
})

export const setEmailValue = email => ({
  type: CONTACTS_CHANGE_EMAIL_TEXT,
  payload: email
})

export const changeFilde = (key, value) => ({
  type: CHENGE_FILD,
  payload: {
    key,
    value,
  }
})
