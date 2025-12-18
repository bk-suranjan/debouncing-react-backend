import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/?search=${search}`);

      console.log(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [search]);
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100%'}}>
      <input
       style={{backgroundColor:'gray',height:'100px',width:'500px'}}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

export default App;
