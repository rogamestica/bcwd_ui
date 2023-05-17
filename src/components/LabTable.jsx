import Table from 'react-bootstrap/Table';
import '../static/css/serviceadvisories/table.css';

const LabTable = (props) => {
    const column1 = props.column1;
    const column2 = props.column2;
    const datas = props.datas;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={6}>{column1}</th>
                    <th colSpan={6}>{column2}</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((data, index) => (
                    <tr key={index}>
                        <td colSpan={6}>{index + 1}. {data.data1}</td>
                        <td colSpan={6}>{data.data2}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default LabTable;
