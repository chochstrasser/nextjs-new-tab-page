import React from "react";

const QuickLinks = ({
  links,
  onLinkClick,
}: {
  links: any;
  onLinkClick: any;
}) => {
  return (
    <div className="w-full max-w-96 pt-8">
      <div className="flex flex-wrap justify-around">
        {links.map((link: { url?: string; name: string }) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onLinkClick(link.url)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
