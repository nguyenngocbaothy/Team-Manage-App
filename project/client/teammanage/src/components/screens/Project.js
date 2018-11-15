import React, { Component } from 'react';
import { TableProject } from '../screens/TableProject';
import axios from 'axios';
import { connect } from 'react-redux';


export class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: ''
        }

        this.createProject = this.createProject.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/project/')
        .then(data => {
            // console.log(data.data.projects);
            this.props.dispatch({type: 'GET_PROJECTS', projects: data.data.projects})
        });
    }

    createProject() {
        const { txtName } = this.state;
        axios.post('http://localhost:4000/project/', { 
            name: txtName
        })
        .then(data => {
            console.log(data.data.project);
            this.props.dispatch({type: 'CREATE_PROJECT', project: data.data.project})
        });

        this.setState({txtName: ''});
    }

    render() {
        return (
            <div>
                <div style={{ width: '400px' }}>
                    <h3>CREATE PROJECT</h3>

                    <br />

                    <input
                        type='text'
                        className="form-control"
                        placeholder="Name"
                        value={this.state.txtName}
                        onChange={evt => this.setState({ txtName: evt.target.value })}
                    />

                    <br />

                    <button
                        className="btn btn-success"
                        onClick={this.createProject}
                    >
                        CREATE
                    </button>

                    <br />

                   {this.props.projects.map(project => <TableProject key={project._id} project={project} />)}
                </div>


            </div>
        );
    }
}

const mapStateToProp = state => ({projects: state.projects});

export const Project = connect(mapStateToProp)(ProjectComponent)