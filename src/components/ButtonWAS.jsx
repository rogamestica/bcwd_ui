import '../static/css/buttonwas.css';

const ButtonWAS = (props) => {
    const mylink = props.mylink;
    const name = props.name;
    return (
        <a className="btn-sn" href={mylink}>{name}</a>
    );
}

export default ButtonWAS;