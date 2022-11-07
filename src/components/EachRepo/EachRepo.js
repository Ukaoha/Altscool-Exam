import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


const  EachRepo = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    let {username} = useParams();
    const URL =  `https://api.github.com/users/${username}/repos/${location.state.name}`

  
    useEffect(() => {
        axios({
          method: "get",
          url: URL,
        }).then(() => {
          setLoading(false);
        });
      }, []);


      if (loading) {
        return (
          <div className="loader">
            <InfinitySpin width="200"  />
          </div>
        );
      }
    
    

   return (

<div>
      <Helmet>
        <title>{location.state.name}</title>
        <meta
          name="description"
          content="Users  Github Repositries"
        />
        <link rel="canonical" to={`/repo/:repoId`} />
      </Helmet>

      <div className=" container">
          <div className="main-wrap">
            <h1 >
              Repo by {location.state.owner.login}
            </h1>
            <img
              src={location.state.owner.avatar_url}
              title={location.state.owner.login}
              alt="Owner"

            />
            <h2>
              {location.state.name}
            </h2>
            <div>
              <p>{location.state.description}</p>
            </div>
          </div>
          <div >
            <p>Stars: {location.state.stargazers_count}</p>
            <p>Forks: {location.state.forks_count}</p>
            <p>Open Issues: {location.state.open_issues_count}</p>
            <p>
              last updated: {new Date(location.state.updated_at).toDateString()}
            </p>
            <div>
              <div >
                <button >
                  <Link
                    rel="canonical"
                    to={location.state.html_url}
                    target="_blank"
                  >
                    View on Github
                  </Link>
                </button>
                <button >
                  <a rel="canonical" href="/">
                    Go Back
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


);
}
 
export default  EachRepo;