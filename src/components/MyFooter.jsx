import Navbar from 'react-bootstrap/Navbar';
import logo3 from '../static/img/logo3.png';
import { Link } from 'react-router-dom';

//component
import FootHeader from './FootHeader';

const MyFooter = () => {
    return (
        <footer className="text-white text-center text-lg-start" style={{ backgroundColor: '#174569' , color: 'white'}}>
            {/* Grid container */}
            <div className="container p-4">
                {/* Grid row */}
                <div className="row m-4">
                    {/* Grid column */}
                    <div className="col-lg-6 col-md-12 mb-5 mb-md-0">
                        <Navbar.Brand href="/">
                            <img
                                src={logo3}
                                width="150"
                                height="150"
                                className="d-inline-block align-top"
                                alt="BCWD 1974"
                            />
                        </Navbar.Brand>


                        <div className='container' >
                            <div className='row'>
                                <div className='col-lg-6' >
                                    <p className='footer' style={{color: 'white'}}>
                                        ©2013 Butuan City Water District, Inc.
                                    </p>

                                    <p className='footer' style={{color: 'white'}}>
                                        Jose Rosales Ave, Butuan City, Agusan Del Norte, 8600. Philippines
                                    </p>
                                    <p className='footer' style={{color: 'white'}}>
                                        Customer hotline: 1626
                                        Toll-free hotline: 1800-1000-WATER

                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* Grid column */}

                    {/* Grid column */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4">

                        <div className='container'>
                            <FootHeader header="QUICK LINKS" />
                            <div className='row py-2'>
                                <div className='col-lg-8' >
                                    
                                     <Link className='footer' to="serviceadvisories"><p style={{color: 'white'}}>Service Advisories</p></Link>
                                     <Link className='footer' to="."><p style={{color: 'white'}}>How to your Water Bill</p></Link>
                                     <Link className='footer' to="billspaymentpartners"><p style={{color: 'white'}}>Bills Payment Partners</p></Link>
                                     <Link className='footer' to="faqs"><p style={{color: 'white'}}>FAQs</p></Link>
                                     <Link className='footer' to="contactus"><p style={{color: 'white'}}>Contact Us</p></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-4">
                        <div className='container'>
                            <FootHeader header="ABOUT BCWD" />
                            <div className='row py-2'>
                                <div className='col-lg-8'>
                                    <p className='footer' style={{color: 'white'}}>
                                        Our Company
                                    </p>

                                    <p className='footer' style={{color: 'white'}}>
                                        Careers
                                    </p>
                                    <p className='footer' style={{color: 'white'}}>
                                        Advocacy
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="text-center text-white p-4" style={{ backgroundColor: "#5e5b5b" }}>
                <div className="container px-4 d-flex justify-content-start">
                    <div className='row mx-4'>
                        <div className='col-lg-12 px-4'>
                            <a className='text-white link-tag' style={{color: 'white'}} href="/terms">Terms and Conditions</a>
                            &nbsp;  &nbsp;  &nbsp;
                            <a className='text-white link-tag' style={{color: 'white'}} href="/privacy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

        </footer>


    );
}

export default MyFooter;