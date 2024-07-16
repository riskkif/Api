import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  const getUser = async () => {
    const res = await axios.get('/api')
    console.log(res)
  }

  useEffect(() => {
    getUser();
  },[])

  return (
    <div>
      App
    </div>
  );
}

export default App;
