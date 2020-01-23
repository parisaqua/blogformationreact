import React, { Component } from 'react'

import './PostModale.css'
import axios from 'axios'

class PostModale extends Component {

    state = {
        loadedPost : null
    }

    componentDidUpdate() {
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                 axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        //console.log(response)
                        this.setState({
                            loadedPost: response.data
                        })
                })
            }
        }
    }
    
    render () {

        return (
            this.state.loadedPost && this.props.toggle ? 
                <div className="PostComplet">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p> {this.state.loadedPost.body} </p>
            
                    <button className="btn btn-danger my-3 btnPost"
                    onClick={this.props.cache}>
                    Fermer
                    </button>
                
                </div>
                : null
            
            )
        
    
    }
}

export default PostModale;
