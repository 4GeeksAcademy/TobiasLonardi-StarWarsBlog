
export const InfoPage = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <img src="https://i.pravatar.cc/300" alt="" />
                <div className="text-center">
                    <h2>Luke Skywalker</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                </div>
            </div>
            <div className="p-5">
                <div className="border-top border-danger">
                    <div className="d-flex justify-content-between text-danger">
                        <div className="d-flex flex-column align-items-center">
                            <p>Name:</p>
                            <p>Luke Skywalker</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Gender:</p>
                            <p>Male</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>height:</p>
                            <p>1.76m</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Skin color:</p>
                            <p>Fair</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}