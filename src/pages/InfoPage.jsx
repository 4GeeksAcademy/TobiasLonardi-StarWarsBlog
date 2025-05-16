import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"

export const InfoPage = () => {

    const { store, dispatch } = useGlobalReducer()

    const [character,setCharacter] = useState({})
    const {id} = useParams()

    function getCharacter(){
        setCharacter(store.characters.find((item)=> item._id == id))
        console.log(character)
    }

    useEffect(()=>{
        getCharacter()
    },[store.characters])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
				<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${character?.uid}.jpg`} className="card-img-top " alt={items?.properties.name} />
                <div className="text-center">
                    <h2>{character?.properties?.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                </div>
            </div>
            <div className="p-5">
                <div className="border-top border-danger">
                    <div className="d-flex justify-content-between text-danger">
                        <div className="d-flex flex-column align-items-center">
                            <p>Name:</p>
                            <p>{character?.properties?.name}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Gender:</p>
                            <p>{character?.properties.gender}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>height:</p>
                            <p>{character?.properties.height}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Skin color:</p>
                            <p>{character?.properties.skin_color}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}