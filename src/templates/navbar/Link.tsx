import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (page: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
    return (
        <motion.div
        whileHover={{ scale: 1.2, originX: 0 }}
        transition={{ type: "spring", stiffness: 400 }}
        >
            <AnchorLink
                className={`${selectedPage === lowerCasePage ? "text-brown-100" : ""}
            transition duration-500 hover:text-brown-30  text-lg font-bold
        `}
                href={`#${lowerCasePage}`}
                onClick={() => setSelectedPage(lowerCasePage)} >
                {page}

            </AnchorLink>
        </motion.div>

    )
}
export default Link;