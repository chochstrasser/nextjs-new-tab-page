"use client";

import React from "react";
import SearchBar from "./components/SearchBar";
import QuickLinks from "./components/QuickLinks";
import { NextPage } from "next";

const Home: NextPage = () => {
  const links = [
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "GitHub", url: "https://www.github.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "X", url: "https://www.x.com" },
  ];

  const logImpression = async (
    type: string,
    info: { query?: string; url?: string }
  ) => {
    console.log(`Logging ${type} impression: `, info);
    try {
      const response = await fetch("/api/impression", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          pragma: "no-cache",
        },
        body: JSON.stringify({ type, info }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Impression logged:", data);
    } catch (error) {
      console.error("Failed to log impression:", error);
    }
  };

  const handleSearch = (query: string) => {
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, "_blank");
    logImpression("search", { query });
  };

  const handleLinkClick = (url: string) => {
    logImpression("link", { url });
  };

  return (
    <main className="w-full flex flex-col items-center h-screen">
      <div className="h-16"></div>
      <div className="flex flex-col items-center justify-center w-full">
        <div id="logo" className="pt-24 pb-12 text-6xl md:text-8xl">
          Google
        </div>
        <SearchBar onSearch={handleSearch} />
        <QuickLinks links={links} onLinkClick={handleLinkClick} />
      </div>
    </main>
  );
};

export default Home;
