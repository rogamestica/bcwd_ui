
const Accountnumber = () => {
    const accountnumber = "1234345678";
    const name = "John Doe";

    return (
      <div >
        <h2 style={{fontSize: "30px", fontFamily: "Roboto", color: 'black'}}> Account Information</h2>
        <p style={{fontSize: "20px", fontFamily: "Roboto-Light", color: 'black'}}>Account Number: {accountnumber}</p>
        <p style={{fontSize: "20px", fontFamily: "Roboto-Light", color: 'black'}}>Account Name: {name}</p>
      </div>
    )
  }

export default Accountnumber;