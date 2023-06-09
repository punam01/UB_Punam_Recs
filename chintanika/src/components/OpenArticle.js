import React, { useState,useEffect} from "react";
import Navbar from "./Navbar";
import { IconContext } from "react-icons";
import {
  FaEye,
  FaFacebookSquare,
  FaLinkedin,
  FaThumbsUp,
  FaTwitter,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { useParams } from "react-router-dom";

const OpenArticle = (props) => {

 // const article = props.articleObj;
  /*const article = {
    title: "Title",
    description: "Description",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.`,
    view_counts: 10,
    like_counts: 12,
    date: Date.now(),
  };*/
  //let { article } = props;
  const { data } = useParams(); // Get the serialized article object from the URL parameter
  const [article, setArticle] = useState(null); // Create a state to store the article object

  useEffect(() => {
    // Deserialize the article object and set it in the state
    try {
      const deserializedArticle = JSON.parse(decodeURIComponent(data));
      setArticle(deserializedArticle);
    } catch (error) {
      console.error("Error parsing article data:", error);
      // Handle the error, such as displaying an error message or redirecting to a different page
    }
  }, [data]);
  if (!article) {
    return null; // If the article object is not available or still loading, you can render a loading indicator or return null
  }

  const text=article.content;
  const sanitizedText = { __html: text };
  return (
    
    <>
      <Navbar heading="Chintanika" />
      <div className="share-this-page">
        <section className="hero-section">
          <div className="container">
            <div className="d-flex row-4">
              <img
                className="col-1 mx-4 mb-2 "
                src="/images/p1.jpg"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100px",
                }}
              />
              <div className="col container text-start">
                <p className="fs-3">
                  pUNAM kUMAVAT <sub className="fs-6">({article.pub_date})</sub>
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
                  <p className="mx-4 fs-6">
                    {(
                      Math.round(
                        0.008 * article.content.split(" ").length * 100
                      ) / 100
                    ).toFixed(1)}{" "}
                    minutes read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="hero-heading mx-5">{article.title}</h2>
          <p className="fs-3 mx-5">{article.description}</p>
          <div className="d-flex">
            <FacebookShareButton className="mx-5" url="facebook.com">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <FaFacebookSquare />
              </IconContext.Provider>
            </FacebookShareButton>
            <LinkedinShareButton className="" url="Linkedin.com">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <FaLinkedin />
              </IconContext.Provider>
            </LinkedinShareButton>
            <TwitterShareButton className="mx-5" url="twitter.com">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <FaTwitter />
              </IconContext.Provider>
            </TwitterShareButton>
          </div>
        </section>
        <div className="container p-5 my-5">{
          <div dangerouslySetInnerHTML={sanitizedText} />}
        </div>
      </div>
    </>
  );
};

export default OpenArticle;
