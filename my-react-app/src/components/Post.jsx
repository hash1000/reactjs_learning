const Post = (props) => {
    const choseName = ["hashir", "ali", "hassan", "hussain"];
    const randomName= choseName[Math.floor(Math.random()*choseName.length)]
    return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
