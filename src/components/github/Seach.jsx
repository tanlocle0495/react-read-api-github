import React,{Component} from 'react';
class Seach  extends  Component{
    //khi on submit thi no tra ve mot gia tri
    onSubmit(e){
        e.preventDefault();
        let username =this.refs.username.value.trim();// truyềnlyaa dư liêu từ user nmae va cat khoản trắng 
        if(!username){
            console.log("please add username");
            return;
        }
        // lấy cai form tư app
        this.props.onFromSubmit(username);
        // set lại value cho nó
        this.refs.username.value='';
    }
        render(){
            return(
                <div>
                    {
                    
                        //biến ref có thể là dữ lieuwjđclấu  trong 
                        // tạo một biến để đăng kí và môt onsubmit  
                        
                    }
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>
                        Seach github user
                    </label>    
                    <input type="text" ref="username"  className="form-control"/>
                </form>
                </div>
            );   
        }
}
export default Seach;