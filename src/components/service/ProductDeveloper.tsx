import React, { useEffect } from 'react';
import './SoftwareDeveloper.css';

const ProductDeveloper: React.FC = () => {

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
            {/* Marketing Section */}
            <div className='body'>

                <div className="flex p-5 fade-in-section">
                    <div className="content p-10">
                        <h1 className='text-blue-600 text-2xl'>Software</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                            Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                        </p>
                    </div>
                    <div className="img p-10">
                        <img src="public/Software-Logos/img-1.png" alt="Marketing" />
                    </div>
                </div>
                <div className='reverse-content'>
                 <div className="flex p-5 fade-in-section" >
                    <div className="img p-10">
                        <img src="public/Software-Logos/img-2.jpg" alt="Marketing" />
                    </div>
                    <div className="content p-10">
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                            Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                        </p>
                    </div>
                </div>
                </div>
                <div className="flex p-5 fade-in-section">
                    <div className="content p-10">
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae vel porro et hic impedit ullam soluta ipsum quos fugiat sit eum quidem ipsam laborum dicta dolorum, laudantium id odio.
                            Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                        </p>
                    </div>
                    <div className="img p-10">
                        <img src="public/Software-Logos/img3.jpg" alt="Marketing" />
                    </div>
                </div>
            
            </div>
        </>
    );
};

export default ProductDeveloper;
