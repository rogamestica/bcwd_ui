import Button from "react-bootstrap/esm/Button";
import '../static/css/nav-css.css';

const MyButton = (props) => {
    const name = props.name;
    return (
        <Button variant="primary" className="my-water-bill-btn">{name}</Button>
    );
}

export default MyButton;