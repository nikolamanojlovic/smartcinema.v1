import React, {Component} from "react";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import {ListItem, ListItemText} from "@material-ui/core";

const styles = {
    listItemText: {}
};

class RepertoireList extends Component {
    constructor(props) {
        super(props);
    };

    _generateCreatedRepertioareList(dates, projections, allFilms) {
        let list = [];

        dates.forEach(function (date) {
            list.push(<ListSubheader key={date}>{date}</ListSubheader>);
            projections.forEach(function (projection) {
                if (projection.date === date) {
                    list.push(
                        <ListItem key={projection.date + projection.startTime + projection.endTime}>
                            <ListItemText><b>TIME:</b> {projection.startTime + "-" + projection.endTime}</ListItemText>
                            <ListItemText><b>HALL:</b> {projection.hallData.name}</ListItemText>
                            <ListItemText><b>FILM:</b> {allFilms.find(f => {
                                return f.id = projection.filmId;
                            }).title}</ListItemText>
                        </ListItem>
                    );
                } else {
                    return;
                }
            })
        });

        return list;
    }

    render() {
        return (
            <div>
                {
                    this.props.createdProjections.length !== 0 ?
                        <div>
                            <List subheader={<li/>}>
                                <li>
                                    <ul>
                                        {
                                            this._generateCreatedRepertioareList(this.props.dates,
                                                this.props.createdProjections, this.props.allFilms)
                                        }
                                    </ul>
                                </li>
                            </List>
                        </div>
                        : <span/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dates: Array.from(new Set(state.ProjectionReducer.createdProjections.map(function (projection) {
            return projection.date;
        }))),
        createdProjections: state.ProjectionReducer.createdProjections.sort(function (a, b) {
            return (new Date(b)).setHours(0, 0, 0, 0) - (new Date(a)).setHours(0, 0, 0, 0);
        }),
        allFilms: state.FilmReducer.films,
    };
};

export default connect(mapStateToProps)(RepertoireList);