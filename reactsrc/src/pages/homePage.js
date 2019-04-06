import React, {Component} from "react";
import MenuComponent from "../components/menuComponent";
import FilmPoster from "../components/filmPoster";
import {connect} from "react-redux";
import {GetFilms} from "../functions/filmFunctions";

const style = {
    films: {
        float: "left"
    }
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        // local state
    };

    componentDidMount() {
        this.props.getFilms()
    }
    render() {
        return(
            <div>
                <MenuComponent/>
                <div className="films" style={style.films}>
                    {
                        this.props.films.map((e, i) => (
                            <FilmPoster key={e.id} film={e}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user,
        films: state.FilmReducer.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFilms: () => dispatch(GetFilms())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);