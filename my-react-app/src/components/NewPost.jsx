import classes from "./NewPost.module.css";

function NewPost(props) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body"  required rows={3} onChange={props.onAuthorChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea type="text" id="name" required  onChange={props.onBodyChange}/>
      </p>
    </form>
  );
}
export default NewPost;
