import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import articleContext from "../context/articles/ArticleContext";
import Alert from "./Alert";
import { IconContext } from "react-icons";
import { FaSadTear } from "react-icons/fa";

function MyArticles() {
  const context = useContext(articleContext);
  //destructing Articles context
  const { articles, getArticles } = context;
  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar heading="Chintanika" title="MY ARTICLES"></Navbar>
      <Alert message="This is alert box" />
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
      <div className="container p-2 text-center light-text">
        {articles.length === 0 && "No articles!"}
        <br />
      </div>
      {articles.map((article) => {
        return <ArticleCard key={article._id} article={article} />;
      })}
    </>
  );
}

export default MyArticles;
