import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

const NavigationBar = () => {
    const [profileBtnShow, setProfileBtnShow] = useState(false);
    return (
            <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
                <div className="container">
                    <img src="favicon.png" alt="" width="30" height="24" />
                    <AnimatePresence>
                    <motion.a whileHover={{scale: 1.2}} className="navbar-brand mb-0 h1" href="/">&nbsp;Quiz Time</motion.a>
                    </AnimatePresence>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <AnimatePresence>
                                {profileBtnShow === true ? 
                                    <motion.li whileHover={{scale: 1.2, backgroundColor: "rgb(255, 255, 255)", borderRadius: "40px"}} transition={{duration: 0.4}} className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </motion.li>
                                : undefined}
                            </AnimatePresence>
                            <AnimatePresence>
                                <motion.li whileHover={{scale: 1.2, backgroundColor: "rgb(255, 255, 255)", borderRadius: "40px"}} transition={{duration: 0.4}} className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </motion.li>
                            </AnimatePresence>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
 
export default NavigationBar;