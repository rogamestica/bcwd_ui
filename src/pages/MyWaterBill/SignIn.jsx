// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";

// import Waterbill from './Waterbill';

// const SignIn = () => {
//   const [billAmount, setBillAmount] = useState(null);
//   const [signedIn, setSignedIn] = useState(false);

//   const handleSignIn = () => {
//     // Simulate sign-in logic
//     setSignedIn(true);

//     // Simulate fetching the water bill from the backend
//     const fetchedBillAmount = 100; // Replace with your logic to fetch the actual water bill amount
//     setBillAmount(fetchedBillAmount);
//   };

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform sign-in logic with email and password
//     // ...
//   };

//   return (
//     <Container>
//         <div className="popup">
//       <h1>Sign In</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Sign In
//         </Button>
//       </Form>
//       <div>
//       {!signedIn ? (
//         <div>
//           <h2>Sign In</h2>
//           <label>
//             Username:
//             <input type="text" />
//           </label>
//           <label>
//             Password:
//             <input type="password" />
//           </label>
//           <button onClick={handleSignIn}>Sign In</button>
//         </div>
//       ) : (
//         <Waterbill billAmount={billAmount} />
//       )}
//     </div>
//       </div>
//     </Container>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserProf from './UserProf';

const SignIn = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [billAmount, setBillAmount] = useState(null);

  const handleSignIn = () => {
    // Perform sign-in logic with email and password
    // ...

    // Simulate fetching the water bill from the backend
    const fetchedBillAmount = 100; // Replace with your logic to fetch the actual water bill amount
    setBillAmount(fetchedBillAmount);

    // Update the state and set signedIn to true
    setSignedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-in logic with email and password
    // ...
    handleSignIn(); // Call handleSignIn when the form is submitted
  };

  return (
    <Container>
      <h1>Sign In</h1>
      {!signedIn ? (
        <div className="popup">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </div>
      ) : (
        <div className="fullscreen">
          <UserProf billAmount={billAmount} />
        </div>
      )}
    </Container>
  );
};

export default SignIn;

