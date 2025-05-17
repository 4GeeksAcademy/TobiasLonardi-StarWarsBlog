import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"

export const InfoPagePlanet = () => {

    const { store, dispatch } = useGlobalReducer()
    const [planets,setPlanets] = useState({})

    const {id} = useParams()
    function getPlanets(){
        setPlanets(store.planets.find((item)=> item._id == id))
    }

    useEffect(()=>{
        getPlanets()
    },[store.planets])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
				<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="text-center">
                    <h2>{planets?.properties?.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                </div>
            </div>
            <div className="p-5">
                <div className="border-top border-danger">
                    <div className="d-flex justify-content-between text-danger">
                        <div className="d-flex flex-column align-items-center">
                            <p>Name:</p>
                            <p>{planets?.properties?.name}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Population:</p>
                            <p>{planets?.properties?.population}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Climate:</p>
                            <p>{planets?.properties?.climate}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Orbital period:</p>
                            <p>{planets?.properties?.orbital_period}</p>
                        </div>
                         <div className="d-flex flex-column align-items-center">
                            <p>Diameter:</p>
                            <p>{planets?.properties?.diameter}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}