import React, { Component } from 'react';
import appStore from './Store'


class News extends Component {
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
      </div>
    );
  }
}

export default News;
