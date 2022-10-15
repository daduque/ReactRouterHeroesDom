import React, { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard'
import NavBar from '../components/NavBar'

const HomePage = () => {

    const [heroes, setHeroes] = useState([])
    useEffect(() => {
        fetch('https://dh-heroes-app.herokuapp.com/api/heroes')
        .then(response => response.json())
        .then(({data}) => {
            return setHeroes(data)
        })
    }, [])

  return (
    <section>


        <div className='container'>
            <h1>Home Page</h1>
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

export default HomePage