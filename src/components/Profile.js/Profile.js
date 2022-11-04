import {FaHeart} from 'react-icons/fa';
import './Profile.css';
// import {mdlightMode} from 'react-icons/fa';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AppContext } from "../context/AppContext";


const Profile = () => {
    const { data, username, setUsername, loading ,  fetchUser , fetchRepo} = useContext(AppContext);

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
      <section className="username_container">
      <div className="bio-update">
      <div>
    <img className="profile_img" src={`${data.avatar_url}`} alt="" />
    </div>
    <div className="bio">
    <div>
    <h2> {data.name}</h2>
    <p>{data.login}</p>
    </div>
    <div>
       <p className="date_joined">{new Date(data.created_at).toLocaleDateString('en-us', {
        day: "numeric",
        month: "short",
        year: "numeric",
       })}</p>
    
    </div>
  </div>
  </div>
  <div className="bio_wrap">
    <p>{data.bio}</p>
  </div>
  <div className="repos__container">
    <div className="repos">
      <h4>Public Repos</h4>
      <h2>{data.public_repos}</h2>
    </div>
    <div className="repos">
      <h4>Followers</h4>
      <h2>{data.followers}</h2>
    </div>
    <div className="repos">
      <h4>Following</h4>
      <h2>{data.following}</h2>
    </div>
  </div>
  <div className="location__container">
    <div className="location">
      <span><i class="fa-solid fa-location-dot"></i>{data.location}</span>
    </div>
    <div className="location">
    <span><i class="fa-brands fa-twitter-square"></i><a target="_blank" href="${data.twitter_username}">Twitter</a></span>
  </div>
  <div className="location">
  <span> <i class="fa-solid fa-link"></i><a target="_blank" href="${data.html_url}">Visit profile</a></span>
  </div>
  <div className="location">
      <span><i class="fa-solid fa-building"></i>{data.company}</span>
    </div>




  </div>

      {/* </div> */}

      </section>

      <section>
                <Link to="/repo" onClick= {fetchRepo} >Repo</Link>

      </section>





    
        </main>
        </>
    );
}
 
export default Profile;