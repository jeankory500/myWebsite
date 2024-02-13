import React, { useContext } from "react";
import { Context } from "../store/appContext";
import background from "../../img/bg-stars.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{ 
		backgroundImage: `url(${background})`,
		height: "100vh",
		marginTop: "-20px",
		fontSize: "20px",
		color: 'white',
		backgroundSize: "cover",}}

		className="text-center mt-5">
			<h1>Jeankory Valdes</h1>
			<p>Welcome to my website.</p>
			<p2>This is an example of the words that are going to be there.</p2>

			<div class="jumbotron jumbotron-fluid">
  			<div class="container">
    		<h1 class="display-4">Fluid jumbotron</h1>
    		<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  			</div>
</div>

			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};
