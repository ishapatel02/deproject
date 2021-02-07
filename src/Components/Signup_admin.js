import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Row, Label, FormFeedback, Button } from 'reactstrap';

class Signup_admin extends Component {
     constructor(props) {
        super(props);

       this.state = {
          email: '',
          policestation: '',
          password: '',
          
          touched: {
            email: false,
            policestation: '',
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

          //for password
         /* const passreg = "/^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$";
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
                        <h3>Sign-in as Admin</h3>
                    </div>
                    <div className="col-12 col-md-9">
                       { /*Email*/ }
                        <FormGroup row>
                             <Label htmlFor="email" md={4}>Email</Label>
                                <Col md={6}>
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
                                        value={this.state.policestation}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />          
                                </Col>
                          </FormGroup>

                        { /*password*/ }
                         <FormGroup row>
                             <Label htmlFor="password" md={4}>Password</Label>
                                <Col md={6}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                       /* valid={errors.password === ''}
                                        invalid={errors.password !== ''} */
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange} />
                                    { /*errors for password
                                    <FormFeedback>
                                           {errors.password}
                                    </FormFeedback>      */ }                       
                                </Col>
                       </FormGroup>
                       <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button size="md" type="submit" color="primary" active>
                                        Login
                                    </Button>
                                </Col>
                       </FormGroup>
                    </div>
                </div>                
            </div>
         );
     }
}

export default Signup_admin;
