import React, {Component} from "react";
import {connect} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {SnackbarContent} from "@material-ui/core";
import {ClearMessage} from "../functions/messageFunctions";

class MessageComponent extends Component {
     _clear() {
        console.log("fwefkowekfpkwepf");
        this.props.clearMessage();
    };

    render() {
        return (
            this.props.message ?
                (<Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    autoHideDuration={6000}
                    onClose={() => this._clear()}
                >
                    <SnackbarContent
                        onClose={() => this._clear()}
                        variant={this.props.message.key}
                        message={this.props.message.value}
                    />
                </Snackbar>)
                : null
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(ClearMessage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);