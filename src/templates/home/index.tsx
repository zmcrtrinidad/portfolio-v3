import useMediaQuery from "@/hooks/useMediaQuery";
import HeaderImage from "@/assets/Header.png";
import Github from "@/assets/Github.png";
import LinkedIn from "@/assets/LinkedIn.png";
import Twitter from "@/assets/Twitter.png";
import Instagram from "@/assets/Instagram.png";
import HomeTextImage from "@/assets/HomeText.svg";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";




type Props = {
    setSelectedPage: (page: SelectedPage) => void;

}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    return (
        <section id="home" className=" gap-16 mx-auto min-h-screen w-5/6 py-10 ">
            <motion.div
                className="mx-auto my-10"
                onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, y: -100 },
                        visible: { opacity: 1, y: 0 },
                    }}

                    className="flex justify-center w-full" >
                    <img alt="home-page-image" className="sm:h-[484px]" src={HeaderImage} />
                </motion.div>
                <div className="flex items-center  ">
                    <div className="flex flex-row justify-center items-center md:w-2/4">
                        <img alt="home-page-text" className="md:h-12" src={HomeTextImage} />
                    </div>
                    <div className=""></div>

                </div>
                <div className="flex items-center justify-center ">
                    <div className="md:w-2/4"></div>
                    <div className="flex flex-row justify-center items-center md:w-2/4  md:gap-16 py-8 md:py-2">
                        <a
                            href="https://github.com/zmcrtrinidad">
                            <motion.img whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -90,
                                    borderRadius: "100%"
                                }} className="h-9 " alt="Github" src={Github} />
                        </a>

                        <a href="https://www.linkedin.com/in/zinia-trinidad/">
                            <motion.img
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -90,
                                    borderRadius: "100%"
                                }}
                                className="h-9 " alt="LinkedIn" src={LinkedIn} />
                        </a>
                        <a href="https://twitter.com/thb_mnyngi_zn">
                            <motion.img
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -90,
                                    borderRadius: "100%"
                                }} className="h-9 " alt="Twitter" src={Twitter} />
                        </a>
                        <a href="https://www.instagram.com/zmcrtrinidad_i/">
                            <motion.img
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -90,
                                    borderRadius: "100%"
                                }} className="h-9 " alt="Github" src={Instagram} />
                        </a>
                    </div>
                </div>
                <motion.div 
                //make it repeated bouncing animation
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 1, y: -10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.7,
                    }}
                whileHover={{ y: -30 }}
                    className="flex justify-center w-full py-3"
                >

                    <ActionButton setSelectedPage={setSelectedPage}>
                        <ChevronDoubleDownIcon className="h-10 w-10 text-white border-2 border-white rounded-full p-2" />
                    </ActionButton>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Home