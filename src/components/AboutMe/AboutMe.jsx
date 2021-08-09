import React from 'react';
import './AboutMe.css'
import photo from '../../images/student-photo.jpeg'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__wrap">
          <div className="about-me__description">
            <div className="about-me__description">
              <h3 className="about-me__name">Артемий</h3>
              <p className="about-me__profession">
                Фронтенд-разработчик, 26 лет
              </p>
              <p className="about-me__text">
                Я живу в городе Тюмени, закончил Тюмкенский индустриальный университет
                по направлению подъемно-транспортные средства. Я очень люблю фотографировать и кататься на горных лыжах.
                С 2020 года я начал свой путь как Frontend разработчик. В течении учебы я участвовал в благотворительных
                проектах, для того чтобы прокачать свои навыки. Я очень люблю, то чем занимаюсь сейчас!
              </p>
            </div>
            <div className="about-me__links">
              <a
                className="about-me__link"
                href="https://www.linkedin.com/in/artemii-pudovkin-6a9368205/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="about-me__link"
                href="https://github.com/tyumen-777"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента" />
        </div>
        <Portfolio/>
      </div>
    </section>
  );
}

export default AboutMe;