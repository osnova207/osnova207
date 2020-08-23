import React, {Component} from 'react';
import ProductsList from "./components/ProductsList";
import "./assets/styles.scss";
import { productStateTypes } from "./types";

class App extends Component {

    constructor(props) {
        super(props);

        this.content = [
            {
                id: 1,
                initialProductState: productStateTypes.default,
                subTitle: "с фуа-гра",
                portions: 10,
                mouses: 1,
                weight: "0,5",
                footer: "Печень утки разварная с артишоками.",
            },
            {
                id: 2,
                initialProductState: productStateTypes.selected,
                subTitle: "с рыбой",
                portions: 40,
                mouses: 2,
                weight: "2",
                footer: "Головы щучьи с чесноком да свещайшая сёмгушка.",
            },
            {
                id: 3,
                initialProductState: productStateTypes.disabled,
                subTitle: "с курой",
                portions: 100,
                mouses: 5,
                weight: "5",
                footer: "Филе из цыплят с трюфелями в бульоне.",
            }
        ];
    }


  render () {

        return (
            <div className="App">
                <div className="App_content">
                    <div className="App_content__title">
                        Ты сегодня покормил кота?
                    </div>
                    <ProductsList content={this.content}/>
                </div>
            </div>
        );
    }
}

export default App;
