
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Arrow from "@/assets/Arrow.svg";
import ArrowReverse from "@/assets/ArrowReverse.svg";
import LaravelIcon from "@/assets/LaravelIcon.svg";
import ReactIcon from "@/assets/ReactIcon.svg";
import Tailwind from "@/assets/Tailwind.svg";
import Bootstrap from "@/assets/Bootstrap.svg";
import Css from "@/assets/CSS.svg";
import Html from "@/assets/HTML.svg";




type Props = {
    setSelectedPage: (page: SelectedPage) => void;

}

const About = ({ setSelectedPage }: Props) => {


    return (
        <section id="about" className=" mx-auto min-h-screen w-5/6 py-20 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ABOUT)}>
                <div className="flex flex-col md:flex-row w-full   ">
                    <div className="flex flex-row justify-center items-center basis-2/4 md:mb-10">
                        <div className="flex flex-row justify-center items-center basis-2/4 ">
                            <p className="md:text-7xl text-xl  font-kronaOne ">ABOUT</p>
                        </div>
                        <div className="md:flex md:flex-row justify-center items-center basis-2/4 hidden ">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center basis-2/4 md:p-10 p-2 text-xl">
                        <p className="antialiased italic hover:not-italic font-light tracking-wide tracking-wide">I'm a skilled web developer specializing in Laravel, ReactJS, JavaScript, PHP, and MySQL. 
                            With a proven track record of enhancing existing systems and creating new, user-friendly websites, 
                            I thrive on tackling challenges and staying updated with the latest web development trends. 
                            My portfolio reflects a commitment to accessible and innovative solutions, 
                            and I'm dedicated to continuous learning and problem-solving. Let's collaborate to shape the digital landscape!</p>

                    </div>
                </div>
                <div className="flex flex-col-reverse  md:flex-row w-full md:my-10  ">
                    <div className="flex flex-col  basis-2/4 text-xl gap-11">
                        <div className="flex flex-row justify-center items-center gap-2 md:gap-11 ">
                            <div className="basis-1/4"><img src={LaravelIcon} alt="" className="w-20" /></div>
                            <div className="basis-1/4"><img src={ReactIcon} alt="" className="w-20" /></div>
                            <div className="basis-1/4"><img src={Tailwind} alt="" className="w-20" /></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 md:gap-11 ">
                            <div className="basis-1/4"><img src={Bootstrap} alt="" className="w-20" /></div>
                            <div className="basis-1/4"><img src={Css} alt="" className="w-20" /></div>
                            <div className="basis-1/4"><img src={Html} alt="" className="w-20" /></div>
                        </div>

                    </div>
                    <div className="md:flex basis-2/4 my-10 ">
                        <div className="flex flex-row justify-center items-center basis-2/4">
                            <img src={ArrowReverse} alt="" className="hidden md:block" />
                        </div>
                        <div className="flex flex-row justify-center items-center basis-1/4 ">
                            <p className="md:text-7xl text-xl  font-kronaOne ">TECH<br className="hidden md:block" />STACK</p>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default About