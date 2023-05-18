import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function MyArticles() {
  return (
    <>
      <Navbar heading="Chintanika" title="MY ARTICLES"></Navbar>
      <section className="hero-section">
        <h1 className="hero-heading text-start">Your stories</h1>
        <div className="d-flex">
          <Link className="btn hero mx-2" to="/">
            Write
          </Link>
          <Link className="btn hero" to="/">
            Read
          </Link>
        </div>
      </section>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
      <ArticleCard></ArticleCard>
    </>
  );
}

export default MyArticles;
