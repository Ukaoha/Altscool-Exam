import {FaHeart} from 'react-icons/fa';
import './Profile.css';
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";

// import {mdlightMode} from 'react-icons/fa';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AppContext } from "../context/AppContext";


const Profile = () => {
    const { data, username, setUsername, loading ,  fetchUser} = useContext(AppContext);



    const userInput = e =>{
        setUsername(e.target.value);
    }
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin width="200" color="#fff" />
        </div>
      );
    }
  


    return (  
        <>
              <Helmet>
        <title>Users Profile</title>
        <meta
          name="description"
          content="Users  Github Repositries"
        />
        <link rel="canonical" to={`/repo/:repoId`} />
      </Helmet>

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
  <div className="repositories">
    <Link to={`/repo/${username}`}>Plese view repositories</Link>

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
      <span><i className="fa-solid fa-location-dot"></i>{data.location}</span>
    </div>
    <div className="location">
    <span><i className="fa-brands fa-twitter-square"></i><Link target="_blank" to={data.twitter_username}>Twitter</Link></span>
  </div>
  <div className="location">
  <span> <i className="fa-solid fa-link"></i><Link target="_blank" to={data.html_url}>Visit profile</Link></span>
  </div>
  <div className="location">
      <span><i className="fa-solid fa-building"></i>{data.company}</span>
    </div>


  </div>

    

      </section>








    
        </main>
        </>
    );
}
 
export default Profile;