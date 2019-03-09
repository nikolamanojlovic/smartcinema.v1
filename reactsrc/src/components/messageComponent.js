import React, {Component} from "react";
import {connect} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {SnackbarContent} from "@material-ui/core";
import {ClearMessage} from "../functions/messageFunctions";

const style = {
    error: {
        color: '#A5122C',
        marginLeft: 20,
        marginRight: 20
    }
};

class MessageComponent extends Component {
     _returnMessage() {
         switch (Object.keys(this.props.message)[0]) {
             case 'error':
                 return <div style={style.error}>{Object.values(this.props.message)[0]}</div>;
             default:
                 return <div>{Object.values(this.props.message)[0]}</div>;
         }
     };

    render() {
        return (
            Object.keys(this.props.message)[0] ? this._returnMessage() : <span/>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.MessageReducer.message
    };
};

export default connect(mapStateToProps)(MessageComponent);