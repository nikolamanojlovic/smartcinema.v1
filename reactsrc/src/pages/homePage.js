import {Component} from "react";
import MenuComponent from "../components/menuComponent";
import FilmPoster from "../components/filmPoster";

class HomePage extends Component {
    render() {
        return(
            <div>
                <MenuComponent/>
                <FilmPoster/>
            </div>
        );
    }
}

export default HomePage;