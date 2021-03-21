import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('Hello');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className="create">
      <h2>Create a new blog</h2>
      <form></form>
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
        <button>Add Blog</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
    </div>
  );
}

export default Create;
