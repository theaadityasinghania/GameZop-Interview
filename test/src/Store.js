import {observable, action, computed} from 'mobx';



class Store{

	@observable userList = []

	@action setPosts(json){
		// console.log(json);
		this.userList=json
	}

	@computed get sumOfId(){
		return this.userList.filter(({userId}) => userId === 1).reduce((n,u)=>{
				return n + u.id;
		}, 0)
	}
}


const appStore = new Store();
export default appStore;