import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Wrapper} from './styles'
import TableCities from "../TableCities";
import TableUsers from "../TableUsers";
import Profile from "../Profile";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CrudActions} from '../../store/ducks/crud';

class Crud extends Component {
    state = {
        value: 0,
        type: 'cities'
    };
    componentDidMount() {
        this.handleChange();
    }

    handleChange = (event, newValue=0) => {
        const {
            crudGetRequest,
        } = this.props;
        let stringValue;
        if(newValue === 0){
            stringValue = 'profile';
            crudGetRequest(stringValue)
        }else if(newValue === 1){
            stringValue = 'cities';
            crudGetRequest(stringValue, '/all')
        }else if(newValue === 2){
            stringValue = 'users';
            crudGetRequest(stringValue)
        }
        this.setState({value: newValue, type: stringValue})
    };
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <Wrapper>
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Profile"/>
                        {
                            user.role !== 'user' ? <Tab label="Cities"/> : ''
                        }
                        {
                            user.role !== 'user' ? <Tab label="Users"/> : ''
                        }
                    </Tabs>
                </Paper>
                <div>
                    {
                        this.state.value === 0 ? <Profile/> : ''
                    }
                    {
                        this.state.value === 1 ? <TableCities type={this.state.type}/> : ''
                    }
                    {
                        this.state.value === 2 ? <TableUsers type={this.state.type}/> : ''
                    }

                </div>
            </Wrapper>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({...CrudActions}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(Crud);
