import React, { useState, useEffect } from "react";
import ListGen from "./components/ListGen";
import API from "./utils/API";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    //get information from the API
    API.getEmps().then((res) => {
      console.log(res.data.results);
      setUser(res.data.results);
    });
  }, [user]);

  return (
    <div>
      <ListGen employees={user} />
    </div>
  );
}

export default App;
