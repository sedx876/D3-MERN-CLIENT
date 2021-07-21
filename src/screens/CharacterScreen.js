import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listCharacterDetails,
} from '../actions/characterActions'




const CharacterScreen = ({match}) => {
  
  const dispatch = useDispatch()

  const characterDetails = useSelector((state) => state.characterDetails)
  const { loading, error, character } = characterDetails

  useEffect(() => {
    if (!character._id || character._id !== match.params.id){
      dispatch(listCharacterDetails(match.params.id))
    }
  }, [dispatch, match])

  

  return (
    <>
      <Link 
        className='btn btn-secondary my-3' 
        to='/'>
          Go Back
      </Link>
      {loading ? 
        <Loader/> 
        : error ? 
        <Message variant='danger'>{error}</Message> 
        : (
        <Row>

        <Col md={6}>
          <Image src={character.image} alt={character.title} fluid/>
          <ListGroup.Item>UserName: </ListGroup.Item>
          <ListGroup.Item>Joined: </ListGroup.Item>
          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>General Build Notes: </strong></h6>
            <p>{character.generalBuildNotes}</p>
            </div>
          </ListGroup.Item>
          <br/>
          <br/>
          <ListGroup.Item>Reviews and Comments: </ListGroup.Item>
        </Col>

        

        <Col md={6}>

          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3 id='charTitle' className='text-center'>
                {character.title}
              </h3>
            </ListGroup.Item>

          <ListGroup.Item>
            <Rating 
              value={character.rating} 
              text={`${character.numReviews} reviews`}
            />
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Character Class: </strong></h6>
            <p>{character.characterKlass}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Helm: </strong></h6>
            <p>{character.helm}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Shoulders: </strong></h6>
            <p>{character.shoulders}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Gloves: </strong></h6>
            <p>{character.gloves}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Chest Armor: </strong></h6>
            <p>{character.chestArmor}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Belt: </strong></h6>
            <p>{character.belt}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Pants: </strong></h6>
            <p>{character.pants}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Boots: </strong></h6>
            <p>{character.boots}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Bracers: </strong></h6>
            <p>{character.bracers}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Amulet: </strong></h6>
            <p>{character.amulet}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Ring 1: </strong></h6>
            <p>{character.ring1}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Ring 2: </strong></h6>
            <p>{character.ring2}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Weapon: </strong></h6>
            <p>{character.weapon}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Offhand: </strong></h6>
            <p>{character.offhand}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Gem Notes: </strong></h6>
            <p>{character.gemNotes}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Kanai's Cube: </strong></h6>
            <p>{character.kanaisCube}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Active Skills: </strong></h6>
            <p>{character.activeSkills}</p>
            </div>
          </ListGroup.Item>

          <ListGroup.Item>
            <div>
            <h6 id='charhead'><strong>Passive Skills: </strong></h6>
            <p>{character.passiveSkills}</p>
            </div>
          </ListGroup.Item>


          </ListGroup>

        </Col>

      </Row>
      )}
      
    </>
  )
}

export default CharacterScreen
