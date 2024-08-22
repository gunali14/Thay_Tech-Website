import React, { useEffect, useRef } from 'react';
import './SoftwareDeveloper.css';

const SoftwareDeveloper: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play();
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.5 } // Adjust this value if you want more or less of the video visible before it starts
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div className='body '>
                <div className="bg-[#F6F4EB] flex items-center p-5" style={{ height: "90vh" }}>
                    <div className="flex-1">
                        <h1 className="font-bold text-6xl mb-4 ml-20 animate-down-to-up">
                            <b>Software Development</b>
                        </h1>
                        <p
                            className="ml-20 mb-20 animate-down-to-up"
                            style={{ animationDelay: '0.5s' }}
                        >
                            Let decide on what you want. We will deliver what you need.
                        </p>
                    </div>
                    <div className="flex-1 text-right">
                        <img
                            src="public/Software-Logos/Netwoking.svg"
                            alt="Head Software Development"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
                {/* <h1 className='content text-5xl font-bold text-center mt-6'>We design tools to unveil
                your superpowers</h1> */}
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Transforming Ideas into Impactful Software Solutions</b></h1>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        At Thay Technologies, we are dedicated to crafting custom software solutions that drive business success. Our approach is rooted in deep technical expertise and a commitment to innovation, ensuring that the software we develop not only meets current needs but also anticipates future challenges.
                        </p>
                        <br />
                        <h2 className='text-gray-600 pb-3 text-xl'><b>The Essence of Software Development</b></h2>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                        Software development is a strategic process involving design, coding, testing, and deployment of applications tailored to solve specific business problems. At Thay Technologies, we blend creativity with rigorous engineering practices to deliver solutions that are robust, scalable, and aligned with your business objectives.
                        </p>
                       
                    </div>
                    <div className="img p-10">
                        <img src="public/Software-Logos/img3.jpg" alt="Marketing" />
                    </div>
                </div>
                <div className='reverse-content'>
                    <div className="content-box flex fade-in-section" >
                        <div className="img p-10">
                            <img src="public/Software-Logos/img4.jpg" alt="Marketing" />
                        </div>
                        <div className="content p-10">
                            <h1 className='text-gray-600 pb-3 text-3xl'><b>what we are ?</b></h1>
                            <p className='text-l text-justify whitespace-normal'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                                Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                            </p>
                            <br />
                            <b>application :</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                                adipisicing elit. Corrupti corporis aut nulla fugiat itaque molestias animi numquam minus. Velit obcaecati tenetur adipisci quae, et suscipit quasi esse consequuntur at debitis.
                                Lorem ipsum dolor sit amet
                            </p>
                            <br />
                            <b>software :</b>
                            <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                                consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-box flex fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-gray-600 pb-3 text-2xl'><b>Why us?</b></h1>
                        <p className='text-l text-justify whitespace-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                        </p>
                        <br />
                        <b>application :</b>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            adipisicing elit. Corrupti corporis aut nulla fugiat itaque molestias animi numquam minus. Velit obcaecati tenetur adipisci quae, et suscipit quasi esse consequuntur at debitis.
                            Lorem ipsum dolor sit amet
                        </p>
                        <br />
                        <b>software :</b>
                        <p className='text-l text-justify font-weight: 500  whitespace-normal'>
                            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                            Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                        </p>
                    </div>
                    <div className="img p-10">
                        <img src="public/Software-Logos/img4.jpg" alt="Marketing" />
                    </div>
                </div>
                <div>
                    <video
                        className="videoPlayer"
                        ref={videoRef}
                        src="/Software-Logos/Presentation.mp4"
                        muted
                    ></video>
                </div>
            </div>
        </>
    );
};

export default SoftwareDeveloper;
