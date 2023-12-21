import React from 'react'
import Arslan from '../assets/img/Hafiz.png'
import { useEffect, useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["B.Sc. Chemical Engineer", "Data Analyst", "Operations & Supply Chain Manager", "Lean-Six Sigma Black Belt", " PMP Training Certificate", "ERP Specialist"];
    const period = 200;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText;
    
        if (isDeleting) {
            updatedText = fullText.substring(0, text.length - 1);
            setDelta(50); // Adjust the speed when deleting
        } else {
            updatedText = fullText.substring(0, text.length + 1);
            setDelta(150); // Adjust the speed when typing
        }
    
        setText(updatedText);
    
        if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(2000); // Pause for 2 seconds after completing a line
        } else if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(500); // Adjust the speed before starting to delete
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };
    
    console.log(text)
    return (
        <>
            <section className="home_main">
                <div className="my__pic">
                    <img src={`${Arslan}`} alt="" />
                </div>
                <article>
                    <h1>Hi, I'm Hafiz Arslan</h1>
                    <h2>{text} <span class="material-symbols-outlined">edit</span></h2>
                    <h4 className="dark:text-white">ReactJS | NodeJS | AWS</h4>
                    <Link to='/about'>
                        <button className="main_btn">
                            <div className="px-3"> Know More </div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </button>
                    </Link>
                </article>
            </section>
        </>
    )
}

export default Home