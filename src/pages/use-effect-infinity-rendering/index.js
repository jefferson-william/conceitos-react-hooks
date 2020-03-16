import React, { useState, useCallback, useEffect } from "react";

export default function() {
  const [list, UseList] = useState([1, 2, 3]);

  const HandleAdd = useCallback(() => {
    UseList([...list, list.length + 1]);
  }, [list]);

  useEffect(() => {
    console.log("Processando componente...");
  });

  return (
    <>
      <button onClick={HandleAdd}>Add</button>
      <ul>
        {list.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
}
