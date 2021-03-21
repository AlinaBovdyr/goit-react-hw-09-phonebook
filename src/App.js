import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar/AppBar';
import Router from './Router/Router';
import Container from './components/Container/Container';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch])

  return (
    <>
      <AppBar />
      <Container>
        <Router />
        <ToastContainer autoClose={3000}/>
      </Container>
    </>
  );
};