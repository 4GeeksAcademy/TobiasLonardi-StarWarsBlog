import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	



	return (
		<div className="container">
			<div className="text-start">
				<h1 className="text-danger">Characters</h1>
			</div>
			<div className="d-flex justify-content-between gap-3 p-3" style={{
				display: 'flex',
				overflowX: 'auto',
				gap: '1rem',
				padding: '10px'
			}}>
				{store.characters.map((items)=>
				<div className="card " key={items?.properties.id} style={{ width: "18rem", minWidth: '200px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${items.uid}.jpg`} className="card-img-top " alt={items?.properties.name} />
					<div className="card-body d-flex flex-column justify-content-between">
						<h5 className="card-title">Name:{items?.properties.name}</h5>
						<p className="card-text">Gender: {items?.properties.gender}</p>
						<p className="card-text">Hair-color: {items?.properties.hair_color}</p>
						<p className="card-text">Eye-Color: {items?.properties.eye_color}</p>
						<div className="d-flex justify-content-between align-items-center ">
							<Link href="#" className="btn btn-primary" to={`/infopage/${items?._id}`}>Learn More</Link>
							<span className="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				)}
				
				

			</div>
			<div className="text-start">
				<h1 className="text-danger">Planets</h1>
			</div>
			<div className="d-flex justify-content-between gap-3 p-3" style={{
				display: 'flex',
				overflowX: 'auto',
				gap: '1rem',
				padding: '10px'
			}}>
				{store.planets.map((items)=>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${items.uid}.jpg`} className="card-img-top" alt="..." />
					<div className="card-body d-flex flex-column justify-content-between">
						<h5 className="card-title">{items?.properties.name}</h5>
						<p className="card-text">Population: {items?.properties.population}</p>
						<p className="card-text">Terrain: {items?.properties.terrain}</p>


						<div className="d-flex justify-content-between align-items-center">
							<Link href="#" className="btn btn-primary" to="/infopage/0">Learn More</Link>
							<span className="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				)}
				
				
			</div>

		</div>
	);
}; 