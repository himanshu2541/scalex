import React from "react";
import WorkPageTopBar from "../../components/work/WorkPageTopBar";

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
    <div className="max-w-screen-lg mx-auto mt-16 px-4 pb-16">
      <WorkPageTopBar title="Content Writing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contentWritingWorks.map((work) => (
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={work.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 hover:scale-105"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {work.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{work.desc}</p>

              {/* Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-accent text-white px-4 py-1 rounded-lg shadow hover:shadow-md hover:bg-green-700 transition opacity-0 group-hover:opacity-100">
                Read More
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContentWriting;
