import React from 'react'
import './Blog.css'
import Blog1 from '../assets/img/blog1.webp'
import Blog2 from '../assets/img/blog2.webp'
import Blog3 from '../assets/img/blog3.webp'
import Blog4 from '../assets/img/blog4.webp'
import Blog5 from '../assets/img/blog5.webp'
import Blog6 from '../assets/img/blog6.webp'
import Blog7 from '../assets/img/blog7.webp'
import Blog8 from '../assets/img/blog8.webp'
import Blog9 from '../assets/img/blog9.webp'
import Blog10 from '../assets/img/blog10.webp'
import Blog11 from '../assets/img/blog11.webp'
import Blog12 from '../assets/img/blog12.webp'
import Blog13 from '../assets/img/blog13.webp'
import Blog14 from '../assets/img/blog14.webp'
import Blog15 from '../assets/img/blog15.webp'
import Blog16 from '../assets/img/blog16.webp'
import Blog17 from '../assets/img/blog17.webp'
import Blog18 from '../assets/img/blog18.webp'

const Blog = () => {
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
                        <input type="search" placeholder="Search by title.." name="" id="" />
                    </div>
                </form>
            </div>
            <section className="blog__grid">
                <div className="bog1 Blog">
                    <img src={`${Blog1}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>AWS</span>
                        <span>Javascript</span>
                    </div>
                    <div className="blog_title">All about Postman Collection</div>
                    <div className="blog_description">
                        How to create and Export Postman API’s
                    </div>
                    <div className="blog_date">November 14, 2023</div>
                </div>
                <div className="bog2 Blog">
                    <img width={400} height={200} src={`${Blog2}`} alt="" />
                    <div className="languges">
                        <span id="green">NodeJS</span>
                    </div>
                    <div className="blog_title">Awesome Terminal Applications</div>
                    <div className="blog_description">
                        This is a curated list of some useful terminal apps and how to use them.
                    </div>
                    <div className="blog_date">November 12, 2023</div>
                </div>
                <div className="bog3 Blog">
                    <img src={`${Blog3}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        How To Choose Data Fetching Strategies In NextJS
                    </div>
                    <div className="blog_description">Explained with real-world examples</div>
                    <div className="blog_date">November 10, 2023</div>
                </div>
                <div className="bog4 Blog">
                    <img src={`${Blog4}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">React useState hook from scratch</div>
                    <div className="blog_description">
                        Let's learn the fundamentals of ReactJS
                    </div>
                    <div className="blog_date">November 4, 2023</div>
                </div>
                <div className="bog5 Blog">
                    <img src={`${Blog5}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">The Greatest React Developer I Ever Met</div>
                    <div className="blog_description">
                        We had our differences but still...
                    </div>
                    <div className="blog_date">October 26, 2023</div>
                </div>
                <div className="bog6 Blog">
                    <img src={`${Blog6}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">Single Table Design with DynamoDB</div>
                    <div className="blog_description">
                        The anatomy of the single-table design approach. Is it any good?
                    </div>
                    <div className="blog_date">October 5, 2023</div>
                </div>
                <div className="bog7 Blog">
                    <img src={`${Blog7}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        Developing a Powerful Alert System Using React Context API
                    </div>
                    <div className="blog_description">
                        A practical example of React’s Context API in action
                    </div>
                    <div className="blog_date">October 1, 2023</div>
                </div>
                <div className="bog8 Blog">
                    <img src={`${Blog8}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">Google Place Search in React</div>
                    <div className="blog_description">
                        Implement google's place search API easily.
                    </div>
                    <div className="blog_date">September 19, 2023</div>
                </div>
                <div className="bog9 Blog">
                    <img src={`${Blog9}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        My Frustrations With the Context API in React
                    </div>
                    <div className="blog_description">
                        And why I am going with Redux for my next project
                    </div>
                    <div className="blog_date">September 13, 2023</div>
                </div>
                <div className="bog10 Blog">
                    <img src={`${Blog10}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        21 Best Practices for Handling Passwords in Web Applications
                    </div>
                    <div className="blog_description">Build secure apps</div>
                    <div className="blog_date">August 25, 2023</div>
                </div>
                <div className="bog11 Blog">
                    <img src={`${Blog11}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        Top 7 Libraries for Blazingly Fast ReactJS Applications
                    </div>
                    <div className="blog_description">
                        Some must-have tools for a rock-star developer
                    </div>
                    <div className="blog_date">August 18, 2023</div>
                </div>
                <div className="bog12 Blog">
                    <img src={`${Blog12}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        21 Best Practices for a Clean React Project
                    </div>
                    <div className="blog_description">
                        Practical advice for improving code quality
                    </div>
                    <div className="blog_date">August 3, 2023</div>
                </div>
                <div className="bog13 Blog">
                    <img src={`${Blog13}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        How to Use React Hook Form with TypeScript
                    </div>
                    <div className="blog_description">
                        Build Performant and Clean Forms for Your Web Application
                    </div>
                    <div className="blog_date">August 1, 2023</div>
                </div>
                <div className="bog14 Blog">
                    <img src={`${Blog14}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        Applying the Open-Closed Principle To Write Clean React Components
                    </div>
                    <div className="blog_description">
                        A look at the SOLID principles in action
                    </div>
                    <div className="blog_date">August 1, 2023</div>
                </div>
                <div className="bog15 Blog">
                    <img src={`${Blog15}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        How To Improve Rendering Performance in a 1,000-Item React List
                    </div>
                    <div className="blog_description">
                        Let’s ensure that our web apps scroll efficiently
                    </div>
                    <div className="blog_date">July 30, 2023</div>
                </div>
                <div className="bog16 Blog">
                    <img src={`${Blog16}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        Apply the Dependency Inversion Principle in React
                    </div>
                    <div className="blog_description">
                        Your React component knows too much. Let’s fix that
                    </div>
                    <div className="blog_date">July 22, 2023</div>
                </div>
                <div className="bog17 Blog">
                    <img src={`${Blog17}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        A Complete Guideline to Creating a Modern React App With TypeScript From
                        Scratch
                    </div>
                    <div className="blog_description">
                        You’re about to love create-react-app even more
                    </div>
                    <div className="blog_date">July 8, 2023</div>
                </div>
                <div className="bog18 Blog">
                    <img src={`${Blog18}`} alt="" />
                    <div className="languges">
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                        <span>ReactJS</span>
                    </div>
                    <div className="blog_title">
                        How to Apply Interface Segregation Principle in ReactJS
                    </div>
                    <div className="blog_description">SOLID principles in action</div>
                    <div className="blog_date">July 4, 2023</div>
                </div>
            </section>
        </>
    )
}

export default Blog