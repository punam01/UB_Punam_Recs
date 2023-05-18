import React from "react";
import { IconContext } from "react-icons";
import { FaEdit, FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArticleCard() {
  return (
    <>
      <div className="container">
        <div className="card article-card mb-3 my-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/p1.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="title">Card title</h5>
                <p className="card-text content">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">5 min read</small>
                </p>
              </div>
              <div className="d-flex">
                <button className="btn mx-2">
                  <IconContext.Provider
                    value={{ className: "top-react-icons" }}
                  >
                    <FaShareSquare />
                  </IconContext.Provider>
                </button>
                <div className="dropdown-start">
                  <button
                    className="btn dropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <IconContext.Provider
                      value={{ className: "top-react-icons" }}
                    >
                      <FaEdit />
                    </IconContext.Provider>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Update
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Delete
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        View Stats
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ArticleCard;
