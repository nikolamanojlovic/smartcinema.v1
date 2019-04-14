import React, {Component} from "react";
import {connect} from "react-redux";
import {GetProjectionsForFilmById} from "../functions/filmFunctions";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Schedule} from '@material-ui/icons';
import siteHistory from "../helper/history";

const styles = {
    box: {
        maxHeight: 200,
        maxWidth: 300,
        overflow: 'auto'
    },
    icon: {
        color: "#A5122C"
    }
};

class ProjectionsList extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    };

    _handleClick(film, projection) {
        console.log(film + "   " + projection);
    }

    componentDidMount() {
        console.log(this.props.film);
        this.props.getProjectionsForFilmById(this.props.film)
    }

    render() {
        return (
            this.props.projections ?
                <div className="projectionList" style={styles.box}>
                    <List>
                        {
                            this.props.projections.map((e, i) => (
                                <ListItem key={i}  onClick={() => this._handleClick(this.props.film, i)} button>
                                    <ListItemIcon>
                                        <Schedule style={styles.icon}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={(new Date(e.date)).toDateString().replace(/^\S+\s/, '') + ": " + e.hallData.name}
                                        secondary={
                                            e.startTime.hour + ":" + e.startTime.minute + "-" +
                                            e.endTime.hour + ":" + e.endTime.minute
                                        }/>
                                </ListItem>
                            ))
                        }
                    </List>
                    <div className="hallsAndSeets">
                    </div>
                </div> : <div/>
        );
    }
}

const mapStateToProps = state => {
    return {
        projections: state.FilmReducer.projections,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProjectionsForFilmById: (id) => dispatch(GetProjectionsForFilmById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsList);