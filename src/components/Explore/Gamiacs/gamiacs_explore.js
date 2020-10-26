import React, { Component } from 'react';
import {gam_explore_function} from './gamiacs_explore_function';
import './gamiacs_explore.css';
import './gamiacs_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {GamiacCards} from './gamiacs_cards'
import axios from 'axios';

class gamiacs_explore extends Component {
	state={
		gamiacs:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		gam_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		axios.get('http://localhost:4500/api/events/bytype/gamiacs/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2h3YW5pIiwic3ViIjoiNWY5MDMwY2EyZjIyYjU0ZTA0NGY2NTQ3IiwiaWF0IjoxNjAzMzA0Njg0OTM5LCJleHAiOjE2MDU4OTY2ODQ5Mzl9.Z-GG5gzl_sFCSpJtB7uNHEzBhiJImgFaxOI0UTNjzs0",
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ gamiacs: data });
			console.log('Data has been received!!');
			
		  })
		  .catch(() => {
			alert('Error retrieving data!!!');
		  });
	}

	render() {
		return (
			<div>
				<BackToEvents />
				<div className="gam_cont s--inactive">
				  <div className="gam_cont__inner">
				  	<GamiacCards events={this.state.gamiacs} />
				  </div>
				</div>
			</div>
		)
	}
}

export default gamiacs_explore;