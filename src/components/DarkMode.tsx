import {IoMoonSharp,  IoIosSunny,} from "../icons/icons"
import { useEffect,useState } from "react"


const Darkmode =  () => {
const [darkMode,setDarkMode] = useState<boolean>(false)


const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

useEffect(() => {
    if (darkMode) {
        document.body.classList.add("darkMode");
    } else {
        document.body.classList.remove("darkMode");
    }
}, [darkMode]);
    return (
        <>
        <div className="header">

            <div className="logo">devfinder</div>
            <div className={darkMode ? "darkMode" : ""}>
            {darkMode ? (
                <>
                    
                    <span className="text-light">LIGHT</span>
                    <IoIosSunny onClick={toggleDarkMode} className="icon-white" />
                </>
            ) : (
                <>
                    
                    <span className="text-dark">DARK</span>
                    <IoMoonSharp onClick={toggleDarkMode}  className="moonIcon"/>

                </>
            )}
        </div>
        </div>





        </>
    )
}
export default Darkmode;