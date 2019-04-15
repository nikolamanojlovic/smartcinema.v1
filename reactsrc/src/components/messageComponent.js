import React, {Component} from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";

const style = {
    error: {
        color: '#A5122C',
    }
};

class MessageComponent extends Component {
     _returnMessage() {
         switch (Object.keys(this.props.message)[0]) {
             case 'error':
                 return <Typography variant="body1" component="span" style={style.error}>
                            {Object.values(this.props.message)[0]}
                        </Typography>;
             default:
                 return <Typography variant="body1" component="span"> {Object.values(this.props.message)[0]} </Typography>;
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