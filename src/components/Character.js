import React from 'react'
import { Card } from 'react-bootstrap'

const Character = ({character}) => {
  return (
    <Card className='my-3 py-3 rounded card border-secondary'>

      <a href={`/character/${character._id}`}>
        <Card.Img id='cardImg' class="card-img-top" src={character.image} variant='top'/>
      </a>

      <Card.Body>
      <a href={`/character/${character._id}`}>
        <Card.Title as='div'>
          <strong>{character.title}</strong>
        </Card.Title>
      </a>

      <Card.Text as='div'>
        <div className='my-3'>
          {character.rating} from {character.numReviews} reviews
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
