//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/?populate=deep`).then(({ data }) => {
      setData(data.data);
    });
  }, []);

  console.log("data", data)
  return (
    <div>
    ok
    {data.map((value) => (
      <h1>{value.attributes.title}</h1>
    ))}
    </div>
  );
}

export default App;
