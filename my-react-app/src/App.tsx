import { useState } from 'react';
import PostList from './components/PostList.jsx';
import MainHeader from './components/MainHeader.jsx';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
    function handleCloseModal() {
    setModalIsVisible(false);
  }
    function handleOpenModal() {
    setModalIsVisible(true);
  }
  return (
    <>
    <MainHeader onOpen={handleOpenModal}/>
    <PostList onClose={handleCloseModal} modalIsVisible={modalIsVisible}/>
   </>
  )
}

export default App
