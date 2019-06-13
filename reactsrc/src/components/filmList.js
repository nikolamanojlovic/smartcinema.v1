import React, {Component} from "react";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";
import CircularProgress from "./filmDetails";
import Button from "@material-ui/core/Button";
import {NavigateBefore, NavigateNext} from "@material-ui/icons";

const styles = {
    films: {
        float: "none",
        marginLeft: "15%"
    },
    grid: {
        marginLeft: "15%",
        width: "85%"
    },
    spinner: {
        position: "absolute",
        left: "55%",
        top: "50%",
        color: "#A5122C"
    },
    pagination: {
        float: "none",
        marginLeft: "15%",
        marginBottom: 20,
        textAlign: "center"
    },
    buttonStyle: {
        color: "#FFFFFF",
        backgroundColor: "#A5122C",
        width: 20,
        margin: 5
    },
    buttonCurrent: {
        width: 20,
        color: "#A5122C",
        backgroundColor: "#FFFFFF"
    }
};

class FilmList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };
    };

    componentDidMount() {
        this.props.getFilms(1)
    }

    _handlePageChangeNext(page) {
        let next = page + 1;
        this.setState({currentPage: next});
        this.props.getFilms(next)
    }

    _handlePageChangePrevious(page) {
        let previous = page - 1;
        this.setState({currentPage: previous});
        this.props.getFilms(previous);
    }

    render() {
        return (
            <span>
                {
                    this.props.films ?
                        <div className="films" style={styles.films}>
                            {
                                this.props.films.map((e, i) => (
                                    <FilmPoster key={e.id} film={e}/>
                                ))
                            } </div>
                        :
                        <div style={styles.grid}><CircularProgress className="spinner" color="secondary" style={styles.spinner}/></div>
                }
                <div style={styles.pagination}>
                    <Button variant="contained" className="previous" style={styles.buttonStyle}
                            disabled={this.state.currentPage === 1}
                            onClick={() => this._handlePageChangePrevious(this.state.currentPage)}>
                        <NavigateBefore/>
                    </Button>
                    <Button variant="contained" className="current" style={styles.buttonCurrent} disabled={true}>
                        {this.state.currentPage}
                    </Button>
                    <Button variant="contained" className="next" style={styles.buttonStyle}
                            onClick={() => this._handlePageChangeNext(this.state.currentPage)}>
                        <NavigateNext/>
                    </Button>
                </div>
            </span>
        );
    }
}

const mapStateToProps = state => {
    return {
        films: state.FilmReducer.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilms: (pagination) => dispatch(GetFilms(pagination))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);