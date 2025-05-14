import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


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
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
						
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Gender: Male</p>
						<p className="card-text">Hair-color: Brown</p>
						<p className="card-text">Eye-Color: Brown</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>

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
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>


						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>
				<div className="card " style={{ width: "18rem", minWidth: '300px', height: '525px', backgroundColor: 'lightblue' }}>
					<img src="https://i.pravatar.cc/300" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Tatuin</h5>
						<p className="card-text">Population: 200000</p>
						<p className="card-text">Terrain: land with grass and mountains</p>
						<div className="d-flex justify-content-between">
							<Link href="#" className="btn btn-primary" to="/InfoPage/0">Learn More</Link>
							<span class="btn btn-primary fa-regular fa-heart "></span>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
}; 