import React from 'react';

const Tool = (props) => {
	return (
		<div className="Tools">
			<div className="Tool-Top">
				<div className="Tool-Image">
					<img className="Cover-Image" src={props.image_url} alt="Book Cover" />
				</div>
			</div>
			<ul className="Tool-Info">
				<li>Tool:{props.tool}</li>
				<li>Price: $ {props.price}</li>
				<li>Description {props.description}</li>
			</ul>
		</div>
	);
};

export default Tool;
