import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./css/main.css";
import atrialogo from "./assets/atria_logo.png";
import atomlogo from "./assets/atom.svg";
import yesist from "./assets/yesist.png";
import { useInView } from "react-intersection-observer";
function App() {
  const [intro, setIntro] = useState(true);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setIntro(false);
    }, 2000);
  });

  return (
    <>
      {!inView ? (
        <AnimatePresence>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            target="_blank"
            rel="noreferrer"
            className="bottom-register"
            // ref={ref}
            // onClick={() =>
            //   window.open(
            //     "https://docs.google.com/forms/d/e/1FAIpQLScjSkBUJVz9y4iigQrFQIzHwdtz6fhEU-UTI9pexsBtcmREwg/viewform?usp=sf_link"
            //   )
            // }
            href="https://docs.google.com/forms/d/e/1FAIpQLScjSkBUJVz9y4iigQrFQIzHwdtz6fhEU-UTI9pexsBtcmREwg/viewform?usp=sf_link"
          >
            Register Now
          </motion.a>
        </AnimatePresence>
      ) : (
        <></>
      )}

      <div className="app">
        <div className="header">
          <AnimateSharedLayout type="switch">
            {intro ? (
              <motion.div className="intro">
                <motion.img
                  style={{ width: "100px", marginBottom: "10px" }}
                  layoutId="atrialogo"
                  src={atrialogo}
                  alt=""
                />
                <motion.span
                  initial={{ fontSize: "1rem" }}
                  animate={{ fontSize: "2rem", fontWeight: 600 }}
                  layoutId="subtitle"
                  className="subtitile"
                >
                  IEEE Atria Student Branch
                </motion.span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1 }}
                className="main"
              >
                <motion.div className="logos" style={{ marginBottom: "20px" }}>
                  <motion.img
                    style={{ width: "100px" }}
                    className="atrialogo"
                    layoutId="atrialogo"
                    src={atrialogo}
                    alt=""
                  />
                  <motion.img
                    className="yesist"
                    style={{ width: "200px", marginLeft: 20 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={yesist}
                    alt=""
                  />
                </motion.div>

                <motion.span
                  animate={{ fontSize: "1.2rem", fontWeight: 600 }}
                  layoutId="subtitle"
                  className="subtitile"
                >
                  IEEE Atria Student Branch
                </motion.span>
                <p className="small-title">Internationl Project Expo 2021</p>
                <p className="caps-title">JUNIOR EINSTEIN</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="register-button"
                  ref={ref}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScjSkBUJVz9y4iigQrFQIzHwdtz6fhEU-UTI9pexsBtcmREwg/viewform?usp=sf_link"
                >
                  Register Now
                </a>
                <p style={{ marginTop: 10, fontWeight: "bold" }}>
                  before 20th June
                </p>
              </motion.div>
            )}
          </AnimateSharedLayout>
          {!intro && (
            <motion.img
              animate={{ opacity: 1, x: "50%" }}
              initial={{ opacity: 0, x: "100%" }}
              className="atom-icon"
              src={atomlogo}
              alt=""
            />
          )}
        </div>
        <div className="about">
          <div>
            <h2>About YESIST12</h2>
            <p>
              Youth Endeavours For Social Innovation Using Sustainable
              Technology To unify social responsibility and ethics in young
              minds through activities and to encourage service-oriented
              engineering practice, YESIST 12 has started. An international
              talent show, IEEE YESIST 12 (YOUTH ENDEAVOURS FOR SOCIAL
              INNOVATION USING SUSTAINABLE TECHNOLOGY) (SS12) is a platform for
              the students and young professionals to showcase their fresh
              pristine ideas to find the key to humanitarian and social issues
              affecting directly the community around them. Looking back at the
              memorable starting point, YESIST12 was SS12 (meaning Saturday
              Sunday 12 hours) a humanitarian themed hackathon for students of
              the USA. Then it unfolded to Erode and Asia, now it has outspread
              to more than 9 countries, far-reaching 2000 above and beyond.
              Entailing many budding Innovators and entrepreneurs from around
              the world on building engineering solutions for the societal
              issues in various domains.
            </p>
          </div>

          <div style={{ marginTop: 20 }}>
            <h2>ABOUT JUNIOR EINSTEIN</h2>
            <p>
              Junior Einstein Track acts as a catalyst for innovation and
              provides a transformative opportunity to broaden the horizon of
              knowledge among the young curious minds and provide International
              Platform to the Budding Young Innovators. This initiative aims at
              empowering the next generation innovators, nurturing their ideas
              and increasing their thirst towards finding solutions to various
              social issues. This event makes an effort to harness the creative
              submissions and innovative spirit towards international Scientific
              and technological ideas/innovations from the school students of
              age 12 to 17 and to get rooted as one of the foremost project
              competitions in the global arena developing a robust scientific
              temper among the youth.
            </p>
          </div>
        </div>

        <div className="details">
          <ul style={{ marginTop: 0 }}>
            <h2>Junior Einstein Track Objectives</h2>
            <li>
              To create an international platform for the participants to
              showcase their talents, innovations and networking for fruitful
              collaborations and partnerships to achieve their future
              endeavours.
            </li>
            <li>
              To identify, recognize and motivate next-generation innovators to
              come up with a viable solution to social issues with their
              innovative ideas.
            </li>
            <li>
              To connect student innovators with potential technical knowledge
              and skills from Industry / Organizations.​
            </li>
            <li>
              To motivate students to develop products for societal requirements
              using STEM concepts which contribute to UN sustainable development
              goals.
            </li>
          </ul>

          <ul>
            <h2>Rules & General Procedure</h2>
            <li>Will be hosted virtually through Google Meet.</li>
            <li>Team size: Maximum of 4 members.</li>
            <li>
              Participant’s Age: 12 to 17 years. Proof for the same shall be
              submitted. (copy of Aadhar Card or Birth Certificate)
            </li>
            <li>
              Team members may come from different academic institutions/
              industries and from different countries. Only the registered
              members of the team will be given certificates. Mentor names
              should also accompany the team registration.
            </li>
            <li>
              Teams shall present their working projects virtually, explain and
              demonstrate to the audience and evaluators.
            </li>
            <li>
              The evaluation will be based on the following criteria: Novelty /
              Innovation, Participant’s knowledge on concept / market demand,
              Technical implementation, Expandability of the project idea /
              prototype to an actual product or solution, Clarity of pitch.
            </li>
            <li>
              Each team will be given 10 mins for the demonstration of their
              project.
            </li>
            <li>
              Each team is solely responsible for its own cooperation and
              teamwork.
            </li>
            <li>
              The projects can be a software solution or hardware integrated.
            </li>
            <li>
              Top 5 teams will qualify for the Finals, which will be hosted
              virtually in September 2021.
            </li>
            <li>Top 10 teams will win exciting prizes.</li>
            <li>
              “Certification of Achievement” will be given to Top 5 Teams.
            </li>
            <li>
              “Certificate of Recognition” will be given to all Participants.
            </li>
            <li>“Certificate of Appreciation” will be given to the Mentors.</li>
          </ul>
        </div>

        <div className="team"></div>
      </div>
    </>
  );
}

function MemberGrid({ members }: { members: any }) {
  return (
    <div className="members">
      {members.map((member: any, i: number) => (
        <Member key={i} {...member} />
      ))}
    </div>
  );
}
function Member({
  name,

  profile_img,
  role,
}: {
  name: string;

  profile_img: string;
  role: string;
}) {
  return (
    <div className="member">
      <div className="profile-img">
        <img src={profile_img} alt="raj" />
      </div>
      <div className="about">
        <h3>{name}</h3>
        <p>{role === "admin" ? "core" : role}</p>
      </div>
    </div>
  );
}

export default App;
