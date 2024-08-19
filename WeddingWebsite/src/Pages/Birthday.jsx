import React, { useEffect } from 'react';
import "./Pages.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css"; 


const Birthday = () => {

  return (
    <div className="container">
      <h2 className="section__header" id="abcd">Birthday Photos</h2>
      <div className="service__card">
        <p>Click on the photos to start the slideshow.</p>
      </div>

      <div className="container-fluid">
        <div className="row mt-4">
          {[
            "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"
          ].map((num) => (
            <div className="item col-sm-3 col-md-3 col-3 mb-3 responsive" key={num}>
              <a
                href={`https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%20${num}.jpg?updatedAt=1723875144514`}
                data-fancybox="gallery1"
              >
                <img
                  src={`https://ik.imagekit.io/apm2002/Photos/Birthday/Birthday%20${num}.jpg?updatedAt=1723875144514`}
                  alt={`photo ${num}`}
                  width="100%" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Birthday;
