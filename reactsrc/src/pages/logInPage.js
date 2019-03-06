import {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LogInForm from "../components/logInForm";

const style = {
    grid : {
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: "#A5122C"
    },
    paper : {
        paddingTop: 25,
        paddingBottom: 25,
        width: "30%",
    },
    txtLogIn: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 35,
        fontWeight: "bold"
    }
};

class LogInPage extends Component {
    render() {
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={style.grid}>
                <Paper style={style.paper}>
                    <Typography variant="h6" align="left" style={style.txtLogIn} gutterBottom>
                        Log in
                    </Typography>
                    <LogInForm/>
                </Paper>
            </Grid>
        );
    }
}

export default LogInPage;