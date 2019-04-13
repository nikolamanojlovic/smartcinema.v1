import React, {Component} from "react";
import {connect} from "react-redux";
import {GetFilmById, GetProjectionsForFilmById} from "../functions/filmFunctions";
import {GetProjectionForFilmByIdActionCreator} from "../actionCreators/filmActionCreators";
import FilmPoster from "./filmList";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

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
                <List>
                    <div className="projections">
                        {
                            this.props.projections.map((e, i) => (
                                <ListItem primary={e.date + ": " + e.startTime + "-" + e.endTime} button>
                                </ListItem>
                            ))
                        }
                    </div>
                </List> : <div/>
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