import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

//grab all the links
//display all the links
//add delete and archive functionality

function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch("/api/getLinks");
      const links = await res.json();
      setLinks(links);
      console.log('links', links)
    }catch(err){
      console.error('error: ', err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container">
      <h1>List of Links</h1>
      <LinkForm refreshLinks={loadLinks}/>
      <p>These are all the links that I frequently use.</p>
      <LinkList links={links} refreshLinks={loadLinks}/>
      
    </div>
  );
}

export default App;
