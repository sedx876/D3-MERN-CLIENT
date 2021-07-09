import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Character = ({character}) => {
  return (
    <Card className='my-2 py-2 rounded card border-secondary'>

      <Link to={`/character/${character._id}`}>
        <Card.Img id='cardImg' class="card-img" src={character.image} variant='top'/>
      </Link>

      <Card.Body>
      <Link to={`/character/${character._id}`}>
        <Card.Title as='div'>
          <strong id='cTitle'>{character.title}</strong>
        </Card.Title>
      </Link>

      <Card.Text as='div'>
        <div className='my-3'>
        <Rating value={character.rating} text={`${character.numReviews} reviews`}/>
        </div>
      </Card.Text>

      <Card.Text as='h4' class="text-success">
        {character.characterKlass}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Character
