import React from "react";
import vector from '../mobile/Vector.svg';


export function Name ({
  value,
  onChange,
  label: Label
}) {
  return (
    <label className='inputName'>
    <Label />
    <div className='input'>
          <input className='inputText' type='text' value={value} onChange={onChange}/>
          {value && <img className='img' src={vector} />}
        </div> 
    </label>

  )
}
