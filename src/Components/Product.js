import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    addtoBasket = (e) => {
        e.preventDefault()
        //console.log("Ca marche ?")
        this.props.addProductToBasket(this.props.product)
        console.log(this.props.product)
    }

    render() {
        const {id,title,price,description} = this.props.product
        return (
            <div>
                <span>Id : {id}</span>
                <span>Titre : {title}</span>
                <span>Price : {price}</span>
                <span>Description : {description}</span>
                <button onClick={this.addtoBasket}>Ajouter au panier</button>
            </div>
        )
    }
}