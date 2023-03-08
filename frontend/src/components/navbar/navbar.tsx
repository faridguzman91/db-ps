import { motion, Variants } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";


const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <motion.nav
      className="navbar bg-base-100"
      initial={false}
      animate-={isOpen ? "open" : "closed"}
    >
      <div className="flex-none">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-square btn-ghost font-ptmono">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </motion.button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-ptmono">
          David Bade
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-ptmono">
          <li>
            <a>Gallery</a>
          </li>
          <li tabIndex={0}>
            <a>
              Exhibitions
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>2022</a>
              </li>
              <li>
                <a>2021</a>
              </li>
              <li>
                <a>2020</a>
              </li>
              <li>
                <a>2019</a>
              </li>
              <li>
                <a>2018</a>
              </li>
              <li>
                <a>2017</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
