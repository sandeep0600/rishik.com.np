import React, {Component} from 'react'
import Aux from '../../hoc/_Aux'

class Showcat extends Component {
    render(){
        return(
            <Aux>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Slug</th>
                            <th>Count</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>2</td>
                            <td><button type="button" className="btn btn-outline-primary btn-sm">Edit</button>&nbsp;<button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
                        </tr>
                        </tbody>
                    </table>
            </Aux>
        )
    }
}

export default Showcat