import React, {Component} from 'react';
import {LogInForm} from "../components";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/es/Paper/Paper";

class AuthenticationPage extends Component {
    render() {
        return (
            <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={6}>
                    <Typography align="center" className="welcome-to" variant="title"
                                style={{ color: '#FFFFFF', fontWeight: "bold", lineHeight : "0.5em"}} gutterBottom>
                        Welcome to
                    </Typography>
                    <div style={{ textAlign : "center"}}>
                        <img src="../../public/assets/img/logo-beli.svg" alt="Smart Cinema Logo" style={{marginTop : "20px", marginBottom : "40px", height : "43%", width : "43%"}}/>
                    </div>
                    <Paper style={{ margin: "auto", width : "50%", padding: "5px 15px",  backgroundColor : "#FFFFFF"}}>
                        <LogInForm/>
                        <Typography align="center" className="no-account" variant="body2" gutterBottom>
                            Don't have an account yet? <a className="link-sign-up" href="#">Sign up</a>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default AuthenticationPage;