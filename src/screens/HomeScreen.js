import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Character from '../components/Character'
import axios from 'axios'

const HomeScreen = () => {
  const [characters, setCharacters] = useState([])

  //will run as soon as component loads
  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await axios.get('/api/characters')
      setCharacters(data)
    }
    fetchCharacters()
  }, [])

  return (
    <>

      <h1 
        className='text-center text-success'>
          Welcome to D3PlayrPad
      </h1>

      <p 
        className='text-center text-warning'>
          Keep track of all your Diablo 3 builds and other in-game essentials!
      </p>

      <h3 
        className='my-2 py-2 text-primary text-center'>
          Latest Character Builds
      </h3>

      <Row>
        {characters.map((character) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Character 
              className='text-secondary' 
              character={character}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
