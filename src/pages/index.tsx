import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skill from "@/components/Skills";

type Project = {
  name: string;
  description: string;
  status: string;
  image: string;
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch the project data from the public folder
  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <section>
          <h1 className="project-section-h1">My Projects</h1>

          <section className="grid-project-section">
            {/* Map over the fetched projects and create project cards */}
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <h2 className="project-h2">Name: {project.name}</h2>
                <p>Description: {project.description}</p>
                <p>Status: {project.status}</p>
                <img
                  src={project.image}
                  alt={`${project.name} image`}
                  className="portfolio-image"
                />
              </article>
            ))}
          </section>

          <a href="/project">
            <button className="button-dark">See more projects</button>
          </a>
        </section>
        <section className="about-me-section">
          <img
            src="images/musa.jpeg"
            alt="Musa Jalloh"
            className="about-me-image"
          />
          <div className="about-me-content">
            <h2 className="about-me-h2">About Me</h2>
            <p className="about-me-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              libero dolor. Fusce consectetur turpis sapien, at convallis lorem
              ultrices vitae. Suspendisse sollicitudin congue magna non egestas.
              Pellentesque semper rhoncus libero non convallis. Integer eget
              ullamcorper risus. Ut diam risus, mollis quis lorem eget, ultrices
              imperdiet sapien. Nunc ultricies felis a risus ultricies porta.
              Sed placerat egestas massa a pellentesque. Proin nec nisl in odio
              lobortis porttitor. Fusce sodales leo purus, et auctor eros
              lobortis ut. Nunc consequat est ut dui ullamcorper ultrices.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <a href="resume">
              {" "}
              <button className="button-light">See resume</button>
            </a>
          </div>
        </section>
        <Skill />
      </main>

      <Footer />
    </div>
  );
}
