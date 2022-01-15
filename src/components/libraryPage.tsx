import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Button,Image,Row,Col ,Container} from 'react-bootstrap';
import Welcome from  './welcome';

const LibraryPage: React.FC = () => {
  return (
    <Container   fluid={true}>
        <Welcome/>
    </Container>
);
} 

export default LibraryPage;
