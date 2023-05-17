import Banner from "../../components/Banner";
import '../../static/css/contactus/faqs.css';
import { Container } from "react-bootstrap";
import Pagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from 'react';

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

        
  const questions = [
    '"NGANONG WALA MAN KO KADAWAT SA AKONG WATER BILL?"',
    '“NGANONG MOPULA MAN DAYON ANG WATER BILL BISAN GAMAY RA ANG BAYRONON?”',
    '“NGANONG DILI MANANGHID KUNG MAGPUTOL NA SA TUBIG?”',
    '“NGANONG ALISDAN ANG AKONG METRO KUNG KINI MOABOT NA OG LIMA (5) KA TUIG?”',
    '“PWEDE BA SA AKONG TUGKARAN RA IBUTANG ANG AKONG WATER METER?”',
  ];

  const answers = [
    '» Mintras kita nagpadayon og gamit sa atong linya sa tubig o active atong connection, adunay atong monthly billing nga mogawas kay kada bulan basahon ang metro kung pila ang konsumo og tagaan kita sa water bill. Ang mga bill handlers, maghatud sa waterbill basi sa binulan nga schedule sa tagsa-tagsa ka area. Naay higayon sa paghatud sa waterbill sa atong panimalay, walay tao nga modawat sa water bill, ila kining ibutang sa mail box o ipa-ipit o isuksuk lang kini sa gate o pultahan. Usahay naay modawat sa waterbill apan kini malimtan og hatag sa ato, o ma misplace mao nang dili makaabot sa ato ang water bill. Kung gusto ta magbayad apan wala ta masayod sa bayronon, pwede ta motawag o modiretso anhi sa atong buhatan para masayran nato ang bayronon sa tubig.Pwede sab kita mag sign-up sa Online Billing Inquiry (OBI) para mahibal-an pa nato ang uban detalye sa atong pangonsumo sa tubig. I-click lang ang OBI nga link sa kilid sa page ug ang AWAS nga link sa ibabaw.',
    '» Ang atong red bill o notice for disconnection magbase kini sa carrier’s deposit sa pag-apply sa atong water connection, ang gipangayo nga guaranty deposit duha (2) ka bulan sa atong minimum rate nga 208.65 x 2 = 417.30 para sa residential og 834.60 para sa commercial. Kung ang imong overdue nga bayronon sa tubig mosobra o molapas sa imong guaranty deposit, ikaw tagaan og pula (red bill) o notice for disconnection sa imong overdue nga bayronon. Pwede pud nato gamiton ang bill calculator sa kilid sa page o sa AWAS para makasayod kita kung pila ang atong mabayran base sa konsumo nato nga makit-an sa atong metro.',
    '» Sa paghatud sa waterbill nga pula adunay gi apil nga notice of disconnection diin naay due date nga tolo (3) ka adlaw gibutang. Sa paglapas sa due date sa atong red bill kung kini dili mabayaran, diretso na atong disconnection team nga ilang sirad an atong linya sa tubig tungod kay gipa sidan-an naman kita pinaagi sa notice of disconnection nga naa makita diha sa ubos nga bahin sa atong red bill.',
    '» Kinahanglan alisdan ang metrohan sa tubig pag abot sa lima (5) ka tuig tungod kay dili na epektibo ang pagrehistro sa konsumo, pwede siya mokusog o mohinay ug rehistro sa gamit. Para mapadayon nga accurate ang pagrehistro sa konsumo, ilisan nato ang mga metro pag abot lima ka tuig nga walay bayad.',
    '» Ang mga metrohan sa tubig naka klaster or nakagrupo, gibutang tunga sa kada opat ka balay daplin sa dalan, dili kini pwede ibutang sulod sa koral o private property.',
  ];

    return (
      <>
      <Banner title={"Frequently Ask Questions"}/>
      <Container>
        <Breadcrumb
          paths={[
            { name: "Company", url: "#" },
            { name: "FAQs", url: "/faqs" },
          ]}
        />
        
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
            
              {questions.map((question, index) => (
                <div key={index} style={{ border: '2px solid gray', padding: 10, marginBottom: 10, width: '150%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width:'100%' }} onClick={() => handleSelect(index)}>
                    <div style={{ marginRight: 5 }}>{selected === index ? '-' : '+'}</div>
                    <div>{question}</div>
                  </div>
                  {selected === index && <div style={{ marginTop: 10 }}>{answers[index]}</div>}
                </div>
              ))}
            </div>
          
      </Container>
      <Pagination />
      </>
    );
  };
  
  export default Faqs;