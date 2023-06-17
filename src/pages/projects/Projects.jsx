import React from 'react';
import { useTranslation } from 'react-i18next';
import './projects.scss';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="projects">
        <div className="projects__wrapper">
          <ol>
            <li>
              {/* project 2 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://pets-app-client-side-ag5ofq52b-myroslav111.vercel.app"
                    target={'_blanc'}
                  >
                    Pets-app-client <br /> {t('pets')}:{' '}
                    <nobr>
                      https://pets-app-client-side-ag5ofq52b-myroslav111.vercel.app
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_10.png')}
                    />
                  </a>
                </div>
                {/*  */}
              </div>
            </li>
            <li>
              {/* project 2 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://shop-phi-ruddy.vercel.app"
                    target={'_blanc'}
                  >
                    Schop <br /> {t('shop')}:{' '}
                    <nobr>https://shop-phi-ruddy.vercel.app</nobr>
                    <br />
                    <br />
                    <br />
                    <div
                      className="project__exemples"
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <img
                        className="project__exemples4"
                        style={{ marginBottom: '10px' }}
                        width="700px"
                        height="400px"
                        alt="divise"
                        src={require('./images/Screenshot_11.png')}
                      />
                      <img
                        className="project__exemples4"
                        width="700px"
                        height="400px"
                        alt="divise"
                        src={require('./images/Screenshot_12.png')}
                      />
                    </div>
                  </a>
                </div>
                {/*  */}
              </div>
            </li>

            <li>
              {/* project 1 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/Language_cards/"
                    target={'_blanc'}
                  >
                    Language cards <br /> {t('site_lang_school')}:{' '}
                    <nobr>https://myroslav111.github.io/Language_cards/</nobr>
                    <br />
                    <br />
                    <br />
                    <div className="project__exemples">
                      <img
                        className="project__exemples1"
                        width="200px"
                        height="400px"
                        alt="divise"
                        src="https://user-images.githubusercontent.com/92175747/191112476-91b9d308-4f8e-46a0-ad37-e3251947b6bb.png"
                      />
                      <img
                        className="project__exemples2"
                        width="200px"
                        height="400px"
                        alt="divise"
                        src="https://user-images.githubusercontent.com/92175747/191112602-2ee4183b-cf37-49d5-83e5-3df8ede102a9.png"
                      />
                      <img
                        className="project__exemples3"
                        width="200px"
                        height="400px"
                        alt="divise"
                        src="https://user-images.githubusercontent.com/92175747/191112671-2392f096-2f9e-4edd-a25b-058996a07c58.png"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li>
              {/* project 2 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/kino-go/"
                    target={'_blanc'}
                  >
                    Kinogo <br /> {t('site_kinogo')}:{' '}
                    <nobr>https://myroslav111.github.io/kino-go/</nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_1.webp')}
                    />
                  </a>
                </div>
                {/*  */}
              </div>
            </li>
            <li>
              {/* project 2 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://project-on-next-q8se.vercel.app/"
                    target={'_blanc'}
                  >
                    Next.js app <br /> {t('next')}:{' '}
                    <nobr>https://project-on-next-q8se.vercel.app/</nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_7.webp')}
                    />
                  </a>
                </div>
                {/*  */}
              </div>
            </li>

            <li>
              {/* project 3*/}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/goit-react-hw-08-phonebook/"
                    target={'_blanc'}
                  >
                    Phone Book <br /> {t('internet_phonebook')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/goit-react-hw-08-phonebook/
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_2.webp')}
                    />
                  </a>
                  {/*  */}
                </div>
              </div>
            </li>
            <li>
              {/* project 4 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/project-web-html-scss/"
                    target={'_blanc'}
                  >
                    WebStudio <br /> {t('site_webstudio')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/project-web-html-scss/
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_3.webp')}
                    />
                  </a>
                </div>
                {/* <div class="embed-container">
                  <iframe
                    title="Trafico"
                    src="https://www.youtube.com/embed//rwt62XZrwGA"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div> */}
              </div>
            </li>

            <li>
              {/* project 5 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/barbershop-html-scss/"
                    target={'_blanc'}
                  >
                    BarberShop <br /> {t('site_webstudio')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/barbershop-html-scss/
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_4.webp')}
                    />
                  </a>
                </div>
              </div>
            </li>
            <li>
              {/* project 6 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/rick_and_morty/"
                    target={'_blanc'}
                  >
                    Rick and Morty <br /> {t('site_rick')}:{' '}
                    <nobr>https://myroslav111.github.io/rick_and_morty/</nobr>
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </li>
            <li>
              {/* project 7 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/converter_currency/"
                    target={'_blanc'}
                  >
                    Converter currency <br /> {t('converter')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/converter_currency/
                    </nobr>
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </li>
            <li>
              {/* project 8 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/goit-react-hw-04-images/"
                    target={'_blanc'}
                  >
                    Gallery by React <br /> {t('gallery')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/goit-react-hw-04-images/
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_5.webp')}
                    />
                  </a>
                </div>
              </div>
            </li>

            <li>
              {/* project 8 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/goit-react-hw-04-images/"
                    target={'_blanc'}
                  >
                    Gallery by pure js <br /> {t('galleryJs')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/goit-react-hw-04-images/
                    </nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_8.webp')}
                    />
                  </a>
                </div>
              </div>
            </li>

            <li>
              {/* project 9 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/100-natural/"
                    target={'_blanc'}
                  >
                    Ice Cream <br /> {t('icecream')}:{' '}
                    <nobr>https://myroslav111.github.io/100-natural/</nobr>
                    <br />
                    <br />
                    <br />
                    <img
                      className="project__exemples4"
                      width="700px"
                      height="400px"
                      alt="divise"
                      src={require('./images/Screenshot_6.webp')}
                    />
                  </a>
                </div>
              </div>
            </li>
            <li>
              {/* project 7 */}
              <div className="project">
                <div className="project__title">
                  <a
                    className="project__title-href"
                    href="https://myroslav111.github.io/hronomer_to_misha/"
                    target={'_blanc'}
                  >
                    Hronometr <br /> {t('hronometr')}:{' '}
                    <nobr>
                      https://myroslav111.github.io/hronomer_to_misha/
                    </nobr>
                    <br />
                    <br />
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Projects;
