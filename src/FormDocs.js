import React, { useState } from "react";
import { Buttons } from './components/Buttons.js'
import { ReactComponent as IconBanksForm } from './mobile/icon1.svg';
import { ReactComponent as Icon2Ndfl } from './mobile/icon2.svg';
import { ReactComponent as IconNafing } from './mobile/icon3.svg';
import line from './mobile/line.svg';
import {changeFilde} from './store/FormContacts/action';
import { connect } from "react-redux";

const incomeTypes = [
  {
    id: '2ndfl',
    title: '2НДФЛ',
    description: () => (
    <div>
      <p>У вас полностью “белый” доход, что обычно обеспечивает самые выгодные предложения банков.</p>
      <p>Если, существенная часть ваших доходов  не отражена в 2НДФЛ -  вы можете рассмотреть справку по форме банка, как один из вариантов подвтерждения дохода.</p>
    </div>
    ),
    icon: Icon2Ndfl,
  },
  {
    id: 'bankForm',
    title: 'Форма банка',
    description: () => (
    <div>
      <p>Форма банка вполне подойдет</p>
    </div>
    ),
    icon: IconBanksForm,
  },
  {
    id: 'withoutConfirmation',
    title: 'Ничего',
    description: () => (
    <div>
      <p>Нет любых документов</p>
    </div>
    ),
    icon: IconNafing,
  },

]

export function FormDocs_ ({changeFilde, incomeType}) {

// const [incomeType, setIncomeType] = useState('2ndfl')
  
function handleChangeType(event){
  const {name, value} = event.currentTarget
  changeFilde(name, value);
}

const { description: Description } = incomeTypes.find(elem => elem.id === incomeType);

  return (
  <div className='container'>
    <div className='container_content'>
      <div className='content'>
          <div className='question'>Как вы сможете подтвердить свой ежемесячный доход?</div>
      </div>
      <div className='incomeTypeBox'>
        {incomeTypes.map(({ id, title, icon: Icon }) => {
          const className = incomeType === id ? 'incomeTypeIcon incomeTypeIcon_selected' : 'incomeTypeIcon';
          return (
            <label className={className}>
              <Icon className='incomeTypeIcon__img'/>
              <span className='incomeTypeIcon__title'>{title}</span>
              <input type='radio' name='incomeType' value={id} onChange={handleChangeType} />
            </label>
          )
        })}
        </div>
        <div className='lineLite'>
            <img src={line} />
        </div>
        <div className='box-info' >
          <Description />
        </div>
      
    </div>
    <Buttons 
        nextLink="/salary"
        prevLink="/maritalStatus"
    />
  </div>

  )
}


const MapDicpachToProps = {
  changeFilde,
}

const MapStateToPropa = (state) => ({
  incomeType: state.incomeType,

})

export const FormDocs = connect(MapStateToPropa, MapDicpachToProps)(FormDocs_)
