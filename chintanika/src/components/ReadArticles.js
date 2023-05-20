import React, { useContext, useEffect, useState } from "react";
import articleContext from "../context/articles/ArticleContext";
import { useNavigate } from "react-router-dom";
import PublicArticleCard from "./PublicArticleCard";
import Navbar from "./Navbar";
const ReadArticles = () => {
  let navigate = useNavigate();
  const context = useContext(articleContext);
  //destructing Articles context
  const { articles, AllArticles } = context;
  console.log("articles: " + articles.data);
  console.log("all articles:" + AllArticles);
  useEffect(() => {
    //check if auth token is not null
    if (localStorage.getItem("token")) {
      AllArticles();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar heading="Chintanika" title="READ" />
      <section className="hero-section">
          <div className="card border-0" style={{backgroundColor:"#fbf8f2"}}>
            <div class="card-body">
              <blockquote class="blockquote mb-0 border-0">
                <p className="hero-heading fs-1">A writer only begins a book.<br/>A reader finishes it.</p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">Samuel Johnson</cite>
                </footer>
              </blockquote>
            </div>
          </div>
      </section>
      <div className="container">
        {articles.data?.map((article) => {
          return <PublicArticleCard key={article._id} article={article} />;
        })}
      </div>
    </>
  );
};

export default ReadArticles;
