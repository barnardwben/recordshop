import React, { useState } from "react";

import "./App.css";
import Genres from "./Genres";
import Records from "./Records";
import items from "./data";

const allGenres = ["All", ...new Set(items.map((item) => item.genre))];

function App() {
  const [recordList, setRecordList] = useState(items);
  const [genres, setGenres] = useState(allGenres);

  const filterRecords = (genre) => {
    if (genre === "All") {
      setRecordList(items);
      return;
    }
    const newItems = items.filter((item) => item.genre === genre);
    setRecordList(newItems);
  };
  return (
    <main>
      <section>
        <div className="page-header">
          <h2>Available Records</h2>
          <div className="underline"></div>
        </div>
        <Genres genres={genres} filterRecords={filterRecords} />
        <Records items={recordList} />
      </section>
    </main>
  );
}

export default App;
