import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Shop from './component/Shop'
import Collection from './component/Collection'
import Features from './component/Features'
import Products from './component/Products'
import Review from './component/Review'
import Footer from './component/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cart from './component/Cart'
import { Toaster } from 'react-hot-toast'


const App = () => {

  const [showCart, setShowCart] = useState(false);


  return (

    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />

        {showCart && <Cart setShowCart={setShowCart} />}
        <div id='home'>
          <Home />
        </div>
        <div id='shop'>
          <Shop />
        </div>
        <Collection />
        <div id='features'>
          <Features />
        </div>
        <div id='products'>
          <Products />
        </div>
        <div id='review'>
          <Review />
        </div>

        <Footer />

        <Toaster position='bottom-center' reverseOrder={false} />
      </Provider>
    </div>

  )
}

export default App