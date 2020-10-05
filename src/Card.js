import React, { useState, useEffect } from "react";
import arrow from "./mobile/arrowdown.svg";
import arrowAp from "./mobile/detail.svg";
import arrowWhite from "./mobile/arrowWhite.svg";
import { formatMoney } from './money'
import { MoreDetailed } from './moreDetailed'

export function Card({
  logo,
  apartmentPrice,
  prepayment,
  companyName,
  name,
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
  const downPayment = apartmentPrice * (minDeposit / 100);
  const monthlyPayment = (
    (apartmentPrice -
      apartmentPrice * (minDeposit / 100) +
      ((apartmentPrice - apartmentPrice * (minDeposit / 100)) / 100) *
      minRate *
      creditPeriod) /
      (12 * creditPeriod)
      )
      const overPayment = (monthlyPayment * 12 * creditPeriod - apartmentPrice)
      
      const [detailed, setDetailed] = useState(false);

      function handleDitailed(){
        setDetailed(e => !e);
      }

console.log(apartmentPrice)
  return (
    <section className="container">
      <div className="form_header">
        <a href="https://cian.ru/">
          <img className="banc_logo" src={logo} />
        </a>
        <div className="block_title">
          <a href="https://cian.ru/">
            <div className="banc_product_name">Ипотека «{prepayment}»</div>
          </a>
          <div className="banc_name">{companyName}</div>
          <div className="property_name">{name}</div>
        </div>
      </div>
      <div className="parameter_calculation_block">
        <div className="calculation_block">
          <div className="calculation_block_number number_1">{minRate} %</div>
          <div className="calculation_block_text text_1">процентная ставка</div>
        </div>
        <div className="calculation_block">
          <div className="calculation_block_number number_2">
            {formatMoney(monthlyPayment)}
          </div>
          <div className="calculation_block_text text_2">
            ежемесячный платеж
          </div>
        </div>
        <div className="calculation_block">
          <div className="calculation_block_number number_3">
            {formatMoney(downPayment)}
          </div>
          <div className="calculation_block_text text_3">
            первоначальный взнос
          </div>
        </div>
        <div className="calculation_block">
          <div className="calculation_block_number number_4">
            {formatMoney(apartmentPrice)}
          </div>
          <div className="calculation_block_text text_4">сумма кредита</div>
        </div>
        <div className="calculation_block">
          <div className="calculation_block_number number_5">
            {formatMoney(overPayment)}
          </div>
          <div className="calculation_block_text text_5">сумма процентов</div>
        </div>
      </div>
      {detailed && <MoreDetailed
      minDeposit={minDeposit}
      prepayment={prepayment}
      minRate={minRate}
      minAmount={minAmount}
      maxAmount={maxAmount}
      contractPlace={contractPlace}
      realtyTypes={realtyTypes}
      minJobExperience={minJobExperience}
      totalJobExperience={totalJobExperience}
      minAge={minAge}
      maxAge={maxAge}
      insurance={insurance}
      fines={fines}
      creditPeriod={creditPeriod}
      requiresRussiaCitizenship={requiresRussiaCitizenship}
      requiresSolvencyProof={requiresSolvencyProof}
       />}
      <div className="block_buttons">
              <button className="more_detailed" value={detailed} onClick={handleDitailed}>
                  Подробнее
                  {detailed && <img className="arrow" src={arrowAp} />}
                  {!detailed && <img className="arrow" src={arrow} />}
              </button>
              <div className='scrin_buttons'>
              {detailed && <button className="arrange">
                    Оформить онлайн
                    <img className="arrowWhite" src={arrowWhite} />
                </button>}
                <button className="calculate">
                    Рассчитать ипотеку
                    <img className="arrowWhite" src={arrowWhite} />
                </button>
              </div>
            </div>
    </section>
  );
}
