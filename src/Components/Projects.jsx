import React from 'react'
import './Projects.css'
function Projects() {
    return (
        <>
            <>
                <h1 className="project_heading">Projects that I've worked on</h1>
                <section className="Projects_detail">
                    <div className="project_detail_grid">
                        <div className="project1">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Starfleet</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Driverless vehicle fleet monitoring tool
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Designing and building new components
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing unit tests using Jest
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Using Redux to manage state
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue-over">Typescript</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">GCP</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div id="no_internet"> Not available (Internal)</div>
                                </div>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Fleet Ops</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Core service to manage and monitor AV
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Create new API endpoints
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Unit and integration tests
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing database queries for PostgreSQL
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav>ExpressJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue-over">Kubernetes</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue">PostgreSQL</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div id="no_internet"> Not available (Internal)</div>
                                </div>
                            </div>
                        </div>
                        <div className="project3">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>CSO</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Road safety monitoring application
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing business logic using AWS Lambda
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Creating API using API gateway
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing performant queries for DynamoDB
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav>NodeJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">Lambda</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue-over">DynamoDB</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project4">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>PianoTrax</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Music selling website</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Building the website from scratch
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrate Payment gateway using Stripe
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Improving performance and load time
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue-over">NextJS</nav>
                                    </a>
                                    <a href="">
                                        <nav>NodeJS</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project5">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Winter Wonderland</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Event Management Platform</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Building serverless backend architecture
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing API using AWS Lambda
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Deploy and monitor backend service
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">CDK</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">Lambda</nav>
                                    </a>
                                    <a href="">
                                        <nav>MongoDB</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project6">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>DRM</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Traffic analysis platform</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing UI components
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing API using AWS Lambda
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Interacting with DynamoDB and S3
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">AWS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">Lambda</nav>
                                    </a>
                                    <a href="">
                                        <nav>DynamoDB</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project7">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>MFS Portal</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Fintech software</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Build the architecture from scratch
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Design and implementing REST API
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Refactor legacy code
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav>NodeJS</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project8">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Rokkhi Backend</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Security management platform</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Designing and building REST API
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Using PostgreSQL and Redis as database
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Create CI/CD pipeline using Docker+ECS
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-green">NodeJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">AWS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-blue">PostgreSQL</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project9">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Rokkhi Home</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Customer panel for security platform
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Building scalable architecture using Redux
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Implement Authentication and roles
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Creating CI/CD pipelines using AWS S3
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-orange">AWS</nav>
                                    </a>
                                    <a href="">
                                        <nav>DynamoDB</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project10">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>E-commerce Template</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Open source e-commerce application
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Creating API for admin and users
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrate payment system
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrate docker
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-green">ExpressJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-black">OpenSource</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project11">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Dingi RMS</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Vehicle Tracking System</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Manage front-end
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Implementing Vehicle Tracking
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrate payment service
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">ReactJS</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project12">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Ecommerce front-end</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Open source e-commerce front-end</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Re-usable UI using styled components
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Authentication, cart and order
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Admin panel and authentication
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">ReactJS</nav>
                                    </a>
                                    <a href="">
                                        <nav id="text-black">OpenSource</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project13">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Dingi Map</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Demo of Dingi map SDK</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Use existing SDK
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Modify mapbox sdk to improve performance
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Implement routing and searching
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">ReactJS</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project14">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Lanka-bangla sales portal</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Fintech sales management</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Building re-usable ui
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Implementing role and reporting
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Improving performance
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue">ReactJS</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project15">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Dingi Map SDK</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">Javascript SDK for map</h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Understanding Mapbox SDK
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Implementing token based auth
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Improving performance
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">Typescript</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                        <div className="project16">
                            <div className="project__banner">
                                <svg
                                    className="w-6 h-6 fill-current text-white dark:text-gray-800"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14 11H10V13H14V11Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                                    />
                                </svg>
                                <div>Material UI+ Hook Form</div>
                            </div>
                            <div className="project_body">
                                <h1 className="project-heading">
                                    Integration with Material UI with Hook form
                                </h1>
                                <h3> Contributions</h3>
                                <div className="project_body__grid">
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrating typescript
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Integrating Jest
                                    </div>
                                    <div>
                                        <span>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                className="w-3 h-3"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </span>
                                        Writing a blog post
                                    </div>
                                </div>
                                <h3> Technologies</h3>
                                <div className="technologies_container">
                                    <a href="">
                                        <nav id="text-blue-over">Typescript</nav>
                                    </a>
                                </div>
                                <div className="project_link">
                                    <a href="">
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                                            <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                                        </svg>
                                    </a>
                                    <div>Demo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default Projects