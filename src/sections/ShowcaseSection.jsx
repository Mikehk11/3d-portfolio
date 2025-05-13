import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const badhunterRef = useRef(null);
  const financeRef = useRef(null);
  const jiraRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [badhunterRef.current, financeRef.current, jiraRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* BADHUNTER */}
          <div ref={badhunterRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://badhunter-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src="/images/badhunter-preview.png" alt="BADHUNTER App" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Track Workouts Like Quests with BADHUNTER — a Gamified Fitness App
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with React, Firebase & Framer Motion to make fitness more engaging.
              </p>
            </div>
          </div>

          {/* FINANCE + JIRA */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={financeRef}>
              <div className="image-wrapper bg-[#D9F5FF]">
                <a
                  href="https://automate-finances-with-python-yjpq4ltjsuy3jaojebvege.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/finance-preview.png" alt="Finance Visualizer" />
                </a>
              </div>
              <h2>Finance Visualizer – Python Expense Tracker</h2>
            </div>

            <div className="project" ref={jiraRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://jira-clone-sigma-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/jira-preview.png" alt="Jira Clone" />
                </a>
              </div>
              <h2>Jira Clone – Workspace & Task Manager</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;