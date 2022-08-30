import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
	render() {
		const { catId, catName, catAddress } = this.props;
		return (
			<div className="card-container" key={catId}>
				<img
					src={`https://robohash.org/${catId}?set=set4&size=180x180`}
					alt={`cat ${catName}`}
				/>
				<h2>{catName}</h2>
				<p>{`${catAddress.street}, ${catAddress.suite}`}</p>
			</div>
		);
	}
}

export default Card;
