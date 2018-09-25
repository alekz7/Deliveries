import React from 'react'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';

const Card = (props) => {
  return (
    <Thumbnail src="/img/headphones.jpg" alt="242x200">
      <h5>Thumbnail label</h5>
      <p>Description</p>
      <p align="right">
        <Button bsStyle="primary">+</Button>
      </p>
    </Thumbnail>
  )
}

export default Card
