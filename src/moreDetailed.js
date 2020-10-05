import React, { useState, useEffect } from "react";
import { realty } from './realty'
//import { toc } from './TOC/TOC'



export function MoreDetailed ({
  prepayment,
  minRate,
  minDeposit,
  creditPeriod,
  minAmount,
  maxAmount,
  contractPlace,
  realtyTypes,
  minJobExperience,
  totalJobExperience,
  minAge,
  maxAge,
  insurance,
  fines,
  requiresRussiaCitizenship,
  requiresSolvencyProof,
}) {

const realt = realty(realtyTypes);
  return ( 
  <div className='detailed'>
  
            <div className='more_detailed_form'>
              <div className='detailed_terms'>
                <div className='detailed_title'>Условия ипотеки
                  <ul>
                    <li>Первоначальный взнос от {minDeposit}%</li>
                    <li>Сумма от {minAmount} до {maxAmount}</li>
                    <li>Без подтверждения дохода</li>
                    <li>На срок от 1 года до {creditPeriod} лет</li>
                  </ul>
                </div>
                <div className='detailed_title docs'>Документы для ипотеки
                  <ul>
                    <li>Заявление-анкета с указанием в ней номеров СНИЛС и/или ИНН</li>
                    <li>Паспорт гражданина РФ или паспорт иностранного гражданина</li>
                    <li>Для мужчин, не достигших 27 лет, военный билет</li>
                  </ul>
                </div>
              </div>
              <div className='detailed_terms'>
                <div className='detailed_title'>Дополнительно
                  <ul>
                    <li>Залог:<br></br><p>Залог приобретаемого объекта</p></li>
                    <li>Место заключения договора:<br></br><p>{contractPlace}</p></li>
                    <li>Требования к недвижимости:<br></br><p>{realt}</p></li>
                    <li>Штрафы:<br></br><p>{fines===''?'Предусмотренные программой':fines}</p></li>
                    <li>Страхование:<br></br><p>{insurance}</p></li>
                    <li>Досрочное погашение:<br></br><p>{prepayment}</p></li>
                    <li>Дополнительные условия:<br></br><p>Предусмотренные программой</p></li>
                    </ul>
                </div>
              </div>
              <div className='detailed_terms'>
                <div className='detailed_title title_terms'>Требования к заемщику
                  <ul>
                    <li>Гражданство РФ:<br></br><p>{requiresRussiaCitizenship===true?'Требуется гражданство РФ':'Не требуется'}</p></li>
                    <li>Отсутствие негативной кредитной истории:<br></br><p>Не требуется</p></li>
                    <li>Подтверждение платежеспособности:<br></br><p>{requiresSolvencyProof=== true?'Требуется подтверждение':'Не требуется'}</p></li>
                    <li>Возраст:<br></br><p>{minAge&&maxAge>0?`от ${minAge} до ${maxAge} лет`:'Нет ограничений по возрасту'}</p></li>
                    <li>Стаж на последнем месте работы:<br></br><p>{minJobExperience>0?`от ${minJobExperience} мес.`:'Не требуется'}</p></li>
                    <li>Общий стаж работы:<br></br><p>{totalJobExperience>0?`от ${totalJobExperience} мес.`:'Стаж не требуется'}</p></li>
                  </ul>
                </div>
              </div>
              <div className='detailed_terms'>
                <div className='detailed_title'>Документы для ипотеки
                  <ul>
                    <li>Заявление-анкета с указанием в ней номеров СНИЛС и/или ИНН</li>
                    <li>Паспорт гражданина РФ или паспорт иностранного гражданина</li>
                    <li>Для мужчин, не достигших 27 лет, военный билет</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  )
}
