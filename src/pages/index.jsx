import React, { useState } from "react";
import Form from "../components/form";

function HomePage() {
  return (
    <div className="container">
      <section className="section">
      <hgroup>
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </hgroup>
      <Form />
      </section>
    </div>
  );
}

export default HomePage;
