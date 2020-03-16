import React, { useState, useCallback, useMemo } from "react";

export default function() {
  const [list, UseList] = useState([1, 2, 3]);

  const HandleAdd = useCallback(() => {
    UseList([...list, list.length + 1]);
  }, [list]);

  const listLength = useMemo(() => list.length, [list]);

  return (
    <>
      <button onClick={HandleAdd}>Add</button>
      <p>Length: {listLength}</p>
      <ul>
        {list.map(value => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
}
