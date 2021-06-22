import React from "react";
import { Item } from "./Item";

export default class Componente1 extends React.Component {

    state = {
        lista: []
    }

    exibirLista(lista) {
        return lista.map((item, index) => <Item item={item} index={index} />);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ lista: ["React", "Angular", "Flutter", "Kotlin", "C#", "Python"] });
        }, 5000);
    }

    render() {
        const { lista } = this.state;
        return (
            <div>
                <h1>Meu primeiro componente de classe!</h1>
                <ul>
                    {this.exibirLista(lista)}
                </ul>
            </div>
        )
    }
}

