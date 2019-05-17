import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../components/sideBar";
import OrderDetails from "../components/orderDetails";

class OrderPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <SideBar/>
                <OrderDetails userId={this.props.user.email}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
    };
};

export default connect(mapStateToProps)(OrderPage);