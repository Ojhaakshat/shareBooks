import React from 'react'
import './Main.css'
import 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
const Main = () => {
  return (
    <div>
      <div className="recomend section-p">
          <div className='title heading-h1'>
            <h1>Recomended For You</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          <div className="slider">
                <div className="card-body">
                  <div className="card">
                       <img src="https://bookland.dexignzone.com/react/demo/static/media/book1.b9dcc11ed55091e09497.jpg" alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>Real Life</h2>
                            <p>$27.66</p>
                            <button className='normal-btn'><span><FaCartPlus></FaCartPlus></span> Add To Cart</button></div>
                  </div>
                  <div className="card"> 
                       <img src="https://bookland.dexignzone.com/react/demo/static/media/book15.9514463d2ada5f2f17ce.jpg" alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>Real Life</h2>
                            <p>$27.66</p>
                            <button className='normal-btn'><span><FaCartPlus></FaCartPlus></span> Add To Cart</button>
                       </div>
                  </div>
                  <div className="card">
                       <img src="data:image/jpeg;base64,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" alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>Real Life</h2>
                            <p>$27.66</p>
                            <button className='normal-btn'><span><FaCartPlus></FaCartPlus></span> Add To Cart</button>
                       </div>
                  </div>
                  <div className="card">
                       <img src="https://bookland.dexignzone.com/react/demo/static/media/book16.061b9fb8d8537506d31d.jpg" alt='books' />
                       <div className="book">
                            <h2 className='heading-h1 '>Real Life</h2>
                            <p>$27.66</p>
                            <button className='normal-btn'><span><FaCartPlus></FaCartPlus></span> Add To Cart</button>
                       </div>
                  </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Main