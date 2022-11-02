import {FaHeart} from 'react-icons/fa';
import './Profile.css';
// import {mdlightMode} from 'react-icons/fa';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Profile = () => {
    const { data, username, setUsername, loading ,  fetchUser } = useContext(AppContext);

    // const [data , setData] = useState({});
    // const [username, setUsername] = useState("");
    // const [error, setError] = useState(null);


    const userInput = e =>{
        setUsername(e.target.value);
    }
    


    return (  
        <>
        <main>
            <div className="title">
                <h2>DevFinder</h2>
                <span className="IconColor">
                    {/* <mdlightMode/> */}
                </span>
            </div>
            <section className="search_section">
                <FaHeart/>
        <input
          type="search"
          name="search users"
          className="search-data"
          placeholder="Search Github Username"
          value={username} onChange={userInput}
        />
        <button type="button" className="search_btn" onClick= {fetchUser} >Search</button>
      </section>






    
        </main>
        </>
    );
}
 
export default Profile;