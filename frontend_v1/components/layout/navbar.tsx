import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_ELEMENTS } from "../../utils/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://lebanyandepec.org/images/logo.jpg"
            className="h-full"
          />
        </motion.div>
      </Link>

      <div className="flex items-center px-4 py-3">
        {NAV_ELEMENTS.map((el) => {
          return (
            <Link href={el.link} key={el.el_name}>
              <motion.div
                className="px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {el.el_name}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
