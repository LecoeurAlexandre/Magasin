import React, { Component } from 'react'
import Product from './Product'

export class Basket extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {id,title,price,description} = this.props.product
        return (
            <div>{title}</div>
        )
    }
}