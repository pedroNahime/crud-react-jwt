import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CrudActions} from '../../store/ducks/crud';
import TextField from "@material-ui/core/TextField";
import {Form, Container, Wrapper} from "./styles";
import Button from "@material-ui/core/Button";

class Profile extends Component {
    state = {
        nameInput: '',
        emailInput: '',
        phoneInput: '',
    };
    handleNameInputChange = e => this.setState({nameInput: e.target.value});
    handleEmailInputChange = e => this.setState({emailInput: e.target.value});
    handlePhoneInputChange = e => this.setState({phoneInput: e.target.value});

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props){
            this.setState({nameInput: this.props.crud.data.name , emailInput: this.props.crud.data.email, phoneInput: this.props.crud.data.phone})
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {nameInput, emailInput, phoneInput} = this.state;
        const {
            saveProfileRequest,
        } = this.props;

        const user = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            city: this.props.crud.data.city,
            country: this.props.crud.data.country
        };

        saveProfileRequest(user);
    };

    render() {
        const {nameInput, emailInput, phoneInput} = this.state;
        return (
            <Container>
                <Wrapper>
                    <Form onSubmit={this.handleFormSubmit} noValidate>
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
                            disabled
                            autoComplete="email"
                            value={emailInput}
                            onChange={this.handleEmailInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="phone"
                            name="phone"
                            autoComplete="phone"
                            value={phoneInput}
                            onChange={this.handlePhoneInputChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Save
                        </Button>
                    </Form>

                </Wrapper>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    crud: state.crud,
});
const mapDispatchToProps = dispatch => bindActionCreators({...CrudActions}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
