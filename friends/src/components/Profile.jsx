import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const url = "http://localhost:5000/api/friends";

		if(token) {
			axios.get(url, {
				headers: {
					Authorization: token
				}
			})
			.then(response => setFriends(response.data))
			.catch(error => console.log("get failed"))
		}
	}, []);
	
	console.log(friends);
	return (
		<div>
			<p>Profile Page</p>
		</div>
	)
}
