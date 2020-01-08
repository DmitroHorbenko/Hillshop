import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {removeFromCart, fetchCartData} from '../actions/cart'
import PropTypes from 'prop-types'

class Cart extends Component {

    componentDidMount() {
        this.props.fetchCartData('http://localhost:3001/api/product/', this.props.cartId)
    }

    deleteButtonClick = id => {
        this.props.removeFromCart(id)
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading..</p>
        }
        if (this.props.hasErrored) {
            return <p>There was a problem loading ... </p>
        }

        const cartDetail = this.props.cartDetail
        return <div>
            {cartDetail.map(product =>
                <div style={{ backgroundColor: 'green' }}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product._id}</p>
                    {product.category !== undefined ? <Link to={{ pathname: "/shop", search: `?category=${product.category._id}` }}>{product.category.name}</Link> : ''}
                    <button
                        type="button"
                        onClick={() => this.deleteButtonClick(product._id)}>
                    </button>
                </div>
            )}
        </div>
    }
}

const mapStateToProps = state => ({
    cartId: state.cart.cartId,
    cartDetail: state.cart.cartDetail,
    isLoading: state.cart.cartLoading,
    hasErrored: state.cart.cartErrored,
})

const mapDispatchToProps = dispatch => ({
    fetchCartData: (url, idArray) => dispatch(fetchCartData(url, idArray)),
    removeFromCart: id => dispatch(removeFromCart(id))
})

Cart.propTypes = {
    cartId: PropTypes.func.isRequired,
    cartDetail: PropTypes.array.isRequired,
    cartErrored: PropTypes.bool.isRequired,
    cartLoading: PropTypes.bool.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    fetchCartData: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))