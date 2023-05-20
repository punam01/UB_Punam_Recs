import React, { useState } from "react";
import Navbar from "./Navbar";
import { IconContext } from "react-icons";
import { FaEye, FaThumbsUp } from "react-icons/fa";

const OpenArticle = (props) => {
  const article = {
    title: "Title",
    description: "Description",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.`,
    view_counts: 10,
    like_counts: 12,
    date: Date.now(),
  };
  //let { article } = props;
  return (
    <>
      <Navbar heading="Chintanika" />

      <section className="hero-section">
        <div className="container">
          <div className="d-flex row-4">
            <img
              className="col-1 mx-4 mb-2 "
              src="/images/p1.jpg"
              style={{ width: "100px", height: "100px", borderRadius: "100px" }}
            />
            <div className="col container text-start">
              <p className="fs-3">
                pUNAM kUMAVAT <sub className="fs-6">({article.date})</sub>
              </p>
              <div className="d-flex">
                <p className="fs-4">
                  <small>{article.like_counts}</small>
                  <IconContext.Provider
                    value={{ className: "top-react-icons" }}
                  >
                    <FaThumbsUp />
                  </IconContext.Provider>
                </p>
                <p className="mx-4 fs-4">
                  <small>{article.view_counts}</small>
                  <IconContext.Provider
                    value={{ className: "top-react-icons" }}
                  >
                    <FaEye />
                  </IconContext.Provider>
                </p>
              </div>
              <small></small>
            </div>
          </div>
        </div>
        <h2 className="hero-heading mx-5">{article.title}</h2>
        <p className="fs-3 mx-5">{article.description}</p>
      </section>
      <div className="container p-5 my-5">{article.content}</div>
    </>
  );
};

export default OpenArticle;
