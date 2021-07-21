import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Character = ({character, user}) => {
  return (
    <Card className='my-2 py-2 rounded card border-secondary'>

      <Link to={`/character/${character._id}`}>
        <Card.Img id='cardImg' class="card-img" src={character.image} />
      </Link>

      <Card.Body>
      <Link to={`/character/${character._id}`}>
        <Card.Title as='div'>
          <strong id='cTitle'>{character.title}</strong>
        </Card.Title>
      </Link>

      <Card.Text as='div'>
        <div className=''>
        <Rating 
          value={character.rating} 
          text={`${character.numReviews} reviews`}
        />
        </div>
      </Card.Text>

      <Card.Text as='h4' class="text-success text-center">
        {character.characterKlass}
      </Card.Text>

      <Card.Text as='p' class="text-secondary text-center">
        Built By: 
      </Card.Text>

      </Card.Body>
    </Card>
  )
}

export default Character
