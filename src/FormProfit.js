import React, { useState } from "react";
import { Buttons } from './components/Buttons.js'
import vector from './mobile/Vector.svg';
import {changeFilde} from './store/FormContacts/action';
import { connect } from "react-redux";


const banksTitleOptions = [
  { key: 'sber', title: 'Сбербанк'},
  { key: 'alfa', title: 'Альфа банк'},
  { key: 'vtb', title: 'ВТБ'},
  { key: 'mkb', title: 'Московский Кредитный Банк'},
]

function isValidSalary(str) {
  const num  = Number(str);
  return num >= 10000;
}


export function FormProfit_({changeFilde, bankName, salary}) {

  // const [youBanksTitle, setToBanksTitle] = useState("");
  // const [salary, setSalary] = useState("");


  // function handleBanksTitleChange (event) {
  //   setToBanksTitle(event.currentTarget.value);
  // }

  // function handleSalaryInsert (event) {
  //   setSalary(event.target.value)
  // }

  // function handleSumbit (){
  //   console.log(youBanksTitle, salary)
  // }
  function handleBanksTitleChange (e){
    changeFilde('bankName', e.currentTarget.value)
  }
  function handleSalaryInsert (e){
    changeFilde('salary', e.target.value)
  }

  return (
    <div className='container'>
      
      <div className='content'>
        <div className='question'>Ваш ежемесячный доход</div>
        <div className='question_title'>Средняя сумма, которую вы  получаете “на руки” в месяц</div>
        <div className='question_sub_title'>Средний ежемесячный доход</div>
        <div className='input'>
          <input className='inputNumber' type='number' value={salary} onChange={handleSalaryInsert}/>₽/мес
          {isValidSalary(salary) && <img className='img' src={vector} />}
        </div>
        
        <div>
          <div className='question_sub_title'>Банк на карту которого получете зарплату</div>
          <select className='select' value={bankName} onChange={handleBanksTitleChange}>
            <option  value={""} disabled>Выбрать банк</option>
            {banksTitleOptions.map(({ key, title }) => (
              <option key={key} value={key}>{title}</option>
            ))}
          </select>
          {bankName && <img className='img' src={vector} />}
        </div>
       <Buttons
        nextLink="/contacts"
        prevLink="/incomeType"
        />
      </div>
    </div>
  )
}

const MapStateToProps = (state)=> ({
  bankName: state.bankName,
  salary: state.salary,

})

const MapDicpachToProps = ({
  changeFilde,
})

export const FormProfit = connect(MapStateToProps, MapDicpachToProps)(FormProfit_)
