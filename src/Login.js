import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.textInput = React.createRef();
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount = () => {
    console.log(this.textInput);
    this.textInput.current.focus();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log("ema", event.target.email)
  }


  submitForm(e) {
    // const{email,password} = this.state;
    // alert(`Email : -${email} and password`)
    //  e.preventDefault()    // By using Axios request
    //   register(this.state) 
    //   .then((response)=>{this.props.history.push('/productlist')})
    //   .catch((err)=>alert('error'))


    e.preventDefault()   //by using Fetch request
    fetch(`https://reqres.in/api/register`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => { if (response.status >= 200 && response.status < 300) {return response.json()} else{ throw 'error'}})
          .then(response =>  this.props.history.push('/productlist'))
          .catch(error => alert("error"));
  }

  render() {
    return (
      <Container>

        <h3>Login</h3>

        <form onSubmit={this.submitForm.bind(this)}  >

          <Row> <Col md={{ span: 4, offset: 4 }}>

            <input type="text" name="email" placeholder="Email" ref={this.textInput} value={this.state.email} className="form-control"
              onChange={this.handleChange} required /> </Col></Row>
          <Row><Col md={{ span: 4, offset: 4 }}>
            <input type="password" name="password" placeholder="Password" value={this.state.password} className="form-control"
              onChange={this.handleChange} required /></Col></Row>
          <Row><Col md={{ span: 4, offset: 4 }}>
            <Button type="submit" className="form-control" >Submit</Button></Col></Row>

        </form>

      </Container>
    )
  }
}

export default withRouter(Login);