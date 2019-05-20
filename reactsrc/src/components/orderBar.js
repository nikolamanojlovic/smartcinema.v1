import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {};

class OrderBar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography variant="body1" gutterBottom>
                        <b>ID:</b> {this.props.order.id} <b>Date:</b> {(new Date(this.props.order.timestamp)).toDateString().replace(/^\S+\s/, '')}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="entries-table">

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default OrderBar;