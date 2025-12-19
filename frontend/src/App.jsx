import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  const [bouncing,setBouncing] = useState();
  const [data,setData] = useState([]);

  useEffect(()=>{
 const timer =  setTimeout(()=>{
     setBouncing(search)
   },1000)

   return ()=> clearTimeout(timer)
  },[search])
 
  useEffect(()=>{
     if(!bouncing) return;
      const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/?search=${search}`);

      console.log(res.data.user);
      setData(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData()
  },[bouncing])
  const handleTxtChange = (e)=>{
   
    setSearch(e.target.value)
    
  }
 return (
  <div
    style={{
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#0f172a",
      paddingTop: "80px",
      color: "#e5e7eb",
    }}
  >
    <input
      style={{
        width: "500px",
        padding: "18px 24px",
        fontSize: "24px",
        borderRadius: "12px",
        border: "none",
        outline: "none",
        backgroundColor: "#1e293b",
        color: "#f8fafc",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
      type="text"
      placeholder="Search user..."
      onChange={handleTxtChange}
      value={search}
    />

    <div
      style={{
        marginTop: "40px",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {data?.map((d) => (
        <div
          key={d.id}
          style={{
            padding: "16px 20px",
            backgroundColor: "#1e293b",
            borderRadius: "10px",
            fontSize: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
          }}
        >
          {d.name}
        </div>
      ))}
    </div>
  </div>
);

}

export default App;
