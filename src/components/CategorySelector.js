import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {getCategories, categoriesLoad, fetchCategories} from '../actions/categorySelector'
import PropTypes from 'prop-types'

class CategorySelector extends Component {

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

CategorySelector.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categoriesLoad: PropTypes.func.isRequired,
    fetchCategories: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, { getCategories, categoriesLoad, fetchCategories })(CategorySelector))