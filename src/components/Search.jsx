import React from "react";
import { Form, FormControl } from "react-bootstrap";
import styles from "./search.module.scss";

function Search({ onSearch }) {
  const handleChange = (e) => onSearch(e.target.value);
  return (
    <Form>
      <FormControl
        className={styles.search}
        type="search"
        placeholder="Search"
        onChange={handleChange}
        aria-label="Search"
      />
    </Form>
  );
  // return <input type="text"  />;
}

export default Search;
