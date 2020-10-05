import React from "react";


import cn from 'classnames';


export function Checkbox({
  checked,
  onChange,
  name,
  label: Label,
  className,
}) {
  // npm i classnames 
  return (
   <label className={cn("checkbox", className)}>
      <input
        className="checkbox__input"
        type='checkbox'
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <div className="checkbox__pseudoinput" />
      <Label />
   </label>
  );
}