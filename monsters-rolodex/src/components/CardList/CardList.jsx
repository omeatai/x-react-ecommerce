import React from "react";

const CardList = ({ searchResult }) => {
  return (
    <section>
      {searchResult ? null : (
        <div>
          <p style={{ color: "red", fontSize: "42px", fontWeight: "bolder" }}>
            Error Fetching Data....
          </p>
        </div>
      )}
      {!searchResult ? null : searchResult.length > 0 ? (
        searchResult.map((person) => {
          return (
            <p key={person.id}>
              {person.id}. {person.name}
            </p>
          );
        })
      ) : (
        <div>
          <p>No Users Available</p>
        </div>
      )}
    </section>
  );
};

export default CardList;
