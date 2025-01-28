import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Galery from "../screens/galery";
import Contect from "../screens/contect";
import About from "../screens/about";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../I18n";




export default function Nav() {
  const he = () => {
  i18n.changeLanguage('he');
};
const en = () => {
  i18n.changeLanguage('en');
};

  const { t } = useTranslation();

  return (
    <>
 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">{t('home.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Galery">{t('galery.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{t('about.Link')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contect"> {t('contect.Link')}</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={() => he()}>עברית</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={() => en()}>ENG</button>

              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}