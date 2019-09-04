import React, {Component} from 'react';
import {Wrapper, Form, Buttons} from './styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as UsersActions} from '../../store/ducks/user';

class Login extends Component {
    state = {
        emailInput: '',
        passwordInput: '',
    };

    handleEmailInputChange = e => this.setState({emailInput: e.target.value});
    handlePasswordInputChange = e => this.setState({passwordInput: e.target.value});

    handleFormSubmit = (e) => {
        e.preventDefault();

        const {emailInput, passwordInput} = this.state;

        if (!emailInput || !passwordInput) return;

        const {
            loginUserRequest,
        } = this.props;

        const user = {
            email: emailInput,
            password: passwordInput
        };

        loginUserRequest(user);
        this.setState({ emailInput: '', passwordInput: ''});
    };

    render() {
        const {emailInput, passwordInput} = this.state;
        return (
            <Wrapper>
                <Form onSubmit={this.handleFormSubmit}  noValidate>
                    <h1>Login</h1>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={emailInput}
                        onChange={this.handleEmailInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={passwordInput}
                        onChange={this.handlePasswordInputChange}
                    />
                    <Buttons>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Link to="/register">
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Register
                        </Button>
                        </Link>
                    </Buttons>
                </Form>
            </Wrapper>
        );
    }
}



const mapDispatchToProps = dispatch => bindActionCreators({...UsersActions}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(Login);
