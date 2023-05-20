import React, { useContext ,useEffect} from 'react';
import articleContext from '../context/articles/ArticleContext';
import ArticleCard from './ArticleCard';
import { useNavigate } from 'react-router-dom';

const ReadArticles = () => {
  let navigate=useNavigate();
   const context = useContext (articleContext);
  //destructing Articles context
  const { articles, AllArticles } = context;
  useEffect(() => {
    //check if auth token is not null
    if(localStorage.getItem('token')){
      AllArticles();
      console.log(articles.data);
    }
    else{
        navigate("/login");
    }
  }, []);

  return (
    <>
      {articles.data.map((article) => {
        return <ArticleCard key={article._id} article={article} />;
      })}
    </>
  )
}

export default ReadArticles
