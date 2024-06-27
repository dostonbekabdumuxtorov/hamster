import React from 'react'
import './home.css'
import Coin from '../Coin/Coin'

function Home() {
  return (
	<div className='container'>
		<div className="wrapper">
			<h1>Header</h1>
			<Coin />
			<div>
				 <button>Okay</button>
			</div>
		</div>
	</div>
  )
}

export default Home