import Navbar from "@/templates/navbar";
import Home from "@/templates/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import About from "@/templates/about";
import Experience from "@/templates/experience";
import Projects from "@/templates/projects";
import Contact from "@/templates/contact";



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
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage}  />
      <Experience setSelectedPage={setSelectedPage}  />
      <Projects setSelectedPage={setSelectedPage}  />
      <Contact setSelectedPage={setSelectedPage}  />
      

    </div>
  )
}

export default App
