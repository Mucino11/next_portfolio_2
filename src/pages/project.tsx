import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  status: string;
  image: string;
  githubLink: string;
};

export default function Project() {
  const [additionalProjects, setAdditionalProjects] = useState<Project[]>([]);

  // Fetch the project data from the public folder
  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => {
        setAdditionalProjects(data.additionalProjects);
        // setProjects(data.projects); // Set initial projects as well
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Function to create and return a project card
  function createProjectCard(project: Project) {
    return (
      <article className="project-card" key={project.name}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>Status: {project.status}</p>
        <Image src={project.image} alt="project-img" width={400} height={400} />
        <a href={project.githubLink}>
          <button className="button-dark">See Project</button>
        </a>
      </article>
    );
  }
  return (
    <>
      <Navbar />
      <main className="project-main">
        <h1>Projects</h1>

        {/* This section is the grid layout that wraps all project cards */}
        <section className="grid-project-section">
          {/* Map over the additional projects and generate project cards */}
          {additionalProjects.map((project) => createProjectCard(project))}
        </section>
      </main>
      <Footer />
    </>
  );
}
