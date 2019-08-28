// create your App component here
import React from 'react';

class App extends React.Component{

state = {
    space: []
}
    
    render(){
        return(
            <div>
            {this.state.space.map(people => people.name)}
            </div>
            )
        }
        
    componentDidMount(){
            fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(spaceArr => {
                this.setState({
                    space: spaceArr.people
                })
            })
        }
}

export default App