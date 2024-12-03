import ButtonType1 from "../buttons/ButtonType1";
import { motion } from "framer-motion";
import { RiMenu4Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import FadeIn from "../animations/FadeIn";
import React, { useEffect, useRef, useState } from "react";

import { Link as InPageLink} from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { title: "Services", href: "services" },
    { title: "Impact", href: "impact" },
    { title: "Process", href: "process" },
    { title: "Work", href: "work" },
    { title: "About Us", href: "about" },
    { title: "FAQs", href: "faqs" },
    { title: "Contact", href: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const hamMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      y: -10,
    },
    open: {
      height: "auto",
      opacity: 1,
      y: 0,
    },
  };
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);


  return (
    <>
      <div
        className="flex h-24 items-center justify-center fixed top-0 inset-x-0 z-50 px-4 sm:px-8 md:px-12 "
        ref={menuRef}
      >
        <FadeIn
          direction="down"
          delay="0.5"
          duration="0.3"
          className={
            "flex border border-black/10 gap-6 px-6 py-3 rounded-lg items-center text-[14px] backdrop-blur-sm w-full md:w-auto justify-between md:justify-normal"
          }
        >
          {/* Logo */}
          <div className="font-bold">
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Logo
            </Link>
          </div>
          <ul className="hidden md:flex gap-2">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLinkButton link={link} small />
              </li>
            ))}
          </ul>
          <div className="flex gap-3 items-center justify-center">
            <div className="hidden sm:block">
              <InPageLink to="contact">
                <ButtonType1 small offset={-150} className={"select-none"}>
                  Book a Free call
                </ButtonType1>
              </InPageLink>
            </div>
            <div
              className="block md:hidden cursor-pointer p-[2px]"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <RxCross2 size={26} /> : <RiMenu4Fill size={26} />}
            </div>
          </div>
        </FadeIn>

        <motion.div
          className={`absolute top-20 sm:top-24 w-full sm:w-40 sm:right-[32px] md:hidden overflow-hidden z-10 backdrop-blur-sm`}
          variants={hamMenuVariants}
          initial={"closed"}
          animate={open ? "open" : "closed"}
          transition={{ duration: 0.25 }}
        >
          <ul className="flex flex-col gap-2 border-[1px] border-primary-white/15 rounded-lg p-4 mx-4 sm:mx-0">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLinkButton
                  link={link}
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                />
              </li>
            ))}
            <li className="sm:hidden">
              <InPageLink to="contact">
                <ButtonType1 small offset={-150}>
                  Book a Free call
                </ButtonType1>
              </InPageLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;

const NavLinkButton = ({
  link,
  small = false,
  onClick = () => {},
  onSetActive = () => {},
}) => {
  return link.isNavLink ? (
    <Link
      to={link.href}
      className={` backdrop-blur-[10px] ${
        small ? "px-3 py-2 text-sm" : "px-6 py-2 text-md"
      } rounded-lg cursor-pointer bg-white/0 hover:bg-black/5 duration-300 transition-all`}
    >
      {link.title}
    </Link>
  ) : (
    <InPageLink
      to={link.href}
      activeClass="text-green-accent link-active bg-black/5"
      offset={-150}
      spy={true}
      duration={500}
      className={` backdrop-blur-[10px] ${
        small ? "px-3 py-2 text-sm" : "px-6 py-2 text-md"
      } rounded-lg cursor-pointer bg-white/0 hover:bg-black/5 duration-300 transition-all`}
      onClick={onClick}
    >
      {link.title}
    </InPageLink>
  );
};
