import '../static/css/footheader.css';

const FootHeader = (props) => {
    const header = props.header
    return (
        <div className="element-class-footer">
            <h1 className="myheader-footer pt-2">{header}</h1>
        </div>
    );
}

export default FootHeader;