import React, {Component} from "react";
import {connect} from "react-redux";
import {GetFilmById, GetProjectionsForFilmById} from "../functions/filmFunctions";
import {GetProjectionForFilmByIdActionCreator} from "../actionCreators/filmActionCreators";
import FilmPoster from "./filmList";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {Paper} from "@material-ui/core";

const styles = {

};

class ProjectionsList extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log(this.props.film);
        this.props.getProjectionsForFilmById(this.props.film)
    }

    render() {
        return (
            this.props.projections ?
                <div style={{maxHeight: 200, maxWidth: 700, overflow: 'auto'}}>
                    <List>
                        {
                            this.props.projections.map((e, i) => (
                                <ListItem button>
                                    <ListItemText primary={(new Date(e.date)).toDateString()}
                                                  secondary={
                                                      e.startTime.hour + ":" + e.startTime.minute + "-" +
                                                      e.endTime.hour + ":" + e.endTime.minute
                                                  }/>
                                </ListItem>
                            ))
                        }
                    </List>
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