import React,{Component} from 'react';
import ReposList from './ReposList.jsx';

class  Profile extends Component{
    render(){
        return(                
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                    {this.props.userData.name}
                  </h3>
              </div>
                {
                    // noi thuc hien chua body của đối tượng vào 
                }
              <div className="panel-body">
                <div className="row">
                    <div className="col-md-4">
                        
                        {
                            
                            this.props.userData.map
                        }
                        <img src ={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="label label-default">{this.props.userData.public_repos} public repos</span>
                                <span className="label label-success">{this.props.userData.public_gists} public gist</span>
                                <span className="label label-info">{this.props.userData.followers} followers</span>
                                <span className="label label-warning">{this.props.userData.following} following</span>
                            </div> 
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="co-md-12">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Username: </strong>{this.props.userData.login} 
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Email: </strong>{this.props.userData.email}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Location: </strong>{ this.props.userData.location == null ? 'null' : this.userData.location}
                                    </li>
                                </ul>
                            </div>
                        <br/>
                        <button className="btn btn-primary" type="button" href={this.props.userData.html_url}>
                          Visit profile
                        </button>
                        </div>
                    </div>
                    </div>
                  <div className="co-md-8">
                       <hr/> 
                            <ReposList  userRepos = {this.props.userRepos} />   
                  </div>
              </div>
            </div>

        );
        
        
    }
    
}
export default Profile;