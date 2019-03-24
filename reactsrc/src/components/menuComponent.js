import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";

const style = {
    bar: {
        backgroundColor: '#A5122C',
    },
    elements: {
        marginTop: 10,
        marginBottom: 10
    },
    logo: {
        display: 'inline',
        width: '10%',
        height: '10%',
        marginLeft: 15
    },
    search: {
        display: 'inline',
        float: 'right',
        width: '20%',
        verticalAlign: 'middle'
    },
    icon: {
        display: 'inline',
        float: 'right',
        width: '10%',
        height: '100%',
        marginRight: 25,
        marginLeft: 10
    },
    input: {
        margin: 0,
        float: 'right',
        color: '#FFF',
        height: '100%',
        backgroundColor: 'rgba(165, 18, 44, 0.5)'
    }
};

class MenuComponent extends Component {
    render() {
        return (
            <AppBar position="static" style={style.bar}>
                <div className="search-bar-elements" style={style.elements}>
                    <img src={require('../images/logo.svg')} alt="SmartCinema Logo" style={style.logo}/>
                    <div className="search-bar" style={style.search}>
                        <div className="search-icon" style={style.icon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            style={style.input}
                        />
                    </div>
                </div>
            </AppBar>
        );
    }
}

export default MenuComponent;