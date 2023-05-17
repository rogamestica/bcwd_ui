import Table from 'react-bootstrap/Table';
import '../static/css/serviceadvisories/table.css'

const MyTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>City</th>
                    <th colSpan={2}>Barangay</th>
                    <th colSpan={3}>Specific Area</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Time</th>
                    <th colSpan={2}>Reason</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Quezon City</td>
                    <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
                    <td colSpan={3}>Lamesa Pumping Station</td>
                    <td>August 29, 2023</td>
                    <td>August 30, 2023</td>
                    <td>10:00 PM to 10:00 AM</td>
                    <td colSpan={2}>Power Interruption</td>
                </tr>
                <tr>
                    <td>Quezon City</td>
                    <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
                    <td colSpan={3}>Lamesa Pumping Station</td>
                    <td>August 29, 2023</td>
                    <td>August 30, 2023</td>
                    <td>10:00 PM to 10:00 AM</td>
                    <td colSpan={2}>Power Interruption</td>
                </tr>
                <tr>
                    <td>Quezon City</td>
                    <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
                    <td colSpan={3}>Lamesa Pumping Station</td>
                    <td>August 29, 2023</td>
                    <td>August 30, 2023</td>
                    <td>10:00 PM to 10:00 AM</td>
                    <td colSpan={2}>Power Interruption</td>
                </tr>
                <tr>
                    <td>Quezon City</td>
                    <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
                    <td colSpan={3}>Lamesa Pumping Station</td>
                    <td>August 29, 2023</td>
                    <td>August 30, 2023</td>
                    <td>10:00 PM to 10:00 AM</td>
                    <td colSpan={2}>Power Interruption</td>
                </tr>
                <tr>
                    <td>Quezon City</td>
                    <td colSpan={2}>Brgys. Greater Lagro, Kaligayahan, Pasong Putik and San Agustin</td>
                    <td colSpan={3}>Lamesa Pumping Station</td>
                    <td>August 29, 2023</td>
                    <td>August 30, 2023</td>
                    <td>10:00 PM to 10:00 AM</td>
                    <td colSpan={2}>Power Interruption</td>
                </tr>




            </tbody>
        </Table>
    );
}

export default MyTable;