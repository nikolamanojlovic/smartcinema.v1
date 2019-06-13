import React, {Component} from "react";
import {connect} from "react-redux";
import FilmList from "../components/filmList";
import SideBar from "../components/sideBar";
import {CreateTicketForCurrentUser} from "../functions/ticketFunctions";
import Button from "@material-ui/core/Button";
import {NavigateBefore, NavigateNext} from "@material-ui/icons";

const styles = {
    pagination: {
        marginLeft: "15%",
        marginBottom: 20,
        textAlign: "center"
    },
    buttonStyle: {
        color: "#FFFFFF",
        backgroundColor: "#A5122C",
        width: 20,
        margin: 5
    },
    buttonCurrent: {
        width: 20,
        color: "#A5122C",
        backgroundColor: "#FFFFFF"
    }
};

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };
    };

    componentDidMount() {
        if (Object.entries(this.props.ticket.user).length === 0) {
            this.props.createTicketForCurrentUser(this.props.user);
        }
    }

    _handlePageChangeNext(page, event) {
        this.setState({currentPage: page + 1})
    }

    _handlePageChangePrevious(page, event) {
        this.setState({currentPage: page - 1})
    }

    render() {
        return (
            <div>
                <SideBar/>
                <FilmList pagination={this.state.currentPage}/>
                <div style={styles.pagination}>
                    <Button variant="contained" className="previous" style={styles.buttonStyle}
                            disabled={this.state.currentPage === 1}
                            onClick={(event) => this._handlePageChangePrevious(this.state.currentPage, event)}>
                        <NavigateBefore/>
                    </Button>
                    <Button variant="contained" className="current" style={styles.buttonCurrent} disabled={true}>
                        {this.state.currentPage}
                    </Button>
                    <Button variant="contained" className="next" style={styles.buttonStyle}
                            onClick={(event) => this._handlePageChangeNext(this.state.currentPage, event)}>
                        <NavigateNext/>
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
        ticket: state.TicketReducer.ticket
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTicketForCurrentUser: (user) => dispatch(CreateTicketForCurrentUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);