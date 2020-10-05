import React, { useState } from "react";
import { Buttons } from './components/Buttons.js'
import { Name } from './components/Name.js'
import vector from './mobile/Vector.svg';
import { connect } from "react-redux";
import { changeFilde } from './store/FormContacts/action';


export function FormName_(props) {
  const {name, lastName, surname, changeFilde} = props
  // const [name, setName] = useState('');
  // const [lastName, setlastName] = useState('');
  // const [surname, setSurname] = useState('');

  function handleNameInsert(event){
    changeFilde('name', event.target.value);
  }
  function handleLastNameInsert(event){
    changeFilde('surname', event.target.value);
  }
  function handleSurnameInsert(event){
    changeFilde('lastName', event.target.value);
  }

  // function handleSumbit (){
  //   console.log(name, lastName, surname )
  // }


  return (
    <div className='content'>
        <div className='question'>Как вас зовут?</div>
        <div className='question_title2'>Заполните как в паспорте, это важно для банков</div>
        <Name 
        label={()=>(
          <div className="textName">
          <div className='question_sub_title3'>Фамилия</div>
          </div>
        )}
        value={surname}
        onChange={handleSurnameInsert}
        />
        
        
        {/* <div className='question_sub_title3'>Фамилия</div>
        <div className='input'>
          <input className='inputText' type='text' value={surname} onChange={handleSurnameInsert}/>
          {surname && <img className='img' src={vector} />}
        </div> */}
        <div className='question_sub_title3'>Имя</div>
        <div className='input'>
          <input className='inputText' type='text' value={name} onChange={handleNameInsert}/>
          {name && <img className='img' src={vector} />}
        </div>
        <div className='question_sub_title3'>Отчество</div>
        <div className='input'>
          <input className='inputText' type='text' value={lastName} onChange={handleLastNameInsert}/>
          {lastName && <img className='img' src={vector} />}
        </div>
        <Buttons
          disabled={!name && !lastName && !surname}
          // onClick={handleSumbit}
          nextLink="/maritalStatus"
          prevLink="/"
        />
    </div>
  )
}


const MapDispatchToProps = {
  changeFilde,
}

const MapStateToProps = (state) => {
  return {
     name: state.name,

  }
}


export const FormName = connect(MapStateToProps, MapDispatchToProps)(FormName_)
