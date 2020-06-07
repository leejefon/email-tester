import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, FormGroup, FormText, Input, Button, Spinner, Alert } from 'reactstrap';
import Footer from '../components/Footer';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transport: '',
      to: '',
      template: '',
      alertType: '',
      alertMessage: '',
      showLoading: false
    };

    this.helpText = {
      sendgrid: '39.97.115.156, From info@mail.gotin.online via Sendgrid',
      sendgridProd: 'GSMA Thrive, From info@mail.gotin.online',
      aliCloud: 'From help@gotin.live',
      mailgun: 'From info@mail.gotin.online via Mailgun',
      gmail: 'From leejefon@gmail.com',
      qiye163: 'From jeff_lee@gotin.online'
    };
  }

  getSender() {

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  send() {
    if (!this.state.transport || !this.state.to) {
      return;
    }

    this.setState({
      alertMessage: '',
      showLoading: true
    });

    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        this.setState({
          alertType: 'success',
          alertMessage: 'Email Sent!',
          showLoading: false
        });
      } else {
        this.setState({
          alertType: 'danger',
          alertMessage: 'Error sending email',
          showLoading: false
        });
      }
    });
  }

  render() {
    const loading = (
      <>
        <Container className="mt-3 text-center">
          <Spinner />
        </Container>
      </>
    );

    return (
      <>
        <Container className="text-center">
          <Row>
            <Col md={{ size: 4, offset: 4 }}>
              <h2 className="mt-5 mb-5">Youda Email Test</h2>

              <FormGroup>
                <Input type="select" name="transport" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select Email Provider</option>
                  <option value="sendgrid">Sendgrid</option>
                  <option value="sendgridProd">Sendgrid Prod</option>
                  <option value="aliCloud">Alibaba Direct Mail</option>
                  <option value="mailgun">Mailgun</option>
                  <option value="gmail">Gmail</option>
                </Input>
                <FormText>{this.helpText[this.state.transport]}</FormText>
              </FormGroup>

              <FormGroup>
                <Input type="select" name="template" onChange={(e) => this.handleChange(e)}>
                  <option value="">Select Email Template</option>
                  <option value="youdaResetPass">Youda Template (reset password)</option>
                  <option value="youdaVerifyEmail">Youda Template (verify email)</option>
                  <option value="simple">Simple</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  name="to"
                  onChange={(e) => this.handleChange(e)}
                  placeholder="To Email"
                />
              </FormGroup>

              <Button color="primary" onClick={() => this.send()}>Send!</Button>

              {this.state.showLoading ? loading : null}

              <Alert
                className="mt-3"
                color={this.state.alertType}
                isOpen={!!this.state.alertMessage}
                toggle={() => { this.setState({ alertMessage: '' }); }}
              >
                {this.state.alertMessage}
              </Alert>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

export default withRouter(connect(mapStateToProps)(Dashboard));
