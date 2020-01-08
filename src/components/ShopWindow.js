import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WhithRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { addToCart } from "../actions/cart";
import { fetchProducts } from '../actions/shopWindow'
import PropTypes from 'prop-types'

class ShopWindow extends Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const categoryToLoad = params.get("category")
        this.props.fetchProducts('http://localhost:3001/api/product', categoryToLoad)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location) {
            const params = new URLSearchParams(this.props.location.search)
            const categoryToLoad = params.get("category")
            this.props.fetchProducts('http://localhost:3001/api/product', categoryToLoad)
        }
    }

    addToCartButtonClick = id => {
        this.props.addToCart(id)
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading..</p>
        }
        if (this.props.hasErrored) {
            return <p> There was a problem loading categories </p>
        }

        const products = this.props.products
        return <ul>
            { products.map(item =>
                <li>
                    <Link to={`/product/${item._id}`}>
                        <h3>{item.name}</h3>*/}
                        <h3>{item._id}</h3>
                    </Link>
                    <button type='button' onClick={() => this.addToCartButtonClick(item._id)}>
                        Add to Cart
                    </button>
                </li>
            )}
        </ul>
    }
}

const mapStateToProps = state => {
    return {
        products: state.shopWindow.products,
        isLoading: state.shopWindow.productsLoading,
        hasErrored: state.shopWindow.productsErrored,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (url, categoryToLoad) => dispatch(fetchProducts(url, categoryToLoad))
        addToCart: id => dispatch(addToCart(id))
    }
}

ShopWindow.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default WhithRouter(connect(mapStateToProps, mapDispatchToProps)(ShopWindow))