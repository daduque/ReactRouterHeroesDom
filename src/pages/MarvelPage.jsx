import React, { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard'

const MarvelPage = () => {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
      fetch('https://dh-heroes-app.herokuapp.com/api/publisher/marvel')
      .then(response => response.json())
      .then(({data}) => {
          return setHeroes(data)
      })
  }, [])

return (
  <section>


      <div className='container'>
          <h1>Marvel Page</h1>
          <hr />
          <div className='justify-content-start gap-3 row'>
              {
                  heroes.map(hero => (
                      <HeroCard key={hero.slug} hero={hero} />
                  ))
              }

          </div>
      </div>
  </section>
)
}

export default MarvelPage