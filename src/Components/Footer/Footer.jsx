import React from "react";
import "./Footer.css";
import { FaVk } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__flex-block">
              <div className="footer__logo">
                <img src="/logo.png" alt="logo" />
                <p>OOO"BRBALO"</p>
              </div>
              <div className="footer__title">
                <ul>
                  <h1>Покупателям</h1>
                  <a href="#">О компании</a>
                  <a href="#">Оплата</a>
                </ul>
                <ul>
                  <h1>Контакты</h1>
                  <h2>Адрес:</h2>
                  <p>г. Москва, ул. Московская, д. 35 </p>
                  <a className="footer__flex" href="#">
                    Карта проезда
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 3V10M11 3H4M11 3L2.5 11.5"
                        stroke="#F8F7F3"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <b>
                    График работы: <br />
                    Пн-Пт с 09:00-19:00, <br />
                    Сб-Вс - выходной
                  </b>
                  <p>
                    +7 000-000-00-00 <br /> +7 495-000-00-00 <br /> 8
                    800-000-00-00 <br />
                    info@mail.ru
                  </p>
                </ul>
                <ul>
                  <h1>Мы в соцсетях</h1>
                  <div className="footer__icon">
                    <Link href="#">
                      <FaVk />
                    </Link>
                    <Link href="#">
                      <FaTelegram />
                    </Link>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
            <div className="footer__bottom">
              <h3>© 2022 Медоборудование <br /> Все права защищены</h3>
              <p>Create by: Aziz & Umar <a href="https://t.me/aziz_k_11">Telegram</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
