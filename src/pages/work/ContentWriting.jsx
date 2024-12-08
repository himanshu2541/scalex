import React from "react";
import { Link } from "react-router-dom";
import WorkTopBarLink from "../../components/work/WorkTopBarLink";

const contentWritingWorks = [
  {
    id: 1,
    title: "How to Improve Your Writing Skills",
    desc: "A comprehensive guide to enhance your writing skills with tips and techniques.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-1",
  },
  {
    id: 2,
    title: "The Art of Storytelling",
    desc: "Learn how to craft compelling stories that captivate your readers.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-2",
  },
  {
    id: 3,
    title: "SEO Writing Tips",
    desc: "Master the art of writing content that ranks well in search engines.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-3",
  },
  {
    id: 4,
    title: "How to Write Persuasive Copy",
    desc: "Learn the principles behind writing persuasive copy that converts readers into customers.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-4",
  },
  {
    id: 5,
    title: "Building a Personal Brand through Writing",
    desc: "How to use content writing to build and promote your personal brand.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-5",
  },
  {
    id: 6,
    title: "The Power of Headlines",
    desc: "Crafting catchy headlines that grab attention and drive traffic to your content.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-6",
  },
  {
    id: 7,
    title: "Content Marketing Strategy for Beginners",
    desc: "A beginner's guide to building an effective content marketing strategy for your business.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-7",
  },
  {
    id: 8,
    title: "How to Write Engaging Social Media Posts",
    desc: "Tips and tricks for writing social media posts that engage and resonate with your audience.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-8",
  },
  {
    id: 9,
    title: "Writing for the Web: Best Practices",
    desc: "Understanding the fundamentals of writing for the web and optimizing your content for readability.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-9",
  },
  {
    id: 10,
    title: "How to Write Effective Email Newsletters",
    desc: "Create impactful email newsletters that encourage subscribers to take action.",
    imgSrc: "/work/graphic_design/sample_img.jpg",
    link: "/content-writing/article-10",
  },
];

const ContentWriting = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Content Writing
      </h1>

      <Link
        to="/"
        className="inline-block text-sm text-black-accent hover:underline"
      >
        Back to Home
      </Link>

      {/* Links to Graphic Design and Web Development */}
      <div className="text-center mb-12">
        <WorkTopBarLink />
      </div>

      {/* Cards for Content Writing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contentWritingWorks.map((work) => (
          <div
            key={work.id}
            className="border border-gray-200 p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition flex flex-col"
          >
            <a
              href={work.link} // Make the entire card clickable
              target="_blank"
              className="flex flex-col h-full" // Make sure the link fills the whole card
            >
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-40 object-cover rounded-md"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold mt-4">{work.title}</h2>
              <p className="text-gray-600 flex-grow">{work.desc}</p>

              {/* Read Button */}
              <div className="mt-4 py-2 px-4 bg-green-accent text-white rounded-md text-center hover:bg-green-accent/80 transition w-fit">
                Read
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentWriting;
