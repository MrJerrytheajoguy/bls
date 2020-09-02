import React, { useEffect, useState } from "react";
import { Story } from "./Story";
import { Card } from "../Card";
import { app } from "../../../config/firebase";

const { db } = app;

const TopStories = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    db.collection("blog")
      .orderBy("date", "desc")
      .limit(5)
      .get()
      .then((res) => {
        const blogs = [];
        res.forEach((e) => blogs.push({ id: e.id, ...e.data() }));
        setBlogs(blogs);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Card style={{ background: "transparent", border: "1px solid white" }}>
      <h5>Latest Stories</h5>
      {blogs.map((e) => (
        <Story blog={e} key={e.id} />
      ))}
    </Card>
  );
};
export default TopStories;
