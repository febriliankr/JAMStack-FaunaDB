import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import { CircleToBlockLoading  } from "react-loadingg";

//grab all the links
//display all the links
//add delete and archive functionality

function App() {
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch("/.netlify/functions/getLinks");
      const links = await res.json();
      setLinks(links);
      console.log("links", links);
      setLoading(false);
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container">
      <h1>List of Links</h1>

      <p>These are all the links that I frequently use.</p>
      {loading ? (
        <CircleToBlockLoading  />
      ) : (
        <>
          <LinkForm refreshLinks={loadLinks} />
          <LinkList links={links} refreshLinks={loadLinks} />
        </>
      )}
    </div>
  );
}

export default App;
