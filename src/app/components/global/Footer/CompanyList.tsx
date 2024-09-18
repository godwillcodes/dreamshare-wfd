import React from 'react';

// Sample JSON data for company links
const companyLinks = [
  { name: "About Us", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Press", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Terms & Condition", url: "#" },
  { name: "Help", url: "#" }
];

const CompanyList: React.FC = () => {
  return (
    <ul className="font-roboto space-y-3 text-center items-center md:items-start md:text-left flex md:block">
      {companyLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className="text-black hover:underline-offset-8 hover:underline hover:text-red-500 text-base"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
