import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

 const [name, setName] = useState('mario');
 const [isPending, setPending] = useState(true);
 const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
          console.log(err.message);
          setPending(false);
          setError(err.message);
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs"/>}
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} handleDelete={handleDelete} title="Mario Blogs"/>}
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;
