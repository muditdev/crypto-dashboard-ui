import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="text-center p-4">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
