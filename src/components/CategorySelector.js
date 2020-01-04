import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { fetchCategories } from '../actions/categorySelector'
import PropTypes from 'prop-types'

class CategorySelector extends Component {

    componentDidMount() {
        this.props.fetchCategories('http://localhost:3001/api/category')
    }

    render() {
        if (this.props.isLoading) {
            return <p>Loading</p>
        }
        if (this.props.isErrored) {
            return <p>There was a problem loading categories</p>
        }
        const categories = this.props.categories
        return <ul>
            {categories.map(item =>
                <Link key={item._id} to={{ pathname: "/shop", search: `?category=${item._id}` }}>
                    <h3>{item.name}</h3>
                    <h3>{item.id}</h3>
                </Link>
            )}
        </ul>
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
    isErrored: PropTypes.bool.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorySelector))