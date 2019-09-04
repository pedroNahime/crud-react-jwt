import React, {Component} from 'react';
import TableUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {bindActionCreators} from "redux";
import {Creators as CrudActions} from "../../store/ducks/crud";
import {connect} from "react-redux";
import {Container, Wrapper} from "./styles";

class Table extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Paper>
                        <TableUI size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(this.props.crud.cities) ? this.props.crud.cities[0].map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                        </TableRow>
                                    )) :
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="right"> </TableCell>
                                    </TableRow> }
                            </TableBody>
                        </TableUI>
                    </Paper>
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
)(Table);
