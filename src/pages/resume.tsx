import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skills";
import Image from "next/image";

export default function Resume() {
  return (
    <>
      <Navbar />
      <section className="resume">
        <div className="profile">
          <Image
            src="/images/musa.jpeg" // Ensure the path starts with "/"
            alt="Musa Jalloh"
            width={400} // Example width (adjust to your needs)
            height={400} // Example height (adjust to your needs)
            className="about-me-image"
          />
          <h1>Musa Jalloh</h1>
          <h2>
            <em>Web Developer and Designer</em>
          </h2>
          <p>
            I am Musa Jalloh, a third-year Information Systems student at
            Østfold University College, specializing in web development and
            cybersecurity. With leadership experience in roles like Assistant
            Head Chef and Team Leader, I bring strong problem-solving skills,
            teamwork, and a passion for software development to every project.
            My diverse background has equipped me with both technical and
            managerial expertise, making me a resourceful and hardworking
            contributor.
          </p>
        </div>
        <section />
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
