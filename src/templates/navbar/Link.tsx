import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";



type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (page: SelectedPage) => void;
}

const Link = ({ page,selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
    return (
        <AnchorLink 
        className={`${selectedPage === lowerCasePage ? "text-brown-100" : ""}
            transition duration-500 hover:text-brown-50  text-lg font-bold
        `} 
        href={`#${lowerCasePage}`} 
        onClick={()=> setSelectedPage(lowerCasePage)} >
            {page}

        </AnchorLink>
    )
}
export default Link;