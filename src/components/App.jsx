import React,{Component} from 'react';
import  Profile  from './github/Profile.jsx';
import Seach from './github/Seach.jsx';
import Demo from './Demo.jsx';

class  App extends Component{
     constructor(props){
        super(props);
//        thuc hien  luu vao state 
        this.state={
             username : 'letanloc', // ten dang nhap tren git
            userData : [],// arr  user 
            userRepos: [],// arr repo  
            perPage : 5 // page         
        }
    }
    //PHƯƠNG THƯC DÙNG ĐỂ LẤY DỮ LIỆU TỪ SERVER Ở ĐÂY LÀ GITHUB
  getgUserData(){
     // sử dụng ajax của javascript để kết nối dữ lịêu và láy dữ liệu từ server vể client 
        //thuc hien lay du lieu 
             $.ajax({
            url :"https://api.github.com/users/"+this.state.username+"?per_page="+this.state.perPage+"client_id="+this.props.clientId+"&clientSecret="+this.props.clientSecret, 
                datatype : "json",
            cacher :false , // cacher là lưu  bô nhó vào ram
            success :function(data){
                // sau khi lấy dữ liêu về rồi  và luê nó vào state 
                //lưu vào  state để khi làm có thể lấy nó ra
                    
                this.setState({userData : data});
            }.bind(this),
            err :function (xhr,status,err){
                //   khi lưu dũ liệu không thành công thì set dữ liệu null
                    this.setState({username: null});
            }.bind(this)
            
        });
    }
//------get repos
     getUserRepos(){
     // sử dụng ajax của javascript để kết nối dữ lịêu và láy dữ liệu từ server vể client 
        //thuc hien lay du lieu 
             $.ajax({
            url :"https://api.github.com/users/"+this.state.username+"/repos?client_id="+this.props.clientId+"&clientSecret="+this.props.clientSecret, 
                datatype : "json",
            cacher :false , // cacher là lưu  bô nhó vào ram
            success :function(data){
                // sau khi lấy dữ liêu về rồi  và luê nó vào state 
                //lưu vào  state để khi làm có thể lấy nó ra
                this.setState({userRepos : data});
                                
                    console.log("ssaass"+this.state.userRepos);
            }.bind(this),
            err :function (xhr,status,err){
                //   khi lưu dũ liệu không thành công thì set dữ liệu null
                    this.setState({username: null});
            }.bind(this)
            
        });
    
    }
    handSubmit(username){
     this.setState({username : username},function(){
            this.getUserRepos();
        this.getgUserData();
         
     });   
    }
    componentDidMount(){
        this.getUserRepos();
        this.getgUserData();
        
    }
        render(){
            return(
                <div>
                       <Seach onFromSubmit ={this.handSubmit.bind(this)}/>
                    <Profile    userData  ={this.state.userData}
                               userRepos={this.state.userRepos} 
                        />
                 
              </div>  
            );
        }    
}
//default 
// becaus  it is in app  get default value
// no dung de xac nhan 

App.propTypes = {
    clientId : React.PropTypes.string, 
    clientSecret : React.PropTypes.string
};
// value default it is key of github application  
App.defaultProps ={
    clientId : 'fea938e0518df009935e',
    clientSecret : '7f1fdf86c762d9789f6100698a2dcce4b8a83df9'
}

export default App;