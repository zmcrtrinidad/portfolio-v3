
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Arrow from "@/assets/Arrow.svg";



type Props = {
    setSelectedPage: (page: SelectedPage) => void;

}

const Contact = ({ setSelectedPage }: Props) => {


    return (
        <section id="contact" className=" mx-auto min-h-screen w-5/6 md:py-20 flex  justify-center items-center">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.CONTACT)}>
                <div className="flex flex-col md:flex-row justify-center items-center  ">
                    <div className="flex flex-row  basis-2/4 ">
                        <div className="flex flex-row justify-center items-center basis-1/4 ">
                            <p className="text-xl md:text-7xl font-kronaOne ">CON<br className="hidden md:block" />TACT<br className="hidden md:block" />ME</p>
                        </div>
                        <div className="flex flex-row justify-center items-center basis-2/4">
                            <img src={Arrow} alt="" className="hidden md:block" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center basis-2/4 p-10 text-xl">

                        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100 p-10">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                            <div className="text-brown-30 mt-8">
                                Hate forms? Send me an <a className="underline" href="mailto:zmcrtrinidad@gmail.com">email</a> instead.
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div >
        </section >
    )
}

export default Contact