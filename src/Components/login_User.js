import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Row, Label, FormFeedback, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Google from './Google';

class Login_User extends Component {
       render() {
           return(
               <div className="container">
                   <div className = "row row-content">
                       <div className="col-12">
                         <h3>Login as User</h3>
                       </div>
 
                       <div className="col-12 col-md-9">
                        { /*Email*/ }
                         <FormGroup row>
                             <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email" />                                          
                                </Col>
                         </FormGroup>

                         { /*password*/ }
                         <FormGroup row>
                             <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
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

                       {/*Google Login Button*/}
                       <FormGroup>
                          <Col md={10}>
                               <strong>Login with Google</strong>
                               <Google />
                          </Col>
                      </FormGroup>
 
                       {/*If Not Registered*/}
                       <FormGroup>
                           <div className="container">
                               <h6>Not yet Registered?<Link to="/signup_user">Sign Up</Link></h6>
                           </div>                           
                      </FormGroup>

                    </div>
                   </div>
               </div>
           );
       }
}

export default Login_User;
