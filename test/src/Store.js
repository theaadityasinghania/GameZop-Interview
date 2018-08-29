import {observable, action, computed} from 'mobx';



class Store{

	@observable userList = []

	@action addUser(json){
		this.userList.push(json)
	}

	@computed get idCount(){}
}


const appStore = new Store();
export default appStore;