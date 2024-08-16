import { FiChevronDown, FiCopy, FiUser, FiGithub, FiCheck } from "react-icons/fi";

import { motion } from "framer-motion";
import { useState } from "react";

const Slider = () => {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyText = function (e) {
    e.preventDefault();
    let parentDiv = e.currentTarget;
    let button = parentDiv.children[1];
    let textArea = document.createElement("textarea");

    // copy text
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.top = "0";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    textArea.value = "ayannagorimsn@gmail.com";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    setIsCopied(true);

    // prevent spam
    parentDiv.style.pointerEvents = "none";

    setTimeout(() => {
      parentDiv.style.pointerEvents = "all";
      setIsCopied(false);
    }, 3000);
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="fixed top-2 right-2 z-30">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex drop-shadow-xl items-center gap-2 p-3 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
      >
        <span className="font-medium text-xl">
          <span className="-translate-y-[1px] inline-block">🤙</span> Contact
        </span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] right-0 w-48 overflow-hidden"
      >
        <Option href="https://ayannagori.vercel.app" Icon={FiUser} text="Portfolio" />
        <Option href="https://github.com/AyanNagorimsn" Icon={FiGithub} text="Github" />
        <Option
          href=""
          Icon={FiCopy}
          isCopied={isCopied}
          text="Copy Email"
          onClick={copyText}
          FiCheck={FiCheck}
        />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, href, onClick, isCopied, FiCheck }) => {
  return (
    <motion.a
      onClick={onClick}
      href={href}
      variants={itemVariants}
      target="_blank"
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        {!isCopied ? <Icon className="size-5" /> : <FiCheck className="size-5" />}
      </motion.span>
      <span className="text-lg">{isCopied ? "Email Copied 😁" : text}</span>
    </motion.a>
  );
};

export default Slider;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.1,
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  closed: {
    scale: 0,
    y: -7,
    transition: {
      duration: 0.15,
    },
  },
};
