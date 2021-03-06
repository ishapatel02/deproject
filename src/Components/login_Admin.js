import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Row, Label, FormFeedback, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Login_Admin extends Component {
      render() {
            return(
                 <div className="container">  
                  { /*For Admin Login*/ }             
                  <div className = "row row-content">
                     <div className="col-12">
                        <h3>Login as Admin</h3>
                     </div>
                     <div className="col-12 col-md-9">
                       { /*Email*/ }
                        <FormGroup row>
                             <Label htmlFor="email" md={4}>Email</Label>
                                <Col md={6}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email" />                                          
                                </Col>
                        </FormGroup>

                        { /*Select Your city*/}
                             { /*City/Town/Village*/ }
                        <FormGroup row>
                                  <Label htmlFor="city" md={4}>Select Your City/Town/Village</Label>
                                  <Col md={6}>
                                  <Input type="select" name="city" id="city">
                                      <option value="AHMEDABAD">AHMEDABAD</option>
                                      <option value="SURAT">SURAT</option>
                                      <option value="RAJKOT">RAJKOT</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="GANDHINAGR">GANDHINAGR</option>
                                      <option value="BHAVNAGAR">BHAVNAGAR</option>
                                      <option value="JAMNAGAR">JAMNAGAR</option>
                                      <option value="JUNAGADH">JUNAGADH</option>
                                      <option value="ANAND">ANAND</option>
                                      <option value="BHARUCH">BHARUCH</option>
                                      <option value="PROBANDAR">PORBANDAR</option>
                                      <option value="ANKLESHWAR">ANKLESHWAR</option>
                                      <option value="VAPI">VAPI</option>
                                      <option value="DHOLERA">DHOLERA</option>
                                      <option value="PATAN">PATAN</option>
                                      <option value="NAVSARI">NAVSARI</option>
                                      <option value="MEHSANA">MEHSANA</option>
                                      <option value="GANDHIDHAM">GANDHIDHAM</option>
                                      <option value="NADIAD">NADIAD</option>
                                      <option value="VERAVAL">VERAVAL</option>
                                      <option value="DAHOD">DAHOD</option>
                                      <option value="MORBI">MORBI</option>
                                      <option value="PALANPUR">PALANPUR</option>
                                      <option value="GODHRA">GODHRA</option>
                                      <option value="VALSAD">VALSAD</option>
                                      <option value="VADODARA">VADODARA</option>
                                      <option value="BOTAD">BOTAD</option>
                                      <option value="GONDAL">GONDAL</option>
                                      <option value="PALITANA">PALITANA</option>
                                      <option value="KHAMBHAI">KHAMBHAT</option>
                                      <option value="KALOL">KALOL</option>
                                      <option value="KHEDA">KHEDA</option>
                                      <option value="DEESA">DEESA</option>
                                      <option value="ADALAJ">ADALAJ</option>
                                      <option value="DWARKA">DWARKA</option> 
                                      <option value="SIDDHPUR">SIDDHPUR</option>
                                      <option value="WANKANER">WANKANER</option>
                                      <option value="SANAND">SANAND</option>
                                      <option value="KANDALA">KANDLA</option>
                                      <option value="VISNAGAR">VISNAGAR</option>
                                      <option value="MODASA">MODASA</option>
                                      <option value="JETPUR">JETPUR</option>
                                      <option value="KESHOD">KESHOD</option>
                                      <option value="SIHOR">SIHOR</option>
                                      <option value="HALOL">HALOL</option>
                                      <option value="MANDAVI">MANDAVI</option>
                                      <option value="CHAMPANER">CHAMPANER</option>
                                      <option value="BARDOLI">BARDOLI</option>
                                      <option value="AMERELI">AMERELI</option>
                                      <option value="IDAR">IDAR</option>
                                  </Input>
                                  </Col>
                         </FormGroup>

                        { /*PoliceStation*/ }
                         <FormGroup row>
                             <Label htmlFor="policestation" md={4}>Police Station</Label>
                                <Col md={6}>
                                    <Input type="policestation" id="policestation" name="email"
                                        placeholder="Police Station" 
                                        />          
                                </Col>
                          </FormGroup>

                        { /*password*/ }
                         <FormGroup row>
                             <Label htmlFor="password" md={4}>Password</Label>
                                <Col md={6}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="Password"                                     
                                    />
                                </Col>
                       </FormGroup>

                        {/*Login Button*/}
                       <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button size="md" type="submit" color="primary" active>
                                        Login.
                                    </Button>
                                </Col>
                       </FormGroup>
                       <FormGroup>
                           <div class="container">
                               <h6>Not yet Registered?<Link to="/Signup_admin">Sign Up</Link></h6>
                           </div>
                           
                       </FormGroup>
                    </div>
                </div>  
       
            </div>
            );
      }
}

export default Login_Admin;
