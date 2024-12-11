import React, { useEffect } from "react";
import { useFetch } from "./GlobaleReactQuery";
const setData = (data) => {
  localStorage.setItem("item", JSON.stringify(data));
};
const getData = () => {
  const data = localStorage.getItem("item");
  return data ? JSON.parse(data) : null; // Parse JSON string back to object
};
const Gallery = () => {
  const { data, error, isLoading } = useFetch();
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);
  const newData = getData();

  if (error) return <div>Error loading images.</div>;

  return (
    <div className="gallery-content">
      <div className="gallery" style={{ display: "flex", flexWrap: "wrap" }}>
        {newData?.results?.map((item) => (
          <div key={item.id} style={{ margin: "10px" }}>
            <img
              src={item.urls.small} // Use the correct image URL
              alt={item.alt_description || "Image"} // Provide an alt description
              style={{ width: "200px", height: "auto" }} // Set image size as needed
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
