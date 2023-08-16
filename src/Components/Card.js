import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

function HardlyCarding() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width="40vh" height="auto"/>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
            </Form.Group>
         </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default HardlyCarding;