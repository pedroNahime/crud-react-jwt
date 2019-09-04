import React, {Component} from 'react';
import {Wrapper, Form, Buttons} from './styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as UsersActions} from '../../store/ducks/user';

class Register extends Component {
    state = {
        nameInput: '',
        emailInput: '',
        passwordInput: '',
    };

    handleNameInputChange = e => this.setState({nameInput: e.target.value});
    handleEmailInputChange = e => this.setState({emailInput: e.target.value});
    handlePasswordInputChange = e => this.setState({passwordInput: e.target.value});

    handleFormSubmit = (e) => {
        e.preventDefault();

        const {nameInput, emailInput, passwordInput} = this.state;

        if (!nameInput || !emailInput || !passwordInput) return;

        const {
            addUserRequest,
        } = this.props;

        const user = {
            name: nameInput,
            email: emailInput,
            password: passwordInput
        };

        addUserRequest(user);
        this.setState({nameInput: '', emailInput: '', passwordInput: ''});
    };

    render() {
        const {nameInput, emailInput, passwordInput} = this.state;
        return (
            <Wrapper>
                <Form onSubmit={this.handleFormSubmit} noValidate>
                    <h1>Register</h1>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={nameInput}
                        onChange={this.handleNameInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
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
                            Register
                        </Button>
                        <Link to="/login">
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                            >
                                Sign In
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
)(Register);
