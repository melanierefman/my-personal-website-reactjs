import HeroImage from '../assets/me2.png'
import AboutImage from '../assets/me3.png'
import React from '../assets/react.svg'
import CodeIgniter from '../assets/codeigniter.svg'
import DRPM from '../assets/web/drpm.png'
import RH from '../assets/web/rh.png'
import AKM from '../assets/web/akm.png'
import ChatApp from '../assets/web/chatting-app.png'
import Elearning from '../assets/portfolio.png'
import SREITS from '../assets/web/sreitssc.png'
import ICW2023 from '../assets/web/icw2023.png'
import ITSEXPO from '../assets/web/itsexpo2023.png'
import Njahit from '../assets/web/njahit.png'
import Traveloka from '../assets/web/traveloka.png'
import CaffeIjjo from '../assets/web/caffeijjo.png'
import ITS from '../assets/its.jpg'

const HomePage = () => {
  return (
    <div>
        {/* Hero Section */}
        <section id="home" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="block font-bold text-primary
                        text-4xl leading-8 mt-1 mb-4 lg:text-5xl">Hi, <span className="text-dark">I'm Melanie</span><span className="animate-shake">👋</span></h1>
                        <h2 className="text-base text-secondary mb-4 leading-relaxed lg:text-lg">A 6th-semester Informatics Engineering undergraduate at Institut Teknologi Sepuluh Nopember. I have a keen interest and proficiency in <span className="text-dark font-medium">Web Development</span> and <span className="text-dark font-medium">UI/UX Design</span>.</h2>

                        <div className="flex items-center">
                            {/* Email */}
                            <a href="#" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" className="fill-current">
                                    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                </svg>
                            </a>
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/melanierefman/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" className="fill-current">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/melanierefman" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64" className="fill-current">
                                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src={HeroImage} alt="Melanie Sayyidina Sabrina Refman" className="max-w-full mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-8">
                        <h4 className="font-semibold text-lg text-primary mb-2">About Me</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Curious about me?</h2>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-12 lg:w-1/2">
                        <div className=" relative mt-10 lg:mt-9 lg:right-0">
                            <img src={AboutImage} alt="Melanie Sayyidina Sabrina Refman" className="max-w-full mx-auto"/>
                        </div>
                    </div>
                    <div className="w-full px-4 py-8 lg:w-1/2">
                        <h2 className="text-base text-secondary leading-relaxed mb-4 lg:text-lg">Hello! I'm Melanie Sayyidina Sabrina Refman, an enthusiastic web developer. Currently, I am a sixth-semester student majoring in Informatics Engineering at the Sepuluh Nopember Institute of Technology.</h2>
                        <h2 className="text-base text-secondary leading-relaxed mb-4 lg:text-lg">Initially, my interest was solely focused on UI/UX design due to my passion for design. I've gained some experience in that field. Over time, I began studying web programming and framework-based programming during my academic journey. This sparked my interest in developing my skills in web development to create dynamic and interactive web experiences.</h2>
                        <h2 className="text-base text-secondary leading-relaxed mb-4 lg:text-lg">I enjoy the challenge of combining my design skills with the technical aspects of web development, experimenting with various programming languages, and bringing ideas to life in the digital realm. Although I am still a novice in web development, I am committed to continuous learning and growth.</h2>
                        <h2 className="text-base text-secondary leading-relaxed mb-4 lg:text-lg">Feel free to explore my evolving portfolio, showcasing my passion for Web Development and UI/UX. If you are interested in collaboration, please don't hesitate to contact me.</h2>
                        <h2 className="text-base text-secondary leading-relaxed mb-8 lg:text-lg">Thank you for your time!</h2>
                        
                        <a href="img/CV-Melanie Sayyidina Sabrina Refman.pdf" download>
                            <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                            Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Skills</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Things That I'm Good at</h2>
                        <p className="font-medium text-md text-secondary">Here's a quick peek at the skills I've picked up and refined, showing that I'm pretty good at web and design.</p>
                    </div>
                </div>
                <div className="flex flex-wrap mb-4 items-center justify-center">
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* HTML */}
                            <a href="#" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* CSS */}
                            <a href="#" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Javascript */}
                            <a href="#" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* PHP */}
                            <a href="https://www.php.net/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 80 80">
                                    <path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"></path><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"></path><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"></path><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"></path></g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* MySQL */}
                            <a href="https://www.mysql.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"></path><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"></path><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"></path><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"></path><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Typescript */}
                            <a href="#" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Boostrap */}
                            <a href="https://getbootstrap.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"></path><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#f1e5fc"></stop></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Tailwind */}
                            <a href="https://tailwindcss.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* VueJs */}
                            <a href="https://vuejs.org/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <linearGradient id="jOxEAtqKLV9JfRrHHmqLMa_BUnExfsRs3CW_gr1" x1="3.381" x2="44.593" y1="25.73" y2="25.73" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c481"></stop><stop offset="1" stopColor="#21a366"></stop></linearGradient><path fill="url(#jOxEAtqKLV9JfRrHHmqLMa_BUnExfsRs3CW_gr1)" d="M23.987,17l-5.094-8.727C18.795,8.104,18.614,8,18.418,8H3.931	C3.507,8,3.243,8.46,3.457,8.827l20.056,34.36c0.212,0.363,0.737,0.363,0.949,0l20.056-34.36C44.731,8.46,44.467,8,44.043,8H29.556	c-0.195,0-0.376,0.104-0.475,0.273L23.987,17z"></path><linearGradient id="jOxEAtqKLV9JfRrHHmqLMb_BUnExfsRs3CW_gr2" x1="11.146" x2="36.828" y1="19" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".189" stopColor="#313437"></stop><stop offset="1" stopColor="#45494d"></stop></linearGradient><polygon fill="url(#jOxEAtqKLV9JfRrHHmqLMb_BUnExfsRs3CW_gr2)" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon><polygon fill="none" points="23.987,30 36.828,8 29.24,8 23.987,17 18.734,8 11.146,8"></polygon><polygon fill="none" points="28.082,8 19.892,8 23.987,15.016"></polygon><path d="M37.26,8.252l-12.841,22l-0.432,0.74l-0.432-0.74l-12.841-22L10.567,8H9.988l0.294,0.504l12.841,22	l0.864,1.48l0.864-1.48l12.841-22L37.986,8h-0.579L37.26,8.252z M36.828,9h0.005H36.828z" opacity=".05"></path><polygon points="36.828,8 23.987,30 11.146,8 10.567,8 10.714,8.252 23.555,30.252 23.987,30.992 24.419,30.252 37.26,8.252 37.407,8 36.833,8" opacity=".07"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* React */}
                            <a href="https://react.dev/" target="_blank" className="justify-center items-center">
                                <img src={React} alt="Codeigniter" width="60" height="60"/>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Figma */}
                            <a href="https://www.figma.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Github */}
                            <a href="https://github.com" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 64 64" className="fill-current">
                                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Gitlab */}
                            <a href="https://about.gitlab.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
                                    <path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Codeigniter */}
                            <a href="https://codeigniter.com/" target="_blank" className="justify-center items-center">
                                <img src={CodeIgniter} alt="Codeigniter" width="60" height="60"/>
                            </a>
                        </div>
                    </div>
                    <div className="px-4 py-4 items-center justify-center">
                        <div className="bg-white py-4 px-6 rounded-xl shadow-lg overflow-hidden">
                            {/* Wordpress */}
                            <a href="https://wordpress.com/" target="_blank" className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="72" viewBox="0 0 48 48">
                                    <linearGradient id="ezltMdBuodGDdUF~YSi~Aa_v9uZbuVoWleB_gr1" x1="10.608" x2="35.821" y1="4.776" y2="40.968" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9"></stop><stop offset="1" stopColor="#16528c"></stop></linearGradient><path fill="url(#ezltMdBuodGDdUF~YSi~Aa_v9uZbuVoWleB_gr1)" d="M24,4C12.97,4,4,12.976,4,24s8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4z"></path><path d="M24,43.001C13.521,43.001,4.995,34.477,4.995,24c0-10.476,8.525-18.999,19.004-18.999	c10.48,0,19.006,8.523,19.006,18.999C43.005,34.477,34.479,43.001,24,43.001z M20.778,38.651C21.83,38.883,22.912,39,24.001,39	c1.344,0,2.682-0.181,3.984-0.539l-3.676-10.072L20.778,38.651z M9.416,20.488C9.14,21.632,9.001,22.808,9.001,24	c0,4.864,2.259,9.284,6.111,12.093L9.416,20.488z M38.753,21.289c-0.211,0.895-0.507,1.818-0.893,2.783l-3.829,11.082	C37.169,32.322,39,28.265,39,24C39,23.088,38.917,22.182,38.753,21.289z M20.025,30.673l2.442-7.328l-2.265-6.308	c-0.613-0.051-1.086-0.112-1.086-0.112c-0.854-0.053-1.5-0.783-1.47-1.694c0.03-0.921,0.735-1.616,1.641-1.616l0.222,0.014	c1.825,0.125,3.188,0.188,4.051,0.188c1.606,0,4.162-0.195,4.188-0.197c0.001,0,0.002,0,0.003,0c1.006,0,1.715,0.637,1.77,1.549	c0.045,0.76-0.455,1.633-1.473,1.757c-0.078,0.009-0.294,0.034-0.596,0.062l4.483,13.401l0.693-2.308	c0.786-2.016,1.177-3.647,1.177-4.888c0-1.386-0.644-2.439-1.211-3.368c-0.117-0.191-0.228-0.373-0.327-0.546l-0.197-0.318	c-0.778-1.26-1.511-2.449-1.511-3.931c0-1.329,0.831-2.61,2.067-3.307C30.121,9.961,27.091,9,24.001,9	c-4.183,0-8.113,1.719-10.948,4.751c1.342-0.057,2.676-0.159,2.693-0.16l0.134-0.005c0.882,0,1.588,0.668,1.641,1.554	c0.045,0.76-0.457,1.634-1.478,1.757c-0.068,0.008-0.285,0.033-0.592,0.062L20.025,30.673z" opacity=".05"></path><path d="M24,42.501C13.796,42.501,5.495,34.202,5.495,24c0-10.2,8.301-18.499,18.504-18.499	C34.203,5.501,42.505,13.8,42.505,24C42.505,34.202,34.204,42.501,24,42.501z M20.126,39.009c1.258,0.326,2.559,0.491,3.875,0.491	c1.571,0,3.128-0.238,4.637-0.709l-4.343-11.898L20.126,39.009z M9.365,18.892C8.791,20.532,8.501,22.245,8.501,24	c0,5.553,2.88,10.554,7.599,13.339L9.365,18.892z M38.622,18.85c-0.106,1.604-0.502,3.227-1.225,5.036l-4.404,12.743	C37.039,33.739,39.5,29.021,39.5,24C39.5,22.245,39.2,20.5,38.622,18.85z M20.026,32.253l2.971-8.915l-2.433-6.775	c-0.747-0.052-1.384-0.134-1.384-0.134c-0.606-0.039-1.055-0.537-1.034-1.182c0.021-0.646,0.512-1.132,1.141-1.132	c0.119,0.005,2.741,0.202,4.272,0.202c1.636,0,4.2-0.196,4.226-0.198c0.003,0,0.005,0,0.008,0c0.714,0,1.191,0.455,1.229,1.081	c0.033,0.545-0.312,1.143-1.034,1.23c-0.028,0.003-0.539,0.064-1.211,0.114l5.185,15.498l1.146-3.816	c0.8-2.048,1.198-3.728,1.198-5.032c0-1.527-0.712-2.693-1.285-3.629c-0.114-0.187-0.223-0.364-0.32-0.534l-0.205-0.332	c-0.739-1.197-1.437-2.328-1.437-3.669c0-1.431,1.13-2.757,2.557-3.191C30.893,9.678,27.52,8.5,24.001,8.5	c-4.695,0-9.141,2.146-12.074,5.785c1.621-0.024,3.834-0.194,3.858-0.196l0.094-0.003c0.624,0,1.104,0.456,1.142,1.083	c0.033,0.546-0.313,1.144-1.039,1.231c-0.027,0.003-0.535,0.064-1.208,0.114L20.026,32.253z" opacity=".07"></path><path fill="#fff" d="M23.999,6.001c-9.93,0-18.004,8.075-18.004,17.999S14.072,42.001,24,42.001	c9.929,0,18.005-8.077,18.005-18.001S33.929,6.001,23.999,6.001z M8.001,24c0-2.324,0.497-4.521,1.384-6.512L17.019,38.4	C11.681,35.806,8.001,30.336,8.001,24z M24.001,40c-1.57,0-3.084-0.226-4.52-0.652l4.8-13.952l4.918,13.477	c0.033,0.077,0.078,0.149,0.118,0.22C27.65,39.676,25.862,40,24.001,40z M26.095,16.085c0.962-0.047,1.832-0.152,1.832-0.152	c0.861-0.104,0.757-1.373-0.104-1.316c0,0-2.589,0.2-4.264,0.2c-1.569,0-4.217-0.2-4.217-0.2c-0.86-0.059-0.96,1.26-0.098,1.316	c0,0,0.818,0.106,1.679,0.152l2.603,7.248l-3.5,10.501l-5.931-17.778c0.964-0.047,1.828-0.152,1.828-0.152	c0.866-0.104,0.761-1.373-0.099-1.316c0,0-2.595,0.2-4.264,0.2c-0.304,0-0.383,0.035-0.611-0.039C13.848,10.666,18.612,8,24.001,8	c4.167,0,7.96,1.584,10.804,4.198c-0.071-0.002-0.135-0.008-0.206-0.008c-1.57,0-3.041,1.375-3.041,2.84	c0,1.315,0.763,2.423,1.576,3.752c0.607,1.062,1.67,2.435,1.67,4.412c0,1.375-0.405,3.095-1.219,5.175l-1.599,5.326L26.095,16.085z M32.047,37.835L36.932,23.7c0.913-2.286,1.219-4.109,1.219-5.737c0-0.586-0.037-1.135-0.108-1.645C39.289,18.604,40,21.219,40,24	C40,29.902,36.805,35.063,32.047,37.835z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-36 pb-32 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Experience</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Highlights of My Journey</h2>
                        <p className="font-medium text-md text-secondary">Here are my most recent experiences. These experiences have really played a big part in helping me grow personally and sharpen my skills.</p>
                    </div>
                </div>
                <div className="w-full px-16 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <div className="w-2xl mx-auto flex flex-col justify-between px-8 py-8 md:flex-row md:gap-8">
                            <div className="max-md:order-1 md:w-1/3">
                                <a href="https://www.instagram.com/its_campus/" target="_blank" className="mr-8 mb-2">
                                    <img src={ITS} alt="ITS" className="w-24"/>
                                </a>
                            </div>
                            <div className="max-md:order-3 md:w-2/3">
                                <h3 className="font-semibold text-xl text-dark mb-5">Website Administrator Intern</h3>
                                <ul className="list-disc text-dark">
                                    <li className="mb-4">Managed content for a website that includes information about the Satgas Kemanusiaan ITS.</li>
                                    <li className="mb-4">Created an attractive website design using Figma while considering optimal user experience.</li>
                                    <li>Developing landing pages and news pages that are attractive and responsive.</li>
                                </ul>
                            </div>
                            <div className="max-md:order-2 md:w-1/3">
                                <p className="text-base text-dark mb-5 md:text-right">Mar 2024 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-16 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <div className="w-2xl mx-auto flex flex-col justify-between px-8 py-8 md:flex-row md:gap-8">
                            <div className="max-md:order-1 md:w-1/3">
                                <a href="#" target="_blank" className="mr-8 mb-2">
                                    <img src="https://img.ws.mms.shopee.co.id/id-11134216-7r98s-lmzmrtbvchxd90" alt="RH by Rizka Haristi" className="w-16"/>
                                </a>
                            </div>
                            <div className="max-md:order-3 md:w-2/3">
                                <h3 className="font-semibold text-xl text-dark mb-5">Frontend Web Developer Intern</h3>
                                <ul className="list-disc text-dark">
                                    <li className="mb-4">Created an attractive and responsive landing page used to promote products released by RH using WordPress.</li>
                                    <li>Designed a landing page using Figma to create an appealing and functional appearance</li>
                                </ul>
                            </div>
                            <div className="max-md:order-2 md:w-1/3">
                                <p className="text-base text-dark mb-5 md:text-right">Feb 2024 - Apr 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-16 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <div className="w-2xl mx-auto flex flex-col justify-between px-8 py-8 md:flex-row md:gap-8">
                            <div className="max-md:order-1 md:w-1/3">
                                <a href="https://www.instagram.com/sre_its/" target="_blank" className="mr-8 mb-2">
                                    <img src="https://sreitsoprec.carrd.co/assets/images/image01.jpg?v=d0b2c816" alt="SRE ITS SC" className="w-16"/>
                                </a>
                            </div>
                            <div className="max-md:order-3 md:w-2/3">
                                <h3 className="font-semibold text-xl text-dark mb-5">IT DEV Staff</h3>
                                <ul className="list-disc text-dark">
                                    <li className="mb-4">Designed and implemented a UI for the SRE ITS SC web, with a primary focus on enhancing user experience.</li>
                                    <li>Spearheaded the development of design elements and web pages, ensuring consistency and maintaining the distinctive visual identity of the website.</li>
                                </ul>
                            </div>
                            <div className="max-md:order-2 md:w-1/3">
                                <p className="text-base text-dark mb-5 md:text-right">Aug 2023 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-16 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <div className="w-2xl mx-auto flex flex-col justify-between px-8 py-8 md:flex-row md:gap-8">
                            <div className="max-md:order-1 md:w-1/3">
                                <a href="https://www.instagram.com/icw.2024/" target="_blank" className="mr-8 mb-2">
                                    <img src="https://media.licdn.com/dms/image/D560BAQHIYgQjNZJyiA/company-logo_200_200/0/1682696058198?e=2147483647&v=beta&t=3bDhQFQjrQtVJi9fB0t522y6OcLgFvns1JJGbURSVhk" alt="ICW 2023" className="w-16"/>
                                </a>
                            </div>
                            <div className="max-md:order-3 md:w-2/3">
                                <h3 className="font-semibold text-xl text-dark mb-5">Web Developer</h3>
                                <ul className="list-disc text-dark">
                                    <li className="mb-4"> Designed and created optimal UI design for ICW 2023 web.</li>
                                    <li>Responsible for developing design elements and pages, maintaining consistency, and ensuring the overall visual identity of the website.</li>
                                </ul>
                            </div>
                            <div className="max-md:order-2 md:w-1/3">
                                <p className="text-base text-dark mb-5 md:text-right">Apr 2023 - Jun 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-16 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                        <div className="w-2xl mx-auto flex flex-col justify-between px-8 py-8 md:flex-row md:gap-8">
                            <div className="max-md:order-1 md:w-1/3">
                                <a href="https://www.expo-its.com/" target="_blank" className="mr-8 mb-2">
                                    <img src="img/itsexpo2023.png" alt="ITS EXPO 2023" className="w-16"/>
                                </a>
                            </div>
                            <div className="max-md:order-3 md:w-2/3">
                                <h3 className="font-semibold text-xl text-dark mb-5">Web Developer Staff</h3>
                                <ul className="list-disc text-dark">
                                    <li className="mb-4"> Developed and implemented a modern UI design for the ITS EXPO 2023 website.</li>
                                    <li>Guided the creation of design elements and web pages, emphasizing consistency and preserving the unique visual identity of the website.</li>
                                </ul>
                            </div>
                            <div className="max-md:order-2 md:w-1/3">
                                <p className="text-base text-dark mb-5 md:text-right">Jan 2023 - May 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Project Section */}
        <section id="project" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Project</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Discover My Work</h2>
                        <p className="font-medium text-md text-secondary">Check out some of the cool projects I've wrapped up. Each one shows my commitment to trying out new things and making them top-notch.</p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {/* DRPM ITS */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={DRPM} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block mb-3 font-semibold text-xl text-dark truncate">Satgas Kemanusiaan ITS</h3>
                                <p className="text-base text-secondary mb-8">This is the ITS Humanitarian Task Force website, which contains information about the background (about) and current news. 🌐 Currently, I am working on this project.</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">Wordpress</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://www.its.ac.id/kemanusiaan/id/beranda/" target="_blank" className="flex font-medium text-base text-dark hover:text-primary">Go to Website↗️</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rizka Haristi */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={RH} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block mb-3 font-semibold text-xl text-dark truncate">Eid Series Rizka Haristi</h3>
                                <p className="text-base text-secondary mb-8">This is the landing page for promoting the Eid Mubarak edition products from Rizka Haristi! 🎉 I'm thrilled to be working on this project and receiving positive feedback.</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">WordPress</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://ad.rizkaharisti.com/eid-series/" target="_blank" className="flex font-medium text-base text-dark hover:text-primary">Go to Website↗️</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* AKM */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={AKM} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3 className="block mb-3 font-semibold text-xl text-dark truncate">AKM Apps</h3>
                                <p className="text-base text-secondary mb-8">This project was the final assignment for the Knowledge-Based Engineering course, where the website was used to showcase results from values emitted by the ESP32. 🌐✨</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">Tailwind</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">PHP</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">MYSQL</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://github.com/melanierefman/esp32-wifi-database-rsbp" target="_blank" className="font-medium text-base text-dark hover:text-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chatting-Apps */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={ChatApp} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Chatting Apps</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Created a chat app for the Web Programming final project. Scored an A and feeling ecstatic about this achievement! 🚀📱 Unleashing my coding prowess was truly rewarding.</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">VueJS</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">Payload</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">Boostrap</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://github.com/melanierefman/chatting_app-vuejs-pweb" target="_blank" className="font-medium text-base text-dark hover:text-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* E-Learning */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Elearning} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">E-Learning</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Cooked up an e-learning app based on a real-life case. Final project for the framework-based programming course, snagged an A! 🚀📚 Thrilled with the accomplishment!</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">CodeIgniter</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">PHP</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">MYSQL</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://github.com/melanierefman/elearning-fp-pbkk" target="_blank" className="font-medium text-base text-dark hover:text-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SRE ITS SC 2023 */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={SREITS} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">SRE ITS SC</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Collaborated with my team to craft user-friendly desktop and mobile interfaces, prioritizing the audience's needs. 🌟</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">UI Design</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    {/* <a href="https://www.figma.com/file/c9BUe69yaJbdLNtbo3H5wW/ICW-2023?type=design&node-id=2307%3A5644&mode=design&t=cL96oXx0N1cUynwE-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a> */}
                                    <a href="https://www.sre-its.com/" target="_blank" className="flex font-medium text-base text-dark hover:text-primary">Go to Website↗️</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ICW 2023 */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={ICW2023} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Indonesia Corrosion Week 2023</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Designed desktop and mobile interfaces with a user-centric approach, making sure they're just what the audience wants. 🚀</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">UI Design</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">UX Research</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://www.figma.com/file/c9BUe69yaJbdLNtbo3H5wW/ICW-2023?type=design&node-id=2307%3A5644&mode=design&t=cL96oXx0N1cUynwE-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a>
                                    <a href="https://www.indocor-its.com/icw" target="_blank" className="flex font-medium text-base text-dark px-4 hover:text-primary">Go to Website↗️</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ITS EXPO 2023 */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={ITSEXPO} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">ITS EXPO 2023</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Created desktop and mobile UIs together as a team. We collaborated to cook up some awesome designs! 🎨💻📱</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">UI Design</a>
                                    {/* <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">VueJs</a> */}
                                </div>
                                
                                <div className="flex items-center underline">
                                    {/* <a href="https://www.figma.com/file/Zety89JpQ9xMUG3DVFEjIR/ITS-EXPO-2023?type=design&node-id=846%3A3781&mode=design&t=sxWXFSt7tRK5eaVJ-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a> */}
                                    <a href="https://www.expo-its.com/" target="_blank" className="flex font-medium text-base text-dark hover:text-primary">Go to Website↗️</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Traveloka */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Traveloka} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Traveloka</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Giving Traveloka's desktop a makeover for my UI/UX final project – just leveling up my design game! 🚀✨</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">UI Design</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">UX Research</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://www.figma.com/file/Ro6aDkHjiXABMp8vj6LgSf/Traveloka?type=design&node-id=56%3A701&mode=design&t=6YtRsWouTOD1c8WG-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CaffeIjjo */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={CaffeIjjo} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">CaffeIjjo</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">This project was one of my finals for a course at uni, and you know what? I nailed it with an awesome A! 🌟 Crushing it!</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">UI Design</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">UX Research</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://www.figma.com/file/oeF7iNpH9P1CnTkAEcUwC6/CaffeIjjo?type=design&node-id=548%3A4310&mode=design&t=BOi02F4NaMaGN4TD-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Njahit */}
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                            <img src={Njahit} alt="Programming" className="w-full"/>
                            <div className="py-8 px-6">
                                <h3>
                                    <a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Njahit</a>
                                </h3>
                                <p className="text-base text-secondary mb-8">Whipped up this project with the squad to dive into a UI/UX design competition. Let's rock it together! 🚀🎨Team vibes strong!</p>
                                
                                <div className="mb-8">
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg mr-2">UI/UX Design</a>
                                    <a href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg">Design Thinking</a>
                                </div>
                                
                                <div className="flex items-center underline">
                                    <a href="https://www.figma.com/file/vsyin92wS22So4rjZXlhQf/Njahit?type=design&node-id=0%3A1&mode=design&t=hKHPcl86v1obc6Ls-1" target="_blank" className="font-medium text-base text-dark hover:text-primary">Figma</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage