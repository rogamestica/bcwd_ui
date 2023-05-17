import '../static/css/descrip.css';

const Paragraph = (props) => {
    const description = props.descript;
    return (

        <p className="text-break descript">{description}</p>

    );
}

export default Paragraph;