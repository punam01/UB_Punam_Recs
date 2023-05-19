import { useState } from "react";
import ArticleContext from "./ArticleContext";

const ArticleState = (props) => {
  const host = "http://localhost:5000";
  const articleInitial = [];

  const [articles, setArticles] = useState(articleInitial);

  //Fetch all notes
  const getArticles = async () => {
    const response = await fetch(`${host}/api/article/fetchallarticles`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzFiYzhhODk5NWM0MWYxM2QwMzQ5In0sImlhdCI6MTY4NDQ3ODkzNn0.q3dz3JqV6d7SIVDLG3b7i0QYHGip7ilO23XLQNc8BA8",
      },
    });
    const json = await response.json();
    console.log(json);
    setArticles(json);
  };

  //ADD ARTICLE
  const addArticle = async (title, description, content, tag) => {
    const response = await fetch(`${host}/api/article/addarticle`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzFiYzhhODk5NWM0MWYxM2QwMzQ5In0sImlhdCI6MTY4NDUwMjIyOX0.JY-pjuuQxEdk8QIam9ZdCZDN9LprmKXhZw-sE56hz3c",
      },
      body: JSON.stringify({ title, description, content, tag }),
    });
    const article = await response.json();
    setArticles(articles.concat(article));
  };

  //DELETE ARTICLE (takes article id)
  const delArticle = async (id) => {
    //TODO:API CALL

    const response = await fetch(`${host}/api/article/deletearticle/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzFiYzhhODk5NWM0MWYxM2QwMzQ5In0sImlhdCI6MTY4NDQ3ODkzNn0.q3dz3JqV6d7SIVDLG3b7i0QYHGip7ilO23XLQNc8BA8",
      },
    });
    const json = response.json();
    console.log(json);
    setTimeout(() => {
      console.log("this is the third message");
    }, 1000);
    console.log("deleteing article withid" + id);
    const newArticle = articles.filter((article) => {
      return article._id !== id;
    });
    setArticles(newArticle);
  };
  //EDIT NOTE
  const editArticle = async (id, title, description, content, tag) => {
    const response = await fetch(`${host}/api/article/updatearticle/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2NzFiYzhhODk5NWM0MWYxM2QwMzQ5In0sImlhdCI6MTY4NDQ3ODkzNn0.q3dz3JqV6d7SIVDLG3b7i0QYHGip7ilO23XLQNc8BA8",
      },
      body: JSON.stringify({ title, description, content, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newArticle = JSON.parse(JSON.stringify(articles));
    for (let index = 0; index < newArticle.length; index++) {
      const element = articles[index];
      if (element._id === id) {
        newArticle[index].title = title;
        newArticle[index].description = description;
        newArticle[index].content = content;
        newArticle[index].tag = tag;
        break;
      }
    }
    setArticles(newArticle);
  };
  //VIEW NOTES
  const viewArticle = () => {};

  return (
    <ArticleContext.Provider
      value={{
        articles,
        addArticle,
        delArticle,
        editArticle,
        viewArticle,
        getArticles,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
