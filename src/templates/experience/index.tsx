
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Arrow from "@/assets/Arrow.svg";
import Pocketdevs from "@/assets/Pocketdevs.svg";
import RightValley from "@/assets/RightValley.svg";
import Stronghold from "@/assets/Stronghold.svg";



type Props = {
    setSelectedPage: (page: SelectedPage) => void;

}

const Experience = ({ setSelectedPage }: Props) => {


    return (
        <section id="experience" className=" mx-auto min-h-screen w-5/6 md:py-20 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.EXPERIENCE)}>
                <div className="flex flex-col md:flex-row justify-center items-center  ">
                    <div className="flex flex-row  basis-2/4 ">
                        <div className="flex flex-row justify-center items-center basis-1/4 ">
                            <p className="text-xl md:text-7xl font-kronaOne ">EXP<br className="hidden md:block" />ERIE<br className="hidden md:block" />NCE</p>
                        </div>
                        <div className="flex flex-row justify-center items-center basis-2/4">
                            <img src={Arrow} alt="" className="hidden md:block" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center basis-2/4 md:p-10 text-xl">

                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-brown-50 rounded-full -left-3 ring-8 ring-brown-20 ">
                                    <img src={RightValley} alt="" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">RightValley</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2020</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web Developer Intern</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-brown-50 rounded-full -left-3 ring-8 ring-brown-20 ">
                                    <img src={Pocketdevs} alt="" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">PocketDevs </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web Developer Intern</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-brown-50 rounded-full -left-3 ring-8 ring-brown-20 ">
                                    <img src={Pocketdevs} alt="" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">PocketDevs <span className="bg-brown-30 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded   ml-3">Present</span></h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> Part-time Web Developer & Shopify Developer</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-brown-50 rounded-full -left-3 ring-8 ring-brown-20 ">
                                    <img src={Stronghold} alt="" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Stronghold Insurance Company Inc. <span className="bg-brown-30 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded   ml-3">Present</span></h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Web Developer</p>
                            </li>

                        </ol>

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Experience