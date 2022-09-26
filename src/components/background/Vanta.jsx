import React, { useState, useEffect, useRef } from 'react';
import clouds from 'vanta/dist/vanta.clouds.min';
// import waves from 'vanta/dist/vanta.waves.min';
import Main from '../../pages/main/Main.page';
import './vanta.scss';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Intro = props => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        clouds({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="introstyle">
      <Main />
    </div>
  );
};

export default Intro;
