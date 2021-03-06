import React from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <SearchForm/>
      <Preloader/>
      <MoviesCardList/>
    </>
  );
}

export default Movies;