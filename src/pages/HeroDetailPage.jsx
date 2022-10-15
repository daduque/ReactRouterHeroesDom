import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const HeroDetailPage = () => {

  const { slug } = useParams();
  const navigate = useNavigate();

  const [hero, setHero] = useState([])
    useEffect(() => {
        fetch(`https://dh-heroes-app.herokuapp.com/api/hero-detail/${slug}`)
        .then(response => response.json())
        .then(({data}) => {
            return setHero(data)
        })
    }, []);

    const onBackClick = () => {
      navigate(-1);
    }


    return (

        <div className='card col-12 col-md-2 ms-3 my-5' style={{maxWidth: 540, minHeight:431}}>
          <div className='no-gutters'>

            {
              hero && hero.slug && (
                <>
                
                <div className='col'>
                  <img src={`https://dh-heroes-app.herokuapp.com/assets/${hero.slug}.jpg`} className='card-img' alt={hero.name} />
              </div>
              <div className='col'>
                  <div className='card-body'>
                      <h5 className='card-title'> {hero.superhero}</h5>
                      <p className='card-text'>{hero.slug}</p>
                      {
                        hero && hero.publisher && (
                          <p className='card-text'><strong> Publisher: </strong> {hero.publisher.publisher}</p>
                        )
                      }
                      <button className='btn btn-primary w-100' onClick={ onBackClick }> Go Back </button>
                  </div>
              </div>
              </>
              )
            }
              
          </div>
      </div>
    )
      


}

export default HeroDetailPage