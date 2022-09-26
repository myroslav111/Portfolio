import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/use-theme';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './button.scss';

const Button = () => {
  // const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));
  // Multilanguage
  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value);
  };

  // change themes

  // eslint-disable-next-line
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };

  return (
    <>
      <div className="btn__groups">
        <div className="btn__group-theme">
          <button className={'btn btn__light'} onClick={handleLightThemeClick}>
            <Icon className="icon-theme" icon="bxs:sun" />
          </button>
          <button className="btn" onClick={handleDarkThemeClick}>
            <Icon
              className="icon-theme"
              icon="emojione-monotone:crescent-moon"
            />
          </button>
        </div>
        <div className="btn__group-language">
          <select
            className="select__block"
            value={localStorage.getItem('i18nextLng')}
            onChange={handleLanguageChange}
          >
            <option className="option__item" value="en">
              {'EN'}
            </option>
            <option className="option__item" value="ua">
              {'UA'}
            </option>
          </select>
          {/* <button
            onClick={() => handleLanguageChange()}
            className="btn__flag"
            value={"uk"}
          >
            <Icon className="icon-flag" icon="emojione-v1:flag-for-ukraine" />
          </button>
          <button
            onClick={() => handleLanguageChange()}
            className="btn__flag"
            value={"en"}
          >
            <Icon
              className="icon-flag"
              icon="emojione-v1:flag-for-united-kingdom"
            />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Button;
