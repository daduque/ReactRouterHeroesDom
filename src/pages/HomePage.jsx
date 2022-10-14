import React, { useEffect, useState } from 'react'

const HomePage = () => {

    const [heroes, setHeroes] = useState([])
    useEffect(() => {
        fetch('https://dh-heroes-app.herokuapp.com/api/heroes')
        .then(response => response.json())
        .then(({data}) => {
            return setHeroes(data)
        })
    }, [])
    //Una variable de estado para guardar el listado de heroes
    //llamar al endpoint de heroes al momento de cargar el componente
    //Verificar que la variable con el listado de heroes tenga datos
    //Revisar el state desde el navegador
    //recorrer la variable con el listado de heroes y mostrarlos en la página



  return (
    <section>

        <div className='container'>
            <h1>Home Page</h1>
            <hr />
        </div>
    </section>
  )
}

export default HomePage