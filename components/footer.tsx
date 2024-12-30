import { AiFillHeart } from "react-icons/ai"; 
import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500 flex items-center"> 
          Made with 
          <span className="ml-1"> 
            <AiFillHeart color='red'/>
          </span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
