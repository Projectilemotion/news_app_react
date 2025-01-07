import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    const st={
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
    }
  return (
    <div style={st}>
      <Spinner animation="border" variant="warning" />
    </div>
  )
}

export default Loader
