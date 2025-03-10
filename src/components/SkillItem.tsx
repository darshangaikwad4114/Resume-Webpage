import React from "react";

interface SkillItemProps {
  category: string;
  skills: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ category, skills }) => {
  return (
    <p>
      <span className="font-semibold text-gray-900 dark:text-white">
        {category}:
      </span>{" "}
      {skills}
    </p>
  );
};

export default SkillItem;
