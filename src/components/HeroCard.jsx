import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const HeroCard = ({hero}) => {
  return (
    <div className='card col-12 col-md-2 ms-3' style={{maxWidth: 540, minHeight:431}}>
        <div className='no-gutters'>
            <div className='col'>
                <img src={`https://dh-heroes-app.herokuapp.com/assets/${hero.slug}.jpg`} className='card-img' alt={hero.name} />
            </div>
            <div className='col'>
                <div className='card-body'>
                    <h5 className='card-title'>{hero.name}</h5>
                    <p className='card-text'>{hero.slug}</p>
                    {/* <button className='btn btn-primary w-100'> Details </button> */}
                    <Link className='btn btn-warning w-100' to={`/hero-detail/${hero.slug}`}> Hero Details </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCard