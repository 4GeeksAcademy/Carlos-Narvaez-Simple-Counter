import React from "react";

const Home = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-2">
					
				</div>
				<div className="col-2">
					{props.digFour}
				</div>
				<div className="col-2">
					{props.digThree}	
				</div>
				<div className="col-2">
					{props.digTwo}			
				</div>
				<div className="col-2">
					{props.digOne}
				</div>
			</div>
		</div>
	);
};

export default Home;