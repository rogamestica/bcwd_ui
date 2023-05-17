import '../static/css/cardwastxt.css';

const CardWAStxt = (props) => {
    const description = props.descript
    return (
        <p className="descript-cardwas">{description}</p>
    );
}

export default CardWAStxt;