import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {GetFilmById} from "../functions/filmFunctions";
import CardMedia from "@material-ui/core/CardMedia";
import {Divider, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ProjectionsList from "./projectionsList";
import MessageComponent from "./messageComponent";
import CartList from "./cartList";

const styles = {
    grid: {
        marginLeft: "15%",
        width: "85%"
    }
};

class CartDetails extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                spacing={0}
                style={styles.grid}
            >
                <CartList/>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);