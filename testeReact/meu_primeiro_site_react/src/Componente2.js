import React, { useState, useEffect } from 'react';
import './Componente2.css';
import { Item } from './Item';

export const Componente2 = () => {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLista(["React", "Angular", "Flutter", "Kotlin", "C#", "Python"]);
        }, 5000);
    });

    return (
        <div>
            <h1 className="azul">Meu primeiro componente de função!</h1>
            <ul>
                {lista.map((item, index) => <Item item={item} index={index} />)}
            </ul>
        </div>)
}