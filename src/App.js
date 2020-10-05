import React, { useState } from "react";
import { Card } from "./Card";
import { Head } from "./Head";
import { data } from "./data";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FormDocs } from './FormDocs';
import { FormOne } from './FormOne';
import { FormProfit } from './FormProfit';
import { FormName } from './FormName';
import { Header } from './components/Header.js';
import { FormContacts } from './FormContacts.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {appReducer} from './store/reducers';
import {FormContactsContainer} from './containers/FormContactsContainer'


const store = createStore(appReducer)

export function App() {
  

  const [priceApartment, setPriceApartment] = useState(3000000);
  const [creditPeriod, setCreditPeriod] = useState(30);
console.log(data);
  function handlePriceApartment(e) {
    setPriceApartment(+e.target.value);
  }

  function handleTime(e) {
    setCreditPeriod(+e.target.value);
  }

  return (
    <Provider store={store}>
    <Router>
    <Switch>
          <Route exact path="/">
            <Head />
            <div className='startValues'>
              <label>
                Сумма кредита - 
                <input
                  className='startValues__input'
                  type="number"
                  value={priceApartment}
                  onChange={handlePriceApartment}
                ></input>
              </label> <br></br>
              <label>
              Срок кредита(лет) - 
              <input className='startValues__input' type="number" value={creditPeriod} onChange={handleTime}></input></label>
            </div>
          
            {data.products.map(elem => (
              <Card
                apartmentPrice={priceApartment}
                creditPeriod={creditPeriod}
                minDeposit={+elem.minDeposit}
                logo={elem.companyLogoUrl}
                prepayment={elem.prepayment}
                companyName={elem.companyName}
                name={elem.name}
                minRate={elem.minRate}
                minAmount={elem.minAmount}
                maxAmount={elem.maxAmount}
                contractPlace={elem.contractPlace}
                realtyTypes={elem.realtyTypes}
                minJobExperience={elem.minJobExperience}
                totalJobExperience={elem.totalJobExperience}
                minAge={elem.minAge}
                maxAge={elem.maxAge}
                insurance={elem.insurance}
                fines={elem.fines}
                requiresRussiaCitizenship={elem.requiresRussiaCitizenship}
                requiresSolvencyProof={elem.requiresSolvencyProof}
              />
            ))}
          </Route>
          <Route path="/name">
            <Header />
            <FormName />
          </Route>
          <Route path="/contacts">
             <Header />
             <FormContactsContainer/>
          </Route>
          <Route path="/maritalStatus">
            <Header />
            <FormOne />
          </Route>
          <Route path="/salary">
            <Header />
            <FormProfit />
          </Route>
          <Route path="/incomeType">
            <Header />
            <FormDocs />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
