import React from "react"


class Main extends React.Component {
    constructor(props){
        super();
        this.state={
            data: null,
        }
    }
    componentDidMount(){
        this.fetchRandomUser();
    }

    fetchRandomUser = () => {
        fetch("https://randomuser.me/api/")
        .then((res)=>res.json())
        .then((data)=> 
            this.setState({
                data: data.results[0]
            })
        ) 
    }


    render(){
        const { data } = this.state;
        if(!data){
            return <h1>Loading.....</h1>
        }
        console.log(data, 'check')
        const { email, picture: { medium },name,login,phone} = data;
        return(
        <>
        <section className="container">
            <div>
                <div className="center">
                <img src={medium} alt={medium} />
                </div>
                
                <h3 className="center">My name is</h3>
                <p className="center">{name.title} <span>{name.first}</span> <span>{name.last}</span></p>
                <p className="center">Username:{login.username}</p>
                <p className="center">Password:{login.password}</p>
                <h2 className="center">{email}</h2>
                <div className="flex width">
                <i className="fa-solid fa-envelope" id="name" ></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-sensor-on"></i>
                <i class="fa-solid fa-phone"></i>
                <i class="fa-solid fa-lock"></i>
                </div>
                 {/* <p>{gender}</p>
              <p>{email}</p>  */}
            </div>
            <div className="button"> 
                <button onClick={this.fetchRandomUser}>Random User</button>
            </div>
       
        </section>
        </>

        )
    }
}


export default Main;