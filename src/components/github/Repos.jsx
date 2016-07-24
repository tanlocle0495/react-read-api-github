import React,{Component} from 'react';

class  Repos extends Component{
    render(){
      return(
           <li className="list-group-item">
                  <a href ={this.props.repos.html_url}>
                      {this.props.repos.name}
                  </a>
                                
              </li>
                      
      );
    }
    
}

export default Repos;