import '../static/css/header1.css';

const Header1 = (props) => {
    const header = props.header
    return (
        <div className="element-class">
            <h1 className="myheader pt-2">{header}</h1>
        </div>
    );
}

export default Header1;