
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ArrowDown from "@/assets/ArrowDown.svg";
import ArrowReverse from "@/assets/ArrowReverse.svg";

import Havoc from "@/assets/HAVOC.png";
import Vestia from "@/assets/VESTIA.png";
import NEUMeet from "@/assets/NEUMEET.png";
import YofiHouse from "@/assets/YofiHouse.png";
import AVSoundStation from "@/assets/AVSOUNDSTATION.png";
import QuickwayHoldings from "@/assets/QUICKWAYHOLDINGS.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";





type Props = {
    setSelectedPage: (page: SelectedPage) => void;

}

const Projects = ({ setSelectedPage }: Props) => {


    return (
        <section id="projects" className=" mx-auto min-h-screen w-5/6 md:py-20 ">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.PROJECTS)}>
                <div className="flex flex-col-reverse  md:flex-row w-full md:my-10  ">
                    <div className="flex flex-col  basis-2/4 text-xl gap-11">
                    <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className=""
                        >
                            <SwiperSlide><img src={Havoc} alt="" className="rounded" /></SwiperSlide>
                            <SwiperSlide><img src={Vestia} alt="" className="rounded" /></SwiperSlide>
                            <SwiperSlide><img src={NEUMeet} alt="" className="rounded" /></SwiperSlide>
                            <SwiperSlide><img src={YofiHouse} alt="" className="rounded" /></SwiperSlide>
                            <SwiperSlide><img src={AVSoundStation} alt="" className="rounded" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="md:flex basis-2/4 my-10 ">
                        <div className="flex flex-row justify-center items-center basis-2/4">
                            <img src={ArrowReverse} alt="" className="hidden md:block" />
                        </div>
                        <div className="flex flex-row justify-center items-center basis-2/4 ">
                            <p className="md:text-7xl text-xl  font-kronaOne ">PRO<br className="hidden md:block" />JECT<br className="hidden md:block" />S</p>
                        </div>

                    </div>

                </div>

                {/* <div>
                <div className="flex flex-col justify-center items-center gap-10 my-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div>
                            <img src={Havoc} alt="" className="rounded" />
                        </div>
                        <div>
                            <img src={Vestia} alt="" className="rounded" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div>
                            <img src={NEUMeet} alt="" className="rounded" />

                        </div>
                        <div>
                            <img src={YofiHouse} alt="" className="rounded" />

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div>
                            <img src={AVSoundStation} alt="" className="rounded" />

                        </div>
                        <div>
                            <img src={QuickwayHoldings} alt="" className="rounded" />
                        </div>
                    </div>
                </div>
            </div> */}

            </motion.div>
        </section >
    )
}

export default Projects