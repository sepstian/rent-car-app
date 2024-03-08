import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava05 from "../../assets/all-images/ava-5.jpg";
import ava07 from "../../assets/all-images/ava-7.jpg";
import ava10 from "../../assets/all-images/ava-10.jpg";

const OUR__MEMBERS = [
  {
    name: "Hilman Dzaki",
    experience: "8 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/hilmandzaki._/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava07,
  },

  {
    name: "Aaron Sava",
    experience: "7 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/aaronsnd_/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
  
  {
    name: "Hajar Ahmad",
    experience: "15 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/hajar_santos/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava10,
  },

  {
    name: "Dimas Salwa",
    experience: "7.5 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/dimassaft_/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Bagas Setya",
    experience: "7 years of experience",
    fbUrl: "#",
    instUrl: "https://www.instagram.com/bagasssetya/",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="member">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.fbUrl} target="_blank">
                  <i class="ri-facebook-line"></i>
                </a>
                <a href={item.twitUrl} target="_blank">
                  <i class="ri-twitter-line"></i>
                </a>

                <a to={item.linkedinUrl} target="_blank">
                  <i class="ri-linkedin-line"></i>
                </a>

                <a href={item.instUrl} target="_blank">
                  <i class="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
