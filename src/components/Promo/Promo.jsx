import React from 'react';
import './Promo.css';
import NavTab from "../NavTab/NavTab";

// TODO: доделать адаптивную верстку

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__wrapper'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <NavTab/>
        </div>
      </div>
    </section>
  );
}

export default Promo;