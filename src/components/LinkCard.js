import React from "react";

export default function LinkCard({ link, refreshLinks }) {

  const archiveLink = async () => {
      
    console.log('archived: ', link)
    link.archived = true;
    try {
      await fetch("/api/updateLink", {
        method: "PUT",
        body: JSON.stringify({ link }),
      });
      console.log('archived: ', link)
      refreshLinks();
    } catch (error) {
      console.error("error :", error);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch("/api/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      refreshLinks();
    } catch (error) {
      console.error("error :", error);
    }
  };

  return (
    <div className="linkCard">
      <div className="title">{link.name}</div>
      <div className="body">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="footer">
        <button oncClick={archiveLink}>ARCHIVE</button>
        <button oncClick={deleteLink}>DELETE</button>
      </div>
    </div>
  );
}