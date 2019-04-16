import React, {Component} from "react";
import {connect} from "react-redux";
import FilmList from "../components/filmList";
import SideBar from "../components/sideBar";
import {CreateTicketForCurrentUser} from "../functions/ticketFunctions";

class HomePage extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        if (this.props.ticket == null) {
            this.props.createTicketForCurrentUser(this.props.user);
        }
    }

    render() {
        return(
            <div>
                <SideBar/>
                <FilmList/>
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