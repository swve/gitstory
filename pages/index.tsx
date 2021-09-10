import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearchTextChange = (e) => {
    setSearchValue(e.target.value);
  }

  const submitSearch = (e) => {
    router.push("/repo/github/user/repo");
  }



  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
      Enter the repository you are searching :{searchValue}
      <br /><br />
      <input
        onChange={handleSearchTextChange}
        type="text"
      />{" "}
      <button onClick={submitSearch} type="submit">Go</button>
    </div>
  );
}
