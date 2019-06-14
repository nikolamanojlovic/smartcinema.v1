import React, {Component} from "react";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import {ListItem, ListItemText, Typography} from "@material-ui/core";

const styles = {
    listBox: {
        overflowY: "auto",
        overflowX: "hidden",
        height: 820
    },
    listItemDate: {
        backgroundColor: '#A5122C'
    },
    listItemText: {
        textAlign: "center",
    },
    text: {
        fontWeight: "bold",
        color: "#FFFFFF"
    }
};

class RepertoireList extends Component {
    constructor(props) {
        super(props);
    };

    _generateCreatedRepertoireList(dates, projections, allFilms) {
        let list = [];

        dates.forEach(function (date) {
            list.push(<ListItem key={date} style={styles.listItemDate}>
                <ListItemText style={styles.listItemText}>
                    <Typography style={styles.text}>{date}</Typography>
                </ListItemText>
            </ListItem>);
            projections.forEach(function (projection) {
                if (projection.date === date) {
                    list.push(
                        <ListItem key={projection.date + projection.startTime + projection.endTime + Math.random()}>
                            <ListItemText>
                                <div><b>TIME:</b> {projection.startTime + "-" + projection.endTime}</div>
                                <div><b>HALL:</b> {projection.hallData.name}</div>
                                <div><b>FILM:</b> {allFilms.find(f => {
                                    return f.id === projection.filmId
                                }).title}</div>
                            </ListItemText>
                        </ListItem>
                    );
                }
            })
        });

        return list;
    }

    render() {
        return (
            this.props.createdProjections.length !== 0 ?
                <div style={styles.listBox}>
                    <List subheader={<li/>} style={styles.list}>
                        {
                            this._generateCreatedRepertoireList(this.props.dates,
                                this.props.createdProjections, this.props.allFilms)
                        }
                    </List>
                </div>
                : <span/>
        );
    }
}

const mapStateToProps = state => {
    return {
        dates: Array.from(new Set(state.ProjectionReducer.createdProjections.map(function (projection) {
            return projection.date;
        }))).sort(function (a, b) {
            return (new Date(a)).setHours(0, 0, 0, 0) - (new Date(b)).setHours(0, 0, 0, 0);
        }),
        createdProjections: state.ProjectionReducer.createdProjections,
        allFilms: state.FilmReducer.films,
    };
};

export default connect(mapStateToProps)(RepertoireList);