import JoditEditor from "jodit-react";
import React, { useRef, useState, useContext } from "react";
import Navbar from "./Navbar";
import articleContext from "../context/articles/ArticleContext";

function TextEditor({ setContent }) {
  const context = useContext(articleContext);
  //destructing Articles context
  const { addArticle } = context;

  const editor = useRef(null);
  const [article, setArticle] = useState({
    title: "",
    description: "",
    content: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addArticle(
      article.title,
      article.description,
      article.content,
      article.tag
    );
  };
  const onChange = (e) => {
    //spread operator
    setArticle({ ...article, [e.target.name]: [e.target.value] });
  };

  return (
    <>
      <Navbar heading="Chintanika" title="WRITE" />
      <section className="hero-section">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control hero-heading fs-4"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
        </form>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <JoditEditor
            ref={editor}
            name="content"
            id="content"
            onChange={(content) => {
              setArticle({ ...article, content: content });
            }}
          ></JoditEditor>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label hero p-2">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>
        <div className="text-end">
          <button className=" btn hero" onClick={handleClick}>
            Publish Article
          </button>
        </div>
      </section>
    </>
  );
}
export default TextEditor;
