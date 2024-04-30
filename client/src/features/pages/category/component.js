import React from 'react'
import Header from '../../shared/component/header'
import Footer from '../../shared/component/footer'
import CategoryContainer from '../../categories/container/categories'


const CategoriesComponent = () => {
    return (
        <React.Fragment>
            <Header />
            <CategoryContainer />
            <Footer />
        </React.Fragment>
    )
}

export default CategoriesComponent