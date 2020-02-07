import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { fetchCategories } from '../actions/categorySelector'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'


class CategorySelector extends Component {

    componentDidMount() {
        this.props.fetchCategories('http://localhost:3001/api/category')
    }

    render() {
        if (this.props.isLoading) {
            return <CircularProgress color='secondary' style={{ position: 'absolute', left: '50%', top: '50%' }} />
        }
        if (this.props.hasErrored) {
            return <p>Problem loading categories</p>
        }
        const categories = this.props.categories
        console.log(categories)
        return <Paper style={{ margin: 15 }}>
            <List aria-label="categories selector">
                {categories.map(item =>
                    <Link key={item._id} to={{ pathname: "/shop", search: `?category=${item._id}` }}>
                        <ListItem button>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                )}
            </List>
        </Paper>
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categorySelector.categories,
        isLoading: state.categorySelector.categoriesLoading ,
        hasErrored: state.categorySelector.categoriesErrored,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: url => dispatch(fetchCategories(url))
    }
}

CategorySelector.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorySelector))