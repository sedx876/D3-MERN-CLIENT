import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Character from '../components/Character'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCharacters } from '../actions/characterActions'

const HomeScreen = ({match}) => {
  const dispatch = useDispatch()
  const characterList = useSelector((state) => state.characterList)
  const { loading, error, characters } = characterList

  //will run as soon as component loads
  useEffect(() => {
    dispatch(listCharacters())
  }, [dispatch])

  

  return (
    <>
    <h1 
        className='text-center text-success'>
          Welcome to D3PlayrPad
      </h1>

      <p 
        className='text-center text-warning'>
          Keep track of all your Diablo 3 character builds and other in-game essentials!
      </p>

      <h3 
        className='my-2 py-2 text-primary text-center'>
          Latest Character Builds
      </h3>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <Row>
          {characters.map((character) => (
            <Col key={character._id} sm={12} md={6} lg={4} xl={3}>
              <Character character={character} />
            </Col>
          ))}
        </Row>
      </>
    )}
  </>
  )
}

export default HomeScreen
