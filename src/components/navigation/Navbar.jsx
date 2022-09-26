import React from 'react';
import './navbar.scss';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../../pages/about-me/About';
import Projects from '../../pages/projects/Projects';
import MainWrapper from '../../pages/main/Main.wrapper';
import { Icon } from '@iconify/react';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <>
      <Router basename="/Portfolio/">
        {/* Navigation */}

        <div className="navigation">
          <Link to="/" className="navigation__item">
            <Icon icon="akar-icons:home" />
          </Link>
          <br />
          <Link to="/about" className="navigation__item">
            {t('about')}
          </Link>
          <br />
          <Link to="/projects" className="navigation__item">
            {t('sites')}
          </Link>
          <br />
          <Button />
        </div>
        {/* Content */}
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainWrapper />} />
          {/* About me */}
          <Route path="About" element={<About />} />
          {/* Projects */}
          <Route path="Projects" element={<Projects />} />

          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
