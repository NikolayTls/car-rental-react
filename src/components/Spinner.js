import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
      <span></span>
    </Spinner>

  );
}

export default LoadingSpinner;