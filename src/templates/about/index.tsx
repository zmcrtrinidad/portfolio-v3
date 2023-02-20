
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
                            <p className="md:text-7xl text-xl  font-kronaOne ">AB<br className="hidden md:block" />OU<br className="hidden md:block" />T</p>
                        </div>
                        <div className="md:flex md:flex-row justify-center items-center basis-2/4 hidden ">
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center basis-2/4 md:p-10 p-2 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum. Amet risus nullam eget felis eget. Et ligula ullamcorper malesuada proin libero nunc. A arcu cursus vitae congue.

                    </div>
                </div>
                <div className="flex flex-col-reverse  md:flex-row w-full md:my-10  ">
                    <div className="flex flex-col  basis-2/4 text-xl gap-11">
                        <div className="flex flex-row justify-center items-center gap-2 md:gap-11 ">
                            <div className="basis-1/4"><img src={LaravelIcon} alt="" className="w-30" /></div>
                            <div className="basis-1/4"><img src={ReactIcon} alt="" className="w-30"  /></div>
                            <div className="basis-1/4"><img src={Tailwind} alt="" className="w-36"  /></div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2 md:gap-11 ">
                            <div  className="basis-1/4"><img src={Bootstrap} alt="" className="w-30" /></div>
                            <div  className="basis-1/4"><img src={Css} alt="" className="w-30" /></div>
                            <div  className="basis-1/4"><img src={Html} alt="" className="w-30" /></div>
                        </div>

                    </div>
                    <div className="md:flex basis-2/4 my-10 ">
                        <div className="flex flex-row justify-center items-center basis-2/4">
                            <img src={ArrowReverse} alt="" className="hidden md:block" />
                        </div>
                        <div className="flex flex-row justify-center items-center basis-1/4 ">
                            <p className="md:text-7xl text-xl  font-kronaOne ">TEC<br className="hidden md:block"/>HST<br className="hidden md:block"/>ACK</p>
                        </div>

                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default About