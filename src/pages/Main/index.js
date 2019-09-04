import React, {Component, Fragment} from 'react';
import {Container} from './styles'
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Crud from "../../components/Crud";
import {bindActionCreators} from 'redux';
import {Creators as UsersActions} from '../../store/ducks/user';


class Main extends Component {
    logOutHandler = () => {
        const {
            logOutUserRequest,
        } = this.props;
        logOutUserRequest();
    };
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        return(
            <Fragment>
                <Container>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                {user.name}
                            </Typography>
                            <Button onClick={() => {this.logOutHandler()}} color="inherit">Log out</Button>
                        </Toolbar>
                    </AppBar>
                </Container>
                <Crud/>
            </Fragment>

        )
    }
};

const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = dispatch => bindActionCreators({...UsersActions}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);