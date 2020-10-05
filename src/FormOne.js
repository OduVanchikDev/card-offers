import React, { useState } from "react";
import { Checkbox } from './components/Chekbox.js'
import { Buttons } from './components/Buttons.js'
import { connect } from "react-redux";
import {incrimentChildren, decrimentChildren, changeFilde} from './store/FormContacts/action';


const maritalStatusOptions = [
  { key: "married", title: 'Женат'},
  { key: "single", title: 'Не женат'},
  { key: "divorced", title: 'Разведен'},
]

export function FormOne_({maritalStatus, children, decrimentChildren, incrimentChildren, changeFilde, disabled, after2018}) {
  // const [children, setChildren] = useState(0);
  //const [maritalStatus, setMaritalStatus] = useState("");
  // const [childrenInfo, setChildrenInfo] = useState({
  //   disabled: false,
  //   after2018: false,
  // });

  // function handleSumbit() {
  //   console.log({
  //     children,
  //     maritalStatus,
  //     childrenInfo,
  //   });
  // }

  function handleMaritalStatusChange(event) {

    changeFilde('maritalStatus', event.currentTarget.value);
  }

  // function clearForm() {
  //   setMaritalStatus("");
  
  //   setChildrenInfo({
  //     disabled: false,
  //     after2018: false,  
  //   });
  // }

 

  function handeInfoChildrenChange(event) {
    const { name, checked } = event.target;
    changeFilde(name, checked)
  }
  
  return (
  <div>
    <div className='question1'>Расскажите немного о себе</div>
    {/* <div className='question_title1'>Данные паспорта</div> */}
    <div>
      <div className='question_sub_title1'>Семейное положение</div>
      <select className='select' value={maritalStatus} onChange={handleMaritalStatusChange}>
        <option value={""} disabled>Cемейное положение</option>
        {maritalStatusOptions.map(({ key, title }) => (
          <option key={key} value={key}>{title}</option>
        ))}
      </select>
      <div className='line2'></div>
      {/* <button className='clear' onClick={clearForm}>Очистить</button> */}
    </div>
    <div>
      <div className='question_sub_title2'>Дети младше 18 лет</div>
      <div className='buttonInc' >
        <button
          disabled={children === 0}
          className='button'
          onClick={decrimentChildren}
        >
          -
        </button>
        <span className='countChildren' > 
          {children}
        </span>
        <button 
          className='button'
          onClick={incrimentChildren}
        >
          +
        </button>
      </div>
    </div>
    <div className='line3'></div>
    <Checkbox
      checked={after2018}
      onChange={handeInfoChildrenChange}
      name="after2018"
      label={() => (
        <div className='checkbox__text'>
          <div className='checkbox__title'>Ребенок родился в 2018 или позже</div>
          <p>В этом случае вам доступны программы с господдержкой</p>
        </div>
      )}
    />
    <Checkbox
      checked={disabled}
      onChange={handeInfoChildrenChange}
      name="disabled"
      label={() => (
        <div className='checkbox__text'>
          <div className='checkbox__title'>У ребенка инвалидность</div>
          <p>В этом случае вам доступны программы с господдержкой</p>
        </div>
      )}
      />
    <Buttons
    disabled={!maritalStatus}
    // onClick={handleSumbit}
    nextLink="/incomeType"
    prevLink="/name"
     />
  </div> 
  );
}

//Нужно сделать выпадающий селект (холост/женат/разведен) и кнопки с выбором количества детей.
//  При нажатии на кнопку далее выводить в консоль объект с четырьмя полями: семейное положение, 
//  количество детей и два флага-булеана по состоянию чекбоксов.



const mapSetToProps = (state) => ({
  children: state.children,
  after2018: state.after2018,
  disabled: state.disabled,
  maritalStatus: state.maritalStatus,


})

const mapDispathToProps = {
  decrimentChildren,
  incrimentChildren,
  changeFilde,
}


export const FormOne = connect(mapSetToProps, mapDispathToProps)(FormOne_)