import '../static/css/cardwas.css';
import CardWAStxt from './CardWAStxt';
import ButtonWAS from './ButtonWAS';

const CardWAS = (props) => {

    const title = props.title;
    const descript = props.descript;
    const my_link = props.my_link;
    const myname = props.name;
    const biclass = props.biclass;
    const d1 = props.d1;
    const d2 = props.d2;

    return (

        <div className="card mycard">
            <div className="card-body">
                <div className="container text-left">
                    <div className="row row-cols-12 row-cols-lg-12 g-2 g-lg-12">
                        <div className="col-12 py-3 m-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className={biclass} viewBox="0 0 16 16">
                                <path d={d1} />
                                <path d={d2} />
                            </svg>
                        </div>
                        <div className="col-12 py-3 m-1">
                            <strong><CardWAStxt descript={title} /></strong>
                            <CardWAStxt descript={descript} />
                        </div>
                        <div className="col-12 py-3 m-1">
                            <ButtonWAS mylink={my_link} name={myname} />
                        </div>

                    </div>
                </div>
            </div >
        </div >

    );
}

export default CardWAS;