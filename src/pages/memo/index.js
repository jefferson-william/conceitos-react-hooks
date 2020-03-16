import React, { useState, useCallback, useMemo, memo } from "react";
import axios from "axios";

export const Item = memo(({ data, ...props }) => {
  return <li {...props}>{data.name}</li>;
});

export default function() {
  const [list, UseList] = useState([]);
  const [value, UseValue] = useState("");

  const HandleLoad = useCallback(async () => {
    const response = await axios.get(
      "https://api.github.com/users/diego3g/repos"
    );

    UseList(response.data);
  }, []);

  const HandleChange = useCallback(event => {
    UseValue(event.target.value);
  }, []);

  const listLength = useMemo(() => list.length, [list]);

  return (
    <>
      <input onChange={HandleChange} value={value} />
      <button onClick={HandleLoad}>Load</button>
      <p>Length: {listLength}</p>
      <ul>
        {list.map(data => (
          <Item key={data.id} data={data} />
        ))}
      </ul>
    </>
  );
}
