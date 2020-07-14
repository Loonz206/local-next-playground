import React from "react";
import Head from "next/head";
import Button from "../src/components/Button/Button";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button />
    </div>
  );
}
