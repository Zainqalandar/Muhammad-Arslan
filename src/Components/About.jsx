import React from 'react'
import './About.css'
import Arslan from '../assets/img/Hafiz.png'
import Banner from '../assets/img/buyMe.webp'
function About() {
    return (
        <div className="about_main">
            <section className="left__contianer">
                <div className="intro__box">
                    <div className="intro_pic">
                        <div className="my__pic">
                            <img src={`${Arslan}`} alt="" />
                        </div>
                    </div>
                    <div className="intro__detail">
                        <h1>Who I am</h1>
                        <p>
                            Hi, I am Hafiz Arslan, A freelancer {" "}
                            <a href="" className="text_bold decorate-none">
                                @Cruise
                            </a>{" "}
                            , working remotely from a small but beautiful country named
                            Sheikhpura.
                        </p>
                        <p>
                            I am most experienced <br /> in{" "}
                            <a href="" className="text_bold decorate-none">
                                {" "}
                                ReactJS{" "}
                            </a>{" "}
                            ,{" "}
                            <a href="" className="text_bold decorate-none text-green">
                                NodeJS
                            </a>{" "}
                            and{" "}
                            <a href="" className="text_bold decorate-none text-orang-blur">
                                AWS
                            </a>
                        </p>
                    </div>
                    <div className="social__detail">
                        <div className="buy__me">
                            <img width="200px" height="50px" src={`${Banner}`} alt="" />
                        </div>
                        <div className="social__links-about">
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </div>
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 576 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </div>
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                                </svg>
                            </div>
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                                </svg>
                            </div>
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 384 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path>
                                </svg>
                            </div>
                            <div className="social__link">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="cursor-pointer mx-4 text-2xl bg-grey-50"
                                    height={24}
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="right__contianer">
                <div className="technical__detail">
                    <h1>What do I do</h1>
                    <div className="technical-box1">
                        <h2>Back-End Developer with Python</h2>
                        <p>
                            I love to write code. I love to Data analysis. This is the most
                            important thing that I do. Currently I am working remotely at{" "}
                            <a href="" className="text_bold">
                                @Cruise
                            </a>
                            .
                        </p>
                    </div>
                    <div className="technical-box2">
                        <h2>Technical Writer</h2>
                        <p>
                            I started writing as a hobby and it has given me a huge return! Over 1
                            million people have read my articles on{" "}
                            <a href="" className="text_bold text-black">
                                Medium
                            </a>{" "}
                            and{" "}
                            <a href="" className="text_bold text-black">
                                Dev.to
                            </a>
                            .
                            <br />
                            <br />I also have Content Partnership{" "}
                            <a href="" className="text_bold">
                                withLogRocket
                            </a>{" "}
                            ,{" "}
                            <a href="" className="text_bold">
                                Toptal Blog
                            </a>{" "}
                            ,{" "}
                            <a href="" className="text_bold text-black">
                                SemaPhoreCI
                            </a>{" "}
                            <a href="" className="text_bold text-black">
                                Blog
                            </a>
                            <a href="" className="text_bold text-black">
                                Highlight.io Blog
                            </a>{" "}
                            and{" "}
                            <a href="" className="text_bold text-blur">
                                Pieces Blog
                            </a>
                        </p>
                    </div>
                    <div className="technical-box3">
                        <h2>Youtube Channel</h2>
                        <p>
                            Like everybody else I have a{" "}
                            <a href="https://www.youtube.com/channel/UCVVXtYI5d9gwLvRMHJr_Vsg" target='_blank' className="text_bold text-red">
                                Youtube Channel
                            </a>{" "}
                            as well. I am not yet regular there and definitely not good at it yet
                            but I am trying :P
                        </p>
                    </div>
                    <div className="technical-box4">
                        <h2>Open source contributor</h2>
                        <p>
                            I have created some Template projects for ReactJS, NodeJS and AWS and
                            some people found those helpful. On my{" "}
                            <a href="" className="text_bold text-blur">
                                Github Profile
                            </a>
                            , You can see my most starred projects.
                        </p>
                    </div>
                    <div className="technical-box5">
                        <h2>StackOverflow contributor</h2>
                        <p>
                            I took a goal to reach 1500 contribution points on{" "}
                            <a href="" className="text_bold text-orang">
                                StackOverflowin
                            </a>{" "}
                            a month and did it. These days I am somewhat inactive but I enjoy the
                            process of helping others fun!
                        </p>
                    </div>
                    <div className="technical-box6">
                        <h2>I take interviews on my spare time</h2>
                        <p>
                            I am a trained Interview Engineer on{" "}
                            <a href="" className="text_bold text-blue-blur">
                                KARAT
                            </a>
                            . The tough vetting process taught me a lot and talking to a lot of
                            similar minded people is really really fun!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About