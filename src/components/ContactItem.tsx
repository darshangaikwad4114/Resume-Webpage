import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ContactItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  external?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ href, icon, text, external = false }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-0.5 group" 
      target={external ? "_blank" : undefined} 
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${text}${external ? " (opens in new tab)" : ""}`}
    >
      <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" aria-hidden="true">
        {icon}
      </span>
      <span className="font-medium">{text}</span>
      {external && (
        <ExternalLink size={14} className="ml-0.5 opacity-70" aria-hidden="true" />
      )}
    </a>
  );
};

export default ContactItem;
