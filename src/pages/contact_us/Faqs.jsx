import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner';
import Breadcrumb from '../../components/Breadcrumb';
import Pagination from '../../components/Pagination';

const Faqs = () => {
  useEffect(() => {
    const loadFonts = async () => {
      try {
        const robotoRegular = new FontFace(
          'Roboto-regular',
          `url(${require('../../static/roboto-font/Roboto-Regular.ttf')}) format('truetype')`
        );
        await robotoRegular.load();
        document.fonts.add(robotoRegular);

        const robotoLight = new FontFace(
          'Roboto-light',
          `url(${require('../../static/roboto-font/Roboto-Light.ttf')}) format('truetype')`
        );
        await robotoLight.load();
        document.fonts.add(robotoLight);

        document.body.style.fontFamily = 'Roboto-regular, Roboto-light';
      } catch (error) {
        console.error('Failed to load font:', error);
      }
    };

    loadFonts();
  }, []);

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {


    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  const questions = [
    'Nganong wala man ko kadawat sa akong water bill?',
    'Nganong mopula man dayon ang water bill bisan gamay ra ang bayrunon?',
    'Nganong dili mananghid kung magputol na sa tubig?',
    'Nganong alisdan ang akong metro kung kini moabot na og lima (5) ka tuig?',
    'Pwede ba sa akong tugkaran ra ibutang ang akong water meter',
  ];

  const answers = [
    ' Mintras kita nagpadayon og gamit sa atong linya sa tubig o active atong connection, adunay atong monthly billing nga mogawas kay kada bulan basahon ang metro kung pila ang konsumo og tagaan kita sa water bill. Ang mga bill handlers, maghatud sa waterbill basi sa binulan nga schedule sa tagsa-tagsa ka area. Naay higayon sa paghatud sa waterbill sa atong panimalay, walay tao nga modawat sa water bill, ila kining ibutang sa mail box o ipa-ipit o isuksuk lang kini sa gate o pultahan. Usahay naay modawat sa waterbill apan kini malimtan og hatag sa ato, o ma misplace mao nang dili makaabot sa ato ang water bill. Kung gusto ta magbayad apan wala ta masayod sa bayronon, pwede ta motawag o modiretso anhi sa atong buhatan para masayran nato ang bayronon sa tubig.Pwede sab kita mag sign-up sa Online Billing Inquiry (OBI) para mahibal-an pa nato ang uban detalye sa atong pangonsumo sa tubig. I-click lang ang OBI nga link sa kilid sa page ug ang AWAS nga link sa ibabaw.',
    ' Ang atong red bill o notice for disconnection magbase kini sa carrier’s deposit sa pag-apply sa atong water connection, ang gipangayo nga guaranty deposit duha (2) ka bulan sa atong minimum rate nga 208.65 x 2 = 417.30 para sa residential og 834.60 para sa commercial. Kung ang imong overdue nga bayronon sa tubig mosobra o molapas sa imong guaranty deposit, ikaw tagaan og pula (red bill) o notice for disconnection sa imong overdue nga bayronon. Pwede pud nato gamiton ang bill calculator sa kilid sa page o sa AWAS para makasayod kita kung pila ang atong mabayran base sa konsumo nato nga makit-an sa atong metro.',
    ' Sa paghatud sa waterbill nga pula adunay gi apil nga notice of disconnection diin naay due date nga tolo (3) ka adlaw gibutang. Sa paglapas sa due date sa atong red bill kung kini dili mabayaran, diretso na atong disconnection team nga ilang sirad an atong linya sa tubig tungod kay gipa sidan-an naman kita pinaagi sa notice of disconnection nga naa makita diha sa ubos nga bahin sa atong red bill.',
    ' Kinahanglan alisdan ang metrohan sa tubig pag abot sa lima (5) ka tuig tungod kay dili na epektibo ang pagrehistro sa konsumo, pwede siya mokusog o mohinay ug rehistro sa gamit. Para mapadayon nga accurate ang pagrehistro sa konsumo, ilisan nato ang mga metro pag abot lima ka tuig nga walay bayad.',
    ' Ang mga metrohan sa tubig naka klaster or nakagrupo, gibutang tunga sa kada opat ka balay daplin sa dalan, dili kini pwede ibutang sulod sa koral o private property.',
  ];

  return (
    <>
      <Banner title={'Frequently Asked Questions'} />
      <Container className="mt-4">
        <Breadcrumb
          paths={[
            { name: 'Company', url: '#' },
            { name: 'FAQs', url: '/faqs' },
          ]}
        />

        <div style={{ margin: '20px auto', maxWidth: '900px' }}>
          {questions.map((question, index) => (
            <div
              key={index}
              style={{
                border: '2px solid gray',
                padding: '10px',
                marginBottom: '10px',
                width: '100%',
                marginTop:'30px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleSelect(index)}
              >
                <div
                  style={{
                    flex: '1',
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    marginTop: '10px',
                  }}
                >
                  {question}
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    marginRight: '5px',
                    transform: selected === index ? 'rotate(90deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                >
                  <svg width="25" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5591 18.205C18.4202 19.265 16.5707 19.265 15.4318 18.205L0.85416 4.63658C-0.284718 3.57655 -0.284718 1.85505 0.85416 0.795023C1.99304 -0.265009 3.84258 -0.265009 4.98145 0.795023L17.5 12.4469L30.0185 0.803503C31.1574 -0.256527 33.007 -0.256527 34.1458 0.803503C35.2847 1.86353 35.2847 3.58503 34.1458 4.64506L19.5682 18.2135L19.5591 18.205Z" fill="#7B7A7A"/>
                  </svg>

                </div>
              </div>
              {selected === index && (
                <div
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-regular',
                    fontSize: '16px',
                    marginTop: '10px',
                  }}
                >
                  {answers[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
      <Pagination />
    </>
  );
};

export default Faqs;
