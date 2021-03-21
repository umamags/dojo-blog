import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('Hello');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author};

      setIsPending(true);
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        setIsPending(false);
        console.log("New blog added");
        //history.go(-1);
        history.push('/')
      })
  }
  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange = {(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea required
          value={body}
          onChange = {(e) => setBody(e.target.value)}>

        </textarea>
        <label>Blog Author</label>
        <select
          value={author}
          onChange = {(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Blog Added..</button>}

        </form>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
    </div>
  );
}

export default Create;
