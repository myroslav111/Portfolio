import React from 'react';
import { useTranslation } from 'react-i18next';
import './main.page.scss';

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="title__wrapper">
        <h1 className="title">{t('name')}</h1>
        <br />
        <h2 className="subtitle">{t('specialization')}</h2>
      </div>
    </>
  );
};

export default Main;
