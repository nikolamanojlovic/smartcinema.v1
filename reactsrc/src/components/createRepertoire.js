import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import OrderBar from "./orderBar";
import Grid from "@material-ui/core/Grid";
import RepertoireList from "./repertoireList";
import CreateRepertoireForm from "./createRepertoireForm";

const styles = {
    createRepertoire: {
        paddingTop: 60,
        overflowY: "auto",
        overFlowX: "hidden"
    },
    heading: {
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10
    },
    currentList: {
        display: "inline-block",
        marginLeft: 10,
        width: "25%",
        float: "left"
    },
    createMenu: {
        display: "inline-block",
        marginRight: 10,
        width: "70%",
        float: "right"
    }
};

class CreateRepertoire extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
                <div style={styles.createRepertoire}>
                    <Typography variant="h3" style={styles.heading} gutterBottom>
                        Create Repertoire
                    </Typography>
                    <div className="create">
                        <div className="currentList" style={styles.currentList}>
                           <RepertoireList/>
                        </div>
                        <div className="createMenu" style={styles.createMenu}>
                            <CreateRepertoireForm/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CreateRepertoire;