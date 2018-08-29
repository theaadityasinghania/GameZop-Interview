import React, { Component } from 'react';
import {observer} from 'mobx-react';
import appStore from './Store'


@observer
class Home extends Component {

	addNewUser(json){
		const store = appStore;
		console.log(json);
		store.addUser(json);
	}


	click(){
		let baseURL = "https://jsonplaceholder.typicode.com/posts";
		let url = new URL(baseURL)
		fetch(url)
		.then(data=>data.json())
		.then(json=>this.addNewUser(json)) //instead of console.log(json)
	}

	render() {
		const store = appStore;
	    return (
	    	<div>
	    		<div className="row">
	    			<div className="col s12 m12 l12">
	    				<div className="card blue-grey darken-1">
	    					<div className="card-content white-text">
	    						<span className="card-title">Data</span>
	    						<p>
	    						</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>

	    		<button onClick={()=>this.click()}>GET DATA</button>
	    	</div>
	    );
	}
}

export default Home;
