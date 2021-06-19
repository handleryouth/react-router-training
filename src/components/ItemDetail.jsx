import React, { useState, useEffect } from "react";

function Item(match) {
  useEffect(() => {});

  useEffect(() => {
    fetchItem();
  }, []);

  const [value, setValue] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`
    );

    const itemResponse = await fetchItem.json();
    console.log(itemResponse);
    setValue(itemResponse);
  };

  return (
    <div className="item-detail-container">
      <h1>Item</h1>
      <h3>{value?.data?.item?.name}</h3>
      <img style={{width: "25rem", height:"25rem"}} src={value?.data?.item?.images?.icon} alt="" />
      <video style={{width: "25rem"}} controls src={value?.data?.item?.media[0]?.src}></video>
    </div>
  );
}
export default Item;
