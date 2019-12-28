import React, {Component} from 'react'
import connect from 'react-redux'
import {withRouter} from 'react-router-dom'

import {getCart, removeCart} from '../actions/cart'
import PropTypes from 'prop-types'

class Cart extends Component {

    componentDidMount() {
        this.props.getCart()
    }

    deleteButtonClick = id => {
        this.props.removeCart(id)
    }

    render() {
        const { cart } = this.props.cart
        return <div>
            {cart.map(id =>
                <div>
                    <h3>{id}</h3>
                    <button
                        type="button"
                        onClick={() => this.deleteButtonClick(id)}>
                        Remove
                    </button>
                </div>
            )}
        </div>
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

Cart.propTypes = {
    getCart: PropTypes.func.isRequired,
    removeCart: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
}

export default withRouter(connect(mapStateToProps, { getCart, removeCart })(Cart))