import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from './Blog';

function Blogs() {
  
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    // console.log(props);
    const res = await axios
      .get("http://localhost:8000/api/batch",{user:localStorage.getItem("userId")})
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
 
  return (
    <div>
      
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            batchNumber={blog.batchNumber}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
}

export default Blogs;
