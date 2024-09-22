import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Project = {
  name: string;
  description: string;
  status: string;
  image: string;
  githubLink: string;
};

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch the project data from the public folder
  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Function to create and return a project card
  function createProjectCard(project: Project) {
    return (
      <article className="project-card" key={project.name}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>Status: {project.status}</p>
        <img
          src={project.image}
          alt="project-img"
          style={{ width: "300px", height: "auto" }}
        />
        <a href={project.githubLink}>
          <button className="button-dark">Project on Github</button>
        </a>
      </article>
    );
  }

  return (
    <>
      <Navbar />
      <main className="project-main">
        <h1>My Projects</h1>
        {/* This section is the grid layout that wraps all project cards */}
        <section className="grid-project-section">
          {/* Map over the projects and generate project cards */}
          {projects.map((project) => createProjectCard(project))}
        </section>
      </main>
      <Footer />
    </>
  );
}