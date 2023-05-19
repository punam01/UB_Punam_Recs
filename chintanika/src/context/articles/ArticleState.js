
import ArticleContext from "./ArticleContext";

const ArticleState = (props) => {
  const state = {
    name: "punam",
    class: "MCA",
  };
  return (
    <ArticleContext.Provider value={state}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
