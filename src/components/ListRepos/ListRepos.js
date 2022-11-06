// import axios from "axios";
// import { useContext } from "react";
// import {   useEffect} from "react";
// import { AppContext } from "../context/AppContext";


// const ListRepos = () => {
//     const {data, setData, repos , setRepo , username , setUsername , loading, setLoading , error, setError} = useContext(AppContext);
//     const fetchRepo = async () => {
//         setLoading(true);
//         try {
// 			let URLRepo =  `https://api.github.com/users/${username}/${repos}`;
// 			let response = await axios.get(URLRepo);
//             setData(response.data);
// 			setLoading(false);
// 			console.log(response.data);
        
//     } catch (error) {
//         setData([]);
//         setError(error);
//         setLoading(false);
//     }
// }
//     useEffect(() => {
// 		fetchRepo();
// 	}, [repos]);

//     return ( 
//         <>
//         			value={{
// 				data,
// 				setData,
// 				loading,
// 				setLoading,
//                 username, 
//                 setUsername,

// 				repos,
// 				setRepo,
// 				fetchRepo,
				
// 			}}
//             <h1>{data.repos}</h1>


//         </>

//      );
// }

 
// export default ListRepos;

