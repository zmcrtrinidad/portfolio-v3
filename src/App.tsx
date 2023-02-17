import Navbar from "@/templates/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="app ">
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
