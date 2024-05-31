import React from "react";

const QuickLinks = ({
  links,
  onLinkClick,
}: {
  links: any;
  onLinkClick: any;
}) => {
  return (
    <div className="w-full sm:w-[32rem] pt-8">
      <div className="flex flex-wrap justify-around gap-2">
        {links.map((link: { url?: string; name: string }) => (
          <div
            key={link.name}
            className="border border-stone-500 rounded-xl shadow-lg p-4 w-full sm:w-1/3 md:w-1/5 flex items-center justify-center text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl hover:dark:bg-gray-700"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onLinkClick(link.url)}
              className="hover:border-text-blue-500 truncate"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
