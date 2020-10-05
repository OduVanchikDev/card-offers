import React from "react";
import left from '../mobile/left.svg';
import right from '../mobile/right.svg';
import { Link } from "react-router-dom";

export function Buttons ({
  disabled,
  onClick,
  nextLink,
  prevLink,
}) {
  return (
    <div className='buttons'>
          <Link className='button-left' to={prevLink}>
            <img src={left} />
            <div className='buttonText'>Назад</div>
          </Link>
          <Link className='button-right' to={nextLink} disabled={!disabled} onClick={onClick}>
            <div className='buttonText2'>Далее</div>
            <img src={right} />
          </Link>
        </div>
  )
}