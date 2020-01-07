import React, { Component } from 'react'
import connect from "react-redux";
import { withRouter } from 'react-router-dom'

import { fetchProductInfo } from '../actions/productWindow'
import PropTypes from 'prop-types'

class ProductWindow extends Component {

    componentDidMount() {
        const productId = this.props.math.params.id
        this.props.fetchProductInfo(`http://localhost:3001/api/product/${productId}`)
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading..</p>
        }
        if (this.props.hasErrored) {
            return <p> There was a problem loading product </p>
        }
        const product = this.props.product
        return <div>
            <h3>{product.name}</h3>
            <p>{product._id}</p>
            <p>Category: </p>

        </div>
    }
}

const mapStateToProps = state => {
    return {
        product: state.productWindow.product,
        isLoading: state.productWindow.isLoading,
        hasErrored: state.productWindow.hasErrored
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductInfo: url => dispatch(fetchProductInfo(url))
    }
}

ProductWindow.propTypes = {
    fetchProductInfo: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductWindow))