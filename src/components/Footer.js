import React from "react";
import Logo from "../images/logo.png";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logocubics from "../images/logocubics.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={Logo} alt="page logo" />
        </div>
        <div className="contact">
          <div className="icon">
            <AiOutlineWhatsApp className="wp-icon"></AiOutlineWhatsApp>
          </div>
          <div className="icon">
            <AiOutlineInstagram className="instagram-icon"></AiOutlineInstagram>
          </div>
          <div className="icon">
            <AiFillFacebook className="facebook-icon"></AiFillFacebook>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="catalogs">
        <ul className="footer-catalogs">
          <li className="catalogs-item">
            <a href="/">Xidmətlər</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Şirkət Haqqında</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Çatdırılma Ödənişi</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Qaytarılma Siyasəti</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Məxfilik Siyasəti</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Əlaqə və Ünvanlar</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Zəmanət Şərtləri</a>
          </li>
          <span>|</span>
          <li className="catalogs-item">
            <a href="/">Xəbərlər</a>
          </li>
        </ul>
        <a href="/">Catalogs</a>
      </div>
      <hr></hr>
      <div className="powered-by">
        <div className="gametone-az">
          <p>gamenotebaku.az 2019-2020 Bütün hüquqlar qorunur</p>
        </div>
        <div className="logo-cubics">
          <p>Powered by</p>
          <img src={Logocubics} alt="Logo Image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
