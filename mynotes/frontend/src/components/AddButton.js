import React from "react";
import { ReactComponent as AddBtn } from "../assets/add.svg";
import { Link } from "react-router-dom";

const AddButton = () => {
	return (
		<div>
			<Link className='floating-button' to='/note/new'>
				<AddBtn />
			</Link>
		</div>
	);
};

export default AddButton;
