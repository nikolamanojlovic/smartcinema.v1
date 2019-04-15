import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../components/sideBar";
import CartDetails from "../components/cartDetails";

class CartPage extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div>
                <SideBar/>
                <CartDetails/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
    };
};

export default connect(mapStateToProps)(CartPage);