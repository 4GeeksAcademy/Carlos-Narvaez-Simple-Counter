import React from "react";

const Home = (props) => {
	return (
		<div className="container-fluid">
			<div className="row bg-black m-1 py-3">
				<div className="col-2"></div>
				<div className="col-2 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					<i className="fa-regular fa-clock"></i>
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digSix}
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digFive}
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digFour}
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digThree}	
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digTwo}			
				</div>
				<div className="col-1 btn btn-dark border-secondary fw-bold" style={{ fontSize: "100px"}}>
					{props.digOne}
				</div>
				<div className="col-2"></div>
			</div>
			<div className="row text-center">
				<div className="col-4 mb-2 justify-content-center">
					<button type="button" className="btn btn-success" onClick={props.onStart}>Start</button>
					<button type="button" className="btn btn-danger" onClick={props.onStop}>Stop</button>
					<button type="button" className="btn btn-secondary" onClick={props.onReset}>Reset</button>
				</div>
				<div className="col-4 d-flex mb-2 justify-content-center">					
					<button type="button" className="btn btn-primary" onClick={props.onCountDown}>Count Down</button>
					<input onChange={props.onInputChange} value={props.inputValue}type="text" className="form-control w-25" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
				</div>
				<div className="col-4 d-flex mb-2 justify-content-center">
					<button type="button" className="btn btn-warning" onClick={props.onAlert}>Alert</button>
					<input onChange={props.onAlertInputChange} value={props.alertInputValue} type="text" className="form-control w-25" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>					
				</div>
			</div>
		</div>
	);
};

export default Home;
