import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Row, Label, FormFeedback, Button } from 'reactstrap';
import Google from './Google';

class Signup_User extends Component {
     constructor(props) {
        super(props);

       this.state = {
          email: '',
          password: '',
          touched: {
            email: false,
            password: false
          } 
       }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
     }

     /* For input in te submit form*/
     handleInputChange(event) {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;
         const name = target.name;

         /*if the any value is change than the particular state has been change*/
         this.setState({
             [name]: value
         });
     }

     handleSubmit(event) {
         console.log('Current State is: ' + JSON.stringify(this.state));
         alert('Current State is: ' + JSON.stringify(this.state));
         event.preventDefault();
     }

     handleBlur = (field) => (evt) => {
           this.setState({
               touched: { ...this.state.touched, [field]: true }
           });
     }

     validate(email, password) {
          const errors = {
                email: '',
                password: ''
          };

          //for email
          const emailreg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if(this.state.touched.email && !emailreg.test(email))
            errors.email = 'Invalid Email Address';

          /*for password
          const passreg = "/^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$";
          if(this.state.touched.password && !passreg.test(password))     
                 errors.password = "Invalid Password"; */

          return errors;
     }
 
     render() {
         const errors = this.validate(this.state.email, this.state.password);

         return(
            <div className="container">               
                <div className = "row row-content">
                    <div className="col-12">
                        <h3>Sign-in as User</h3>
                    </div>
                    <div className="col-12 col-md-9">
                       { /*Email*/ }
                        <FormGroup row>
                             <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    { /*errors for email*/ }
                                    <FormFeedback>
                                           {errors.email}
                                    </FormFeedback>              
                                </Col>
                        </FormGroup>
                        { /*password*/ }
                        <FormGroup row>
                             <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                     /*   valid={errors.password === ''}
                                        invalid={errors.password !== ''} */
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange} />
                                    { /*errors for password*/ }
                                  {/*  <FormFeedback>
                                           {errors.password}
                                    </FormFeedback>     */}                         
                                </Col>
                       </FormGroup>
                       <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button size="md" type="submit" color="primary" active>
                                        Login
                                    </Button>
                                </Col>
                       </FormGroup>
                       <FormGroup>
                             <p>Sign-in with Google</p>
                             <Google />
                       </FormGroup>
                    </div>
                </div>                
            </div>
         );
     }
}

export default Signup_User;
