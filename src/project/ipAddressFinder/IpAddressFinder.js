
import React,{ useState, useEffect } from "react";
import axios from "axios";

function IpAddressFinder() {
    const [ip, setIP] = useState("");

    //creating function to load ip address from the API
    // const getData = async () => {
    //   const res = await axios.get('https://geolocation-db.com/json/')
    //   console.log(res.data);
    //   setIP(res.data.IPv4)
    // }
  
    // Updated Code
  
    const getData = async () => {
      const res = await axios.get("https://api.ipify.org/?format=json");
      console.log(res.data);
      setIP(res.data.ip);
    };
  
    useEffect(() => {
      //passing getData method to the lifecycle method
      getData();
    }, []);
  
    return (
      <div className="App">
        <h2>Your IP Address is</h2>
        <h4 style={{color:'black'}}>{ip}</h4>
      </div>
    );
}

export default IpAddressFinder