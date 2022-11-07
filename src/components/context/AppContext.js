import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const[repos, setRepo] = useState([])
	const [error, setError] = useState(null);

	const fetchUser = async () => {
		setLoading(true);
		try {
			let URL =  `https://api.github.com/users/${username}`;
			let response = await axios.get(URL);
			
			setData(response.data);
			setLoading(false);
			console.log(response.data);
			
		} catch (error) {
			setData([]);
			setError("failed to fetch");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [repos]);

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				loading,
				setLoading,
                username, 
                setUsername,
				page,
				setPage,
				repos,
				setRepo,
				fetchUser,
				error,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
