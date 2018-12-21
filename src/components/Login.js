import React, { Component } from 'react'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Login