import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (page: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage,selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? 'bg-transparent' : 'bg-brown-50 drop-shadow-xl rounded-b-3xl';
    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween}  py-3 fixed top-0 z-30 w-full`}>
                <div className={`mx-16 w-full`}>
                    <div className={`${flexBetween} text-sm font-bold `}>
                        <p className=' mr-16 block md:invisible '>Zinia</p>
                        {isAboveMediumScreens ?
                            (<div className={`${flexBetween} gap-8  w-full `}>
                                <Link page='HOME' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='ABOUT' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='EXPERIENCE' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='PROJECTS' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='CONTACT' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>) : (
                                <button
                                    className='rounded-full bg-brown-20 p-2'
                                    onClick={() => setMenuToggled(!isMenuToggled)}>
                                    <Bars3BottomRightIcon className='h-6 w-6 text-white' />

                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-brown-50 drop-shadow-xl'>
                    <div className='flex justify-end p-10'>
                        <button onClick={() => setMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400' />
                        </button>
                    </div>
                    <div className="ml-[30%] flex flex-col gap-10 text-2xl ">
                        <Link page='HOME' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='ABOUT' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='PROJECTS' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='EXPERIENCE' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page='CONTACT' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
};
export default Navbar;
