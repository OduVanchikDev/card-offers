import React, { useState } from "react";
import { Buttons } from './components/Buttons.js'
import vector from './mobile/Vector.svg';
import { Checkbox } from './components/Chekbox.js'



export function FormContacts (props) {
  
  const {email, phone, changeFilde, report, advertising, personalData, publicPersons, smsConfirmation} = props
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [emailValue, setEmailValue] = useState("");
  // const [chekboxValue, setChekboxValue] = useState({
  //   report: false,
  //   advertising: false,
  //   personalData: false,
  //   publicPersons: false,
  //   smsConfirmation: false,
  // })


  function handlePhoneChange(event) {
    changeFilde('phone', event.target.value)
  }

  // function handleSumbit() {
  //   console.log(phoneNumber, emailValue, chekboxValue)
  // }

  function handleEmailChange (event){
    changeFilde('email', event.target.value)
  }

  function handeInfoChekboxChange(event){
    const {name, checked} = event.target;
    changeFilde( name, checked)
  }
  

  return (
    <div className='content'>
      <div className='question2'>Проверьте контакты</div>
      <div className='question_title3'>Убедитесь, что контакты введены корректно, они будут использоваться банками для коммуникации с вами</div>
      <div className='question_sub_title4'>Ваш телефон</div>
      <div className='input'>
        <input className='inputPhone' type='tel' value={phone} onChange={handlePhoneChange} />
        {phone && <img className='img' src={vector} />}
    </div>
    <div className='question_sub_title4'>Ваша почта</div>
      <div className='input'>
        <input className='inputPhone' type='email' value={email} onChange={handleEmailChange} />
        {email && <img className='img' src={vector} />}
    </div>
    <div>
      <Checkbox
        checked={report}
        onChange={handeInfoChekboxChange}
        name="report"
        className='checkbox__contacts'
        label={() => (
          <div className='checkbox__text'>
            <div className='checkbox__title'>Согласие на кредитный отчет</div>
          </div>
        )}
      />
      <Checkbox
        checked={advertising}
        onChange={handeInfoChekboxChange}
        name="advertising"
        className='checkbox__contacts'
        label={() => (
          <div className='checkbox__text'>
            <div className='checkbox__title'>Согласие на рекламную коммуникацию</div>
          </div>
        )}
      />
      <Checkbox
        checked={personalData}
        onChange={handeInfoChekboxChange}
        name="personalData"
        className='checkbox__contacts'
        label={() => (
          <div className='checkbox__text'>
            <div className='checkbox__title'>Согласие на хранение данных</div>
          </div>
        )}
      />
      <Checkbox
        checked={publicPersons}
        onChange={handeInfoChekboxChange}
        name="publicPersons"
        className='checkbox__contacts'
        label={() => (
          <div className='checkbox__text'>
            <div className='checkbox__title'>Нет родственников публичных лиц</div>
          </div>
        )}
      />
      <Checkbox
        checked={smsConfirmation}
        onChange={handeInfoChekboxChange}
        name="smsConfirmation"
        className='checkbox__contacts'
        label={() => (
          <div className='checkbox__text'>
            <div className='checkbox__title'>Подтверждение по СМС</div>
          </div>
        )}
      />
    </div>

    <Buttons
    // disabled={!phoneNumber && !emailValue}
    // onClick={handleSumbit}
    prevLink="/salary"
     />
    </div>

  )

}
