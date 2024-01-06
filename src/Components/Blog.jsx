import React, { useState, useEffect } from "react";
import "./Blog.css";
import Blog1 from "../assets/img/blog1.webp";
import Blog2 from "../assets/img/blog2.webp";
import Blog3 from "../assets/img/blog3.webp";
import Blog4 from "../assets/img/blog4.webp";
import Blog5 from "../assets/img/blog5.webp";
import Blog6 from "../assets/img/blog6.webp";
import Blog7 from "../assets/img/blog7.webp";
import Blog8 from "../assets/img/blog8.webp";
import Blog9 from "../assets/img/blog9.webp";
import Blog10 from "../assets/img/blog10.webp";
import Blog11 from "../assets/img/blog11.webp";
import Blog12 from "../assets/img/blog12.webp";
import Blog13 from "../assets/img/blog13.webp";
import Blog14 from "../assets/img/blog14.webp";
import Blog15 from "../assets/img/blog15.webp";
import Blog16 from "../assets/img/blog16.webp";
import Blog17 from "../assets/img/blog17.webp";
import Blog18 from "../assets/img/blog18.webp";
import { Link } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [tags, settags] = useState("no tag")
  const blogData = [
    {
      image: `${Blog1}`,
      languages: ["AWS", "ReactJS", "Javascript"],
      title: "All about Postman Collection",
      description: "How to create and Export Postman API’s",
      date: "November 14, 2023",
    },
    {
      image: `${Blog2}`,
      languages: ["NodeJS"],
      title: "Awesome Terminal Applications",
      description:
        "This is a curated list of some useful terminal apps and how to use them.",
      date: "November 12, 2023",
    },
    {
      image: `${Blog3}`,
      languages: ["ReactJS", "ReactJS"],
      title: "How To Choose Data Fetching Strategies In NextJS",
      description: "Explained with real-world examples",
      date: "November 10, 2023",
    },
    {
      image: `${Blog4}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "React useState hook from scratch",
      description: "Let's learn the fundamentals of ReactJS",
      date: "November 4, 2023",
    },
    {
      image: `${Blog5}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "The Greatest React Developer I Ever Met",
      description: "We had our differences but still...",
      date: "October 26, 2023",
    },
    {
      image: `${Blog6}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "Single Table Design with DynamoDB",
      description:
        "The anatomy of the single-table design approach. Is it any good?",
      date: "October 5, 2023",
    },
    {
      image: `${Blog7}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "Developing a Powerful Alert System Using React Context API",
      description: "A practical example of React’s Context API in action",
      date: "October 1, 2023",
    },
    {
      image: `${Blog8}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "Google Place Search in React",
      description: "Implement google's place search API easily.",
      date: "September 19, 2023",
    },
    {
      image: `${Blog9}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "My Frustrations With the Context API in React",
      description: "And why I am going with Redux for my next project",
      date: "September 13, 2023",
    },
    {
      image: `${Blog10}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "21 Best Practices for Handling Passwords in Web Applications",
      description: "Build secure apps",
      date: "August 25, 2023",
    },
    {
      image: `${Blog11}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "Top 7 Libraries for Blazingly Fast ReactJS Applications",
      description: "Some must-have tools for a rock-star developer",
      date: "August 18, 2023",
    },
    {
      image: `${Blog12}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "21 Best Practices for a Clean React Project",
      description: "Practical advice for improving code quality",
      date: "August 3, 2023",
    },
    {
      image: `${Blog13}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "How to Use React Hook Form with TypeScript",
      description: "Build Performant and Clean Forms for Your Web Application",
      date: "August 1, 2023",
    },
    {
      image: `${Blog14}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title:
        "Applying the Open-Closed Principle To Write Clean React Components",
      description: "A look at the SOLID principles in action",
      date: "August 1, 2023",
    },
    {
      image: `${Blog15}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "How To Improve Rendering Performance in a 1,000-Item React List",
      description: "Let’s ensure that our web apps scroll efficiently",
      date: "July 30, 2023",
    },
    {
      image: `${Blog16}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "Apply the Dependency Inversion Principle in React",
      description: "Your React component knows too much. Let’s fix that",
      date: "July 22, 2023",
    },
    {
      image: `${Blog17}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title:
        "A Complete Guideline to Creating a Modern React App With TypeScript From Scratch",
      description: "You’re about to love create-react-app even more",
      date: "July 8, 2023",
    },
    {
      image: `${Blog18}`,
      languages: ["ReactJS", "ReactJS", "ReactJS"],
      title: "How to Apply Interface Segregation Principle in ReactJS",
      description: "SOLID principles in action",
      date: "July 4, 2023",
    },
  ];

  const [value, setvalue] = useState("");
  const handlechange = (e) => {
    setvalue(e.target.value);
  };

  const filteredBlogData = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase()) ||
      blog.description.toLowerCase().includes(value.toLowerCase()) ||
      blog.date.toLowerCase().includes(value.toLowerCase())
  );

  // API
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://v1.nocodeapi.com/zainqalandar/medium/kCyariSlaIaizELg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error);
      });
    }, []);
    
    console.log(data);
    // const textContent = data.content.replace(/<[^>]*>/g, '');
  


  return (
    <>
      <div className="Blog__heading">
        <h2>
          Articles on{" "}
          <a href="" className="text_bold decorate-none">
            {" "}
            ReactJS{" "}
          </a>
          ,{" "}
          <a href="" className="text_bold decorate-none text-green">
            NodeJS
          </a>{" "}
          and{" "}
          <a href="" className="text_bold decorate-none text-orang-blur">
            AWS
          </a>
        </h2>
      </div>
      <div className="search_image">
        <form action="">
          <div className="search__bar">
            <div className="search_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              value={value}
              onChange={handlechange}
              type="search"
              placeholder="Search by title.."
              name=""
              id=""
            />
          </div>
        </form>
      </div>
      <section className="blog__grid">
      {data?.map((blogData, index) => (
        <div className="bog1 Blog" key={index}>
          <Link to="/detail">
            {" "}
            {/* <img src={`${blogData.content.match(/src="([^"]*)"/)}`} alt="" />{" "} */}
          </Link>
          <div className="languges">
            {/* <span>{blogData.languages[1]}</span>
            <span>{blogData.languages[2]}</span>
            <span>{blogData.languages[3]}</span> */}
            <div>{blogData.content.match(/src="([^"]*)"/)}</div>
          </div>
          <div className="blog_title">{blogData.title}</div>
          <div className="blog_description">{blogData.content.replace(/<[^>]*>/g, '').slice(0, 66)}</div>
          {/* <div className="blog_date">{blogData.date}</div> */}
        </div>
      ))}
      </section>
    </>
  );
};

export default Blog;
