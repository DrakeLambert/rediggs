import React from 'react';
import Container from 'react-bootstrap/Container';
import RoomPicker from './Components/RoomPicker.jsx';
import roomTypes from './ExternalData/room-types.json'

const App = () => <Container className='pt-3'>
	<RoomPicker roomTypes={roomTypes} onSelect={1} />
</Container>

export default App