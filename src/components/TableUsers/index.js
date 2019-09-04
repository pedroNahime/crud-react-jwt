import React, {Component, Fragment} from 'react';
import TableUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from 'react-modal';
import EditIcon from '@material-ui/icons/Edit';
import {bindActionCreators} from "redux";
import {Creators as CrudActions} from "../../store/ducks/crud";
import {connect} from "react-redux";
import {Container, Wrapper} from "./styles";
import TextField from "@material-ui/core/TextField";
import './styles.css';
import {Buttons} from "../Register/styles";
import Button from "@material-ui/core/Button";

class Table extends Component {
    state = {
        modal: false,
        user: ''
    };

    handleModal = () => {
        this.setState({
            modal: !this.state.modal,
            user: '',
            name: ''
        })
    };
    editUser = (user) => {
        this.setState({
            modal: !this.state.modal,
            user: user,
            name: user.name
        });
    };

    handleNameInputChange = e => this.setState({name: e.target.value});
    handleFormSubmit = (e) => {
        e.preventDefault();

        const {user, name} = this.state;

        const {
            saveUserRequest,
        } = this.props;
        user.name = name;

        saveUserRequest(user, user._id);
        this.setState({nameInput: '', emailInput: '', passwordInput: ''});
        this.handleModal()
    };

    render() {
        return (
            <Fragment>
                <Container>
                    <Wrapper>
                        <Paper>
                            <TableUI size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> </TableCell>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.isArray(this.props.crud.users) ? this.props.crud.users[0].docs.map(row => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    <EditIcon onClick={() => {
                                                        this.editUser(row)
                                                    }}/>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                            </TableRow>
                                        )) :
                                        <TableRow>
                                            <TableCell component="th" scope="row">

                                            </TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>}
                                </TableBody>
                            </TableUI>
                        </Paper>
                    </Wrapper>
                </Container>
                <Modal
                    isOpen={this.state.modal}
                    onRequestClose={this.handleModal}
                    contentLabel="Editar Usuario"
                    className="modal-container"
                    overlayClassName="modal-overlay"
                    ariaHideApp={false}
                >
                    <h2>Editar Usuario</h2>
                    <form onSubmit={this.handleFormSubmit} noValidate>
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
                            value={this.state.name}
                            onChange={this.handleNameInputChange}
                        />
                        <Buttons>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                save
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={()=>{this.handleModal()}}
                            >
                                Cancel
                            </Button>
                        </Buttons>
                    </form>
                </Modal>
            </Fragment>
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
)(Table);
