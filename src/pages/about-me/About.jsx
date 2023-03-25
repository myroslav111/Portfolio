import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.scss';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="about">
        <div className="about__container">
          <h2 className="about__hello">{t('hello')}!</h2>
          <p className="about__hello">
            {t('i')} {t('name')}, <nobr>{t('specialization')}.</nobr>
            <br />
            {t('i_can')}
          </p>
          <div className="education">
            <h4 className="about__education">{t('education')}:</h4>
            <div>2021 - 2022</div>
            <div>
              Front-end {t('development')} | <nobr>GO IT Academy &nbsp;</nobr>
              <Icon className="icon__about" icon="zondicons:education" />
              {/* <image
                style={{ color: 'white' }}
                width="20px"
                alt="School logo"
                src="	https://s3.eu-north-1.amazonaws.com/lms.goit.files/0618d8e0-2652-3e30-ae44-fd6ff17d55a1.png"
              /> */}
            </div>
          </div>
          <div className="list__skills-container">
            <ul className="list__skills">
              <div className="list__skills-title">{t('skills')}:</div>
              <div className="skills">
                {' '}
                <li className="skill__1">
                  {t('i_have_knowledge')} HTML, CSS, JavaScript&nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:html-5" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:css-3" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:javascript" />
                </li>{' '}
                <li className="skill__2">
                  {t('i_use_frameworks')} React, Next.js {t('and')}{' '}
                  i18next&nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:react" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:nextjs-icon" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="simple-icons:i18next" />
                </li>
                <li className="skill__3">
                  {t('i_can_use')} Node.js {t('and')} MongoDB &nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:nodejs" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:mongodb-icon" />
                  &nbsp;&nbsp;
                  {/* <Icon className="icon__about" icon="simple-icons:i18next" /> */}
                </li>
                <li className="skill__4">
                  {t('i_can_work_with')} Visual Studio Code, Figma&nbsp;&nbsp;
                  <Icon
                    className="icon__about"
                    icon="logos:visual-studio-code"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:figma" />
                </li>
                <li className="skill__5">
                  {t('i_have_the_skills')} Git&nbsp;&nbsp;
                  <Icon className="icon__about" icon="fa6-brands:git-square" />
                </li>
                <li className="skill__6">
                  {t('i_can_use')} {t('pre-processor')} Sass {t('and')}{' '}
                  BEM&nbsp;
                  {t('methodology')}&nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:sass" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="file-icons:bem" />
                </li>
                <li className="skill__7">
                  {t('i_can_work_with')} SVG{' '}
                  {t('graphics_and_create_animations')}
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="ci:file-svg" />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="mdi:animation-play" />
                </li>
                <li className="skill__8">
                  {t('i_know')} {t('principles')} SEO&nbsp;&nbsp;
                  <Icon className="icon__about" icon="icon-park-outline:seo" />
                </li>
                <li className="skill__9">
                  {t('group_work')}&nbsp;&nbsp;
                  <Icon className="icon__about" icon="logos:microsoft-teams" />
                </li>
                <li className="skill__10">
                  {t('i_can_work_with')} TS REDUX&nbsp;&nbsp;
                  <Icon
                    className="icon__about"
                    icon="vscode-icons:file-type-tsconfig"
                  />
                  &nbsp;&nbsp;
                  <Icon className="icon__about" icon="akar-icons:redux-fill" />
                </li>
              </div>
            </ul>
          </div>
          <div className="list__languages-container">
            <ul className="list__languages">
              {t('languages')}:
              <li>
                {t('ukrainian')}&nbsp;&nbsp;
                <Icon
                  className="icon__about"
                  icon="emojione-v1:flag-for-ukraine"
                />
              </li>
              <li>
                {t('english')}&nbsp;&nbsp;
                <Icon
                  className="icon__about"
                  icon="emojione-v1:flag-for-united-kingdom"
                />
              </li>
              <li>
                {t('de')}&nbsp;&nbsp;
                <Icon
                  className="icon__about"
                  icon="emojione-v1:flag-for-germany"
                />
              </li>
              <li>
                {t('ru')}&nbsp;&nbsp;
                <Icon
                  className="icon__about"
                  icon="emojione-v1:flag-for-russia"
                />
              </li>
              {/* emojione-v1:flag-for-russia */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
