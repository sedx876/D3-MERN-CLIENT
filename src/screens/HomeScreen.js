import React from 'react'
import characters from '../characters'
import { Row, Col } from 'react-bootstrap'
import Character from '../components/Character'

const HomeScreen = () => {
  return (
    <>
      <h1 className='text-primary text-center'>Latest Character Builds</h1>
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
