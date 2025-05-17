import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	function deleteFavorite(character){
		dispatch({type:"delete_favorite", payload: character})
	}
	function filterLink(item){
		if(item.description == "A planet."){
			return <Link className="dropdown-item " href="#" to={`/infopageplanet/${item?._id}`}>{item?.properties.name}</Link>
		}
		else{
			return <Link className="dropdown-item " href="#" to={`/infopage/${item?._id}`}>{item?.properties.name}</Link>
		}

	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="src/assets/img/logo.png" alt="" className="logo"/>
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle d-flex align-items-center px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="bg-secondary px-2 rounded text-white">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">

					{store.favorites.map((items)=>
						<li className="d-flex align-items-center p-2" key={items._id}>
							{
								filterLink(items)
							}
							<i class="fa-solid fa-trash" onClick={()=>deleteFavorite(items)}></i>
						</li>
					)}
					</ul>

				</div>
			</div>
		</nav>
	);
};