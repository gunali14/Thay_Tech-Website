import React from 'react';
import './SoftwareDeveloper.css';

const SoftwareDeveloper: React.FC = () => {
    return (
        <>
            {/* Marketing Section */}
            <div className='body d-flex'>
      
            <div className="flex flex-row p-5">
              <div className="content p-10">
               <h1 className='text-blue-600 text-2xl'>Software</h1>
               <br></br>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
               Obcaecati quidem nostrum ea! Veniam, accusamus? Tempore <br></br>libero recusandae id temporibus voluptas dolorem. Laudantium fugiat, cumque cum aliquid temporibus error ullam vel!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Tempora distinctio nihil provident numquam quis magnam repellendus quasi nostrum eveniet minima obcaecati architecto minus libero harum maiores ipsa, dolor necessitatibus vel.
              </div>
              <div className="img p-10">
              <img src="public/Software-Logos/img-1.png" alt="Marketing" />
              </div>
            </div>
            <div className="flex flex-row-reverse p-5">
              <div className="content p-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora distinctio nihil provident numquam quis magnam repellendus quasi nostrum eveniet minima obcaecati architecto minus libero harum maiores ipsa, dolor necessitatibus vel.
              </div>
              <div className="img p-10">
              <img src="public/Software-Logos/img-1.png" alt="Marketing" />
              </div>
            </div>
            <div className="flex flex-row p-5">
              <div className="content p-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora distinctio nihil provident numquam quis magnam repellendus quasi nostrum eveniet minima obcaecati architecto minus libero harum maiores ipsa, dolor necessitatibus vel.
              </div>
              <div className="img p-10">
              <img src="public/Software-Logos/img-1.png" alt="Marketing" />
              </div>
            </div>
            </div>
        </>
    );
};

export default SoftwareDeveloper;
