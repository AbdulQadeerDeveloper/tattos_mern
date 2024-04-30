import React from 'react'
import Header from '../shared/component/header'
import Footer from '../shared/component/footer'
import Tattoo_list from '../user_tattoo/container/tattoo_list'






function ListComponent() {
  return (
    <div>
      <Header/>
      <Tattoo_list/>
      <Footer/>
    </div>
  )
}

export default ListComponent