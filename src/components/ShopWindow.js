import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { addToCart } from "../actions/cart";
import { fetchProducts } from '../actions/shopWindow'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress'
import GridList from '@material-ui/core/GridList'
import {inherits} from 'util'

class ShopWindow extends Component {
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const categoryToLoad = params.get("category")
        this.props.fetchProducts('http://localhost:3001/api/product', categoryToLoad)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
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
            return <CircularProgress style={{ position: 'absolute', left: '50%', top: '50%' }} />
        }
        if (this.props.hasErrored) {
            return <p> There was a problem loading categories </p>
        }

        const products = this.props.products
        return <GridList>
            { products.map(item =>
                <Card key={item._id} style={{ maxWidth: 300, margin: 15, padding: 0, height: inherits }}>
                    <CardActionArea>
                        <CardMedia
                            style={{height: 150}}
                            // image={.png'}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.addToCartButtonClick(item._id)}>
                            Add To Cart
                        </Button>
                        <Link to={`/product/${item._id}`}>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            )}
        </GridList>
    }
}

const mapStateToProps = state => {
    return {
        products: state.shopDisplay.products,
        isLoading: state.shopDisplay.productsLoading,
        hasErrored: state.shopDisplay.productsErrored
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (url, categoryToLoad) => dispatch(fetchProducts(url, categoryToLoad)),
        addToCart: id => dispatch(addToCart(id))
    }
}

ShopWindow.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopWindow))