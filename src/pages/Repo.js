import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

import axios from "axios";
import { useParams } from "react-router-dom";
import Pagination from "../components/Paginate/Pagination";



const Repo = () => {
    const [repo, setRepo] = useState([]);
    const [loading,setLoading] = useState(true);
    let {username} = useParams()
    const fetchRepo = async () => {
        try {
            console.log(username)
			let URLRepo =  `https://api.github.com/users/${username}/repos`;
			let response = await axios.get(URLRepo);
            setRepo(response.data)
            setLoading(false);
			console.log(response.data);
        
        } catch (error) {
            console.error('error')
        }
    }
    

    if (username) {
        fetchRepo()
    }
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <InfinitySpin width="200" color="#fff" />
          </div>
        );
      }
    

    return ( <>
    <Pagination data={repo}/>


    </> );
}
 
export default Repo;