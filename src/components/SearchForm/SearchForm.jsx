import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import findIcon from '../../images/search-icon.svg'

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__wrap">
            <img src={findIcon} alt="Иконка поиска" className='search__icon'/>
            <input placeholder="Фильм" className="search__input"/>
            <button type="submit" className="search__submit">
              Найти
            </button>
          </div>
          <FilterCheckbox filterText="Короткометражки" />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;