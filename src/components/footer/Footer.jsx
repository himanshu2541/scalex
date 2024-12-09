import React from "react";
import MaxWidthContainer from "../MaxWidthContainer";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FadeIn from "../animations/FadeIn";
import PopUp from "../animations/PopUp";
import workLinks from "../work/workLinks";
import { Link as InPageLink } from "react-scroll";
import { Link } from "react-router-dom";
import navLinks from "../navbar/navLinks";

const Footer = () => {
  const socialMedias = [
    { icon: FaFacebookF, href: "/" },
    { icon: FaInstagram, href: "/" },
    { icon: FaXTwitter, href: "/" },
    { icon: FaLinkedin, href: "/" },
  ];

  const footerItems = [
    {
      heading: "menu",
      content: navLinks.map((link) => ({ ...link, inPageLink: true })),
    },
    {
      heading: "pages",
      content: workLinks.map((work) => ({
        title: work.title,
        href: work.link,
      })),
    },
  ];
  return (
    <div className="bg-black/95 text-white">
      <MaxWidthContainer>
        <div className="px-10 py-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className=" col-span-1">
            <div className="flex flex-col gap-2">
              <FadeIn delay="0.2" duration="0.3" direction="down">
                <a href={"/"} className="cursor-pointer font-bold text-4xl">
                  Scalex
                </a>
              </FadeIn>
              <FadeIn delay="0.3" duration="0.3">
                <div>Build, engage and expand.</div>
              </FadeIn>
              <PopUp delay="0.3" duration="0.2">
                <div className="flex gap-3 mt-2 flex-wrap">
                  {socialMedias.map((link, i) => (
                    <a href={link.href} key={i}>
                      {
                        <link.icon
                          className="bg-white/20 cursor-pointer p-2 rounded-full"
                          size={35}
                        />
                      }
                    </a>
                  ))}
                </div>
              </PopUp>
            </div>
          </div>
          <div className=" col-span-2 flex gap-32 sm:gap-16 justify-start sm:justify-evenly">
            {footerItems.map((item, i) => (
              <div className="flex flex-col gap-6" key={i}>
                <FadeIn delay="0.2" duration="0.3" direction="down">
                  <div className="font-medium text-lg uppercase">
                    {item.heading}
                  </div>
                </FadeIn>
                <FadeIn delay="0.3" duration="0.3">
                  <ul className="flex flex-col gap-4 text-md text-white/80">
                    {item.content.map((link, i) => (
                      <li key={i}>
                        {/* <a href={link.href}>{link.title}</a> */}
                        {link.inPageLink ? (
                          <InPageLink
                            to={link.href}
                            offset={-150}
                            duration={500}
                            className="cursor-pointer"
                          >
                            {link.title}
                          </InPageLink>
                        ) : (
                          <Link to={link.href}>{link.title}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Footer;
