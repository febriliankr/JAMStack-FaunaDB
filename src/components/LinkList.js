import React from "react";
import LinkCard from "./LinkCard";


export default function LinkList({ links, refreshLinks }) {
  return (
    <div>
      {links &&
        links
          .filter((link) => !link.archived)
          .map((link) => {
            return (
              <LinkCard
                key={link._id}
                link={link}
                refreshLinks={refreshLinks}
              />
            );
          })}
          

      <h2>Archived Links</h2>
      {links &&
        links
          .filter((link) => link.archived)
          .map((link) => {
            return (
              <LinkCard
                key={link._id}
                link={link}
                refreshLinks={refreshLinks}
              />
            );
          })}
    </div>
  );
}
