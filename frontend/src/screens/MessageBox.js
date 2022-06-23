import Alert from 'react-bootstrap/Alert';
export default function MessageBox(props) {
  return (
    // iuj
    <Alert variant={props.variant || 'info'}> {props.children} </Alert>
  );
}
