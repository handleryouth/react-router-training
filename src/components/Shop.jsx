import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "./Navbar";

function Shop() {
  useEffect(() => {});

  useEffect(() => {
    fetchItems();
  }, []);

  const [value, setValue] = useState([]);

  const fetchItems = async () => {
    const chunks = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    ).then((response) => response.json());

    setValue(chunks.data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {value.map((objData) => {
        return (
          <h3 key={objData.itemId}>
            <Link style={linkStyle} to={`/Shop/${objData.itemId}`}>
              {objData.item.name}
            </Link>
          </h3>
        );
      })}
    </div>
  );
}
export default Shop;
