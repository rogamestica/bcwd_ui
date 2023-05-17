import '../static/css/header3.css';

const Header3 = (props) => {
    const header = props.header
    return (
        <div className="container p-3">
            <h1 className="header3 p-5">{header}</h1>
        </div>
    );
}

export default Header3;