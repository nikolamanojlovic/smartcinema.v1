import {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const style = {
    form : {
        marginLeft: 20,
        marginRight: 20,
    },
    field : {
        display: 'block',
        width: '100%'
    },
    button : {
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: '#A5122C'
    }
};

class LogInForm extends Component {
    render() {
        return (
            <form style={style.form}>
                <TextField
                    id="login-email"
                    label="E-mail"
                    margin="normal"
                    style={style.field}
                    fullWidth
                />
                <TextField
                    id="login-password"
                    label="Password"
                    type="password"
                    margin="normal"
                    style={style.field}
                    fullWidth
                />
                <Button variant="contained" color="secondary" style={style.button}>
                    Log In
                </Button>
            </form>
        );
    }
}

export default LogInForm;