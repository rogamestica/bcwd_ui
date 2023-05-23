import React, { useEffect } from 'react';

const Paragraph = (props) => {
  useEffect(() => {
    const robotoRegular = new FontFace(
      'Roboto Regular',
      `url(${require('../static/roboto-font/Roboto-Regular.ttf')}) format('truetype')`
    );

    robotoRegular
      .load()
      .then((font) => {
        document.fonts.add(font);
        document.body.style.fontFamily = 'Roboto Regular';
      })
      .catch((error) => {
        console.error('Failed to load font:', error);
      });
  }, []);

  const description = props.descript;
  return (
    <p className="text-break text-black fs-6" style={{ fontFamily: 'Roboto Regular', fontSize: '25px' }}>
      {description}
    </p>
  );
};

export default Paragraph;
