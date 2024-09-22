import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skills";

export default function Resume() {
  return (
    <>
      <Navbar />
      <section className="resume">
        <div className="profile">
          <img src="/images/musa.jpeg" alt="Musa Jalloh" />
          <h1>Musa Jalloh</h1>
          <p>
            <em>Frontend Developer and Web Designer</em>
          </p>
          <p>
            I am a frontend software developer and web designer who loves
            driving and traveling to new countries.
          </p>
        </div>
        <section />{" "}
        {/* This section tag should be removed or closed properly */}
        <hr />
        <section className="education">
          <h2>Education</h2>
          <ul>
            <li>
              <span>Høyskole i Østfold</span>
              <span className="education-year">2023 - 2025</span>
            </li>
            <li>
              <span>Sonans Privat VGS</span>
              <span className="education-year">2022</span>
            </li>
            <li>
              <span>Metis Privat VGS</span>
              <span className="education-year">2021</span>
            </li>
            <li>
              <span>Åsane VGS</span>
              <span className="education-year">2020</span>
            </li>
            <li>
              <span>Nygård Skole</span>
              <span className="education-year">2019</span>
            </li>
          </ul>
        </section>
        <hr />
        <section className="education">
          <h2>Certificate</h2>
          <ul>
            <li>
              <span>Meta Frontend Development (Coursera)</span>
              <span className="education-year">2024</span>
            </li>
            <li>
              <span>Intro to UI/UX Design (Udemy)</span>
              <span className="education-year">2022</span>
            </li>
            <li>
              <span>The Complete Web Development (Udemy)</span>
              <span className="education-year">2022</span>
            </li>
          </ul>
        </section>
        <hr />
        <section className="work-experience">
          <h2>Work Experience</h2>
          <div className="grid-container">
            <div className="grid-item">
              <h3>Chef</h3>
              <p>Egon Restaurant</p>
              <p>2022-present</p>
            </div>
            <div className="grid-item">
              <h3>Assistant Head Chef</h3>
              <p>Egon Restaurant</p>
              <p>2021-2022</p>
            </div>
            <div className="grid-item">
              <h3>First Chef</h3>
              <p>Egon Restaurant</p>
              <p>2020-2021</p>
            </div>
            <div className="grid-item">
              <h3>Chef</h3>
              <p>Egon Restaurant</p>
              <p>2017-2019</p>
            </div>
          </div>
        </section>
        <hr />
        <Skill />
      </section>
      <Footer />
    </>
  );
}
