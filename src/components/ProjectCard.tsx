import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  liveLink: string;
  sourceLink: string;
  techStack: string;
  points: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  liveLink,
  sourceLink,
  techStack,
  points,
}) => {
  return (
    <div className="transition-all duration-300">
      <h3 className="font-semibold text-gray-900 dark:text-white flex flex-wrap items-center gap-x-1">
        <span>{title}</span> |
        <a
          href={liveLink}
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 inline-flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} live demo (opens in new tab)`}
        >
          Live
          <ExternalLink size={14} className="opacity-70" aria-hidden="true" />
        </a>{" "}
        |
        <a
          href={sourceLink}
          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 inline-flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} source code on GitHub (opens in new tab)`}
        >
          Source Code
          <ExternalLink size={14} className="opacity-70" aria-hidden="true" />
        </a>
      </h3>
      <p className="text-gray-700 dark:text-gray-300 italic mt-1">{`Tech Stack: ${techStack}`}</p>
      <ul className="list-disc ml-4 mt-3 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
