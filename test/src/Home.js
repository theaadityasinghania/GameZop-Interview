import React, { Component } from 'react';
import {observer} from 'mobx-react';
import appStore from './Store';
import {Link} from 'react-router-dom'


@observer
class Home extends Component {

	setNewPost(json){
		const store = appStore;
		// console.log(json);
		store.setPosts(json);
	}


	click(){
		let baseURL = "https://jsonplaceholder.typicode.com/posts";
		let url = new URL(baseURL)
		fetch(url)
		.then(data=>data.json())
		.then(json=>this.setNewPost(json)) //instead of console.log(json)
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
	    						<table>
	    							<tbody>
	    								{
			    							store.userList.map((u,i)=>{
			    								if(u.userId===1){
			    									return(
				    									<tr key={i}>
				    										<td>{u.id} : {u.title}</td>
				    									</tr>
				    								)
			    								}
			    							})
			    						}
	    							</tbody>
	    						</table>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div className="center-align">This is the sum: {store.sumOfId}</div>

	    		<div className="center-align">
	    			<br/>
	    			<button onClick={()=>this.click()}>GET DATA</button>
	    		</div>

	    		<div className="center-align">
	    			<br/>
	    			<button><Link to="/news">SWITCH</Link></button>
	    		</div>
	    	</div>
	    );
	}
}

export default Home;