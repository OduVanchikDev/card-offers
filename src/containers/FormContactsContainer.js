import React from 'react';
import { FormContacts } from '../../../card/src/FormContacts';
import { connect } from 'react-redux';
import { changeFilde } from '../../../card/src/store/FormContacts/action';

export function FormContactsContainer_ (props) {
  return(
      <FormContacts {...props}  />
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.email ?? "",
    phone: state.phone ?? "",
    report: state.report ?? false,
    advertising: state.advertising?? false,
    personalData: state.personalData?? false,
    publicPersons: state.publicPersons?? false,
    smsConfirmation: state.smsConfirmation?? false,
  }
}

const mapDispatchToProps = {
  changeFilde,
}

export const FormContactsContainer = connect(mapStateToProps, mapDispatchToProps)(FormContactsContainer_)

