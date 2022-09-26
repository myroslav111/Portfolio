import React from 'react';
import { Icon } from '@iconify/react';
import './socials.scss';

const Socials = () => {
  return (
    <>
      <div className="social">
        <div className="social__wrapper">
          <a
            className="social__item"
            href="https://t.me/myroslav1111"
            target={'_blanc'}
          >
            <Icon className="icon" icon="fa-brands:telegram-plane" />
          </a>
          <a
            className="social__item"
            href="tel:+380500172671"
            target={'_blanc'}
          >
            <Icon className="icon" icon="jam:viber" />
          </a>
          <a
            className="social__item"
            href="https://www.linkedin.com/in/myroslav-kozar/"
            target={'_blanc'}
          >
            <Icon className="icon" icon="dashicons:linkedin" />
          </a>
          <a
            className="social__item"
            href="https://github.com/myroslav111"
            target={'_blanc'}
          >
            <Icon className="icon" icon="akar-icons:github-fill" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
