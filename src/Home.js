import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

 const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [name]);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs"/>}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} handleDelete={handleDelete} title="Mario Blogs"/>}
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;
