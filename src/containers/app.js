import React from 'react'
import Search from "../components/search"
import  CardList from "../components/cardlist";
import Scroll from "../components/scroll";
import "./app.css"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{return response.json()})
        .then(users=>{this.setState({robots:users})})

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
        if (!robots.length) {
            return <h1>Loading....</h1>
        } else {
            return (
                <div>
                    <h1 style={{textTransform:"uppercase", color:"rgb(153, 255, 204)"}} >Robofriends</h1>
                    <Search searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }

    }
}

export default App