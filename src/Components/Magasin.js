import React, {Component} from 'react';
import { Basket } from './Basket';
import {Product} from './Product';

export class Magasin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products : [
                {
                    id : "1",
                    title : "Carte routière",
                    price : 9.99,
                    description : "Idéal pour préparer vos randonnées"
                },
                {
                    id : "2",
                    title : "Crème solaire",
                    price : 7.99,
                    description : "Ne laissez pas les coups de soleil gacher vos vacances"
                },
                {
                    id : "3",
                    title : "Maillot de bain",
                    price : 25.99,
                    description : "Epater la galerie au bord de la piscine"
                }
            ]

        }
    };

    render() {
        return (
        <>
        <div>
            {this.state.products.map((product,i) => (<Product product={product} key={i}></Product>))}
        </div>
        <div>
            <Basket></Basket>
        </div>
        </>
        )
        
    };
}