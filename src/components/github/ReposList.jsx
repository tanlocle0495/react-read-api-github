import React,{Component} from 'react';
import  Repos from './Repos.jsx';

class  ReposList extends Component{
// menth
   
    componentDidMount(){
    }
    
    render(){
        var userRepos = this.props.userRepos;
        
      return(
          
                 <ul className="list-group">
                  {
                        userRepos.map((repos, i) => <Repos key = {i} repos = {repos} />)

                  }
                  
              </ul>
      );
    }
    
}
export default ReposList;