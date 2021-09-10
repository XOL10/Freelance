import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    //Helper function to put all the logic in there
    renderContent() { 
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }else if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;
        }else{
            return <Spinner message="Please allow us to reach your location" />
        }
    };
    
    //Shouldn't have many returns in render() that why the helper function is for.
    render() {
       return (
        <div className="Border Red">
            {this.renderContent()}
        </div>
       );
    };
};

ReactDom.render(<App />, document.querySelector('#root'));