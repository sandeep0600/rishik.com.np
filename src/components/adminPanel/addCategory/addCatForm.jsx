import React, { Component } from 'react';
import Aux from '../../hoc/_Aux'

class Addcatform extends Component{
    render(){
        return(
            <Aux>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="name" className="form-control" id="name"/>
                    <small>The name is how it appears on your site.</small>
                </div>
                <div className="form-group">
                    <label for="slug">Slug:</label>
                    <input type="slug" className="form-control" id="slug"/>
                    <small>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</small>
                </div>
                <div className="form-group">
                    <label for="description">Description:</label>
                    <textarea type="description" className="form-control" id="description"/>
                    <small>The description is not prominent by default.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </Aux>
        )
    }
}
export default Addcatform