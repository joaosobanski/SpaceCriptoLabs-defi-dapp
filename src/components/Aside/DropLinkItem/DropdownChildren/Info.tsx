import React from "react";
import LinkItem from "../../LinkItem/LinkItem";

const Info: React.FC = () => {
  const links = {
    github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    docs: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    blog: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    suport: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  return (
    <React.Fragment>
      <LinkItem text='Github' route='' icon={""} link={links.github} />
      <LinkItem text='Docs' route='' icon={""} link={links.docs} />
      <LinkItem text='Blog' route='' icon={""} link={links.blog} />
      <LinkItem text='Suport' route='' icon={""} link={links.suport} />
    </React.Fragment>
  );
};

export default Info;
