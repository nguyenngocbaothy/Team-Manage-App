import React, { Component } from 'react';
import { TableMember } from '../screens/TableMember';
import axios from 'axios';
import { connect } from 'react-redux';

export class MemberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPhone: ''
        }

        this.createMember = this.createMember.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/member/')
        .then(data => {
            this.props.dispatch({type: 'GET_MEMBERS', members: data.data.members})
        });
    }

    createMember() {
        const { txtName, txtPhone } = this.state;
        axios.post('http://localhost:4000/member/', { 
            name: txtName,
            phone: txtPhone
        })
        .then(data => {
            this.props.dispatch({type: 'CREATE_MEMBER', member: data.data.member})
        });

        this.setState({txtName: '', txtPhone: ''});
    }

    render() {
        return (
            <div>
                <div style={{ width: '200px' }}>
                    <h3>CREATE MEMBER</h3>

                    <br />

                    <input
                        type='text'
                        className="form-control"
                        placeholder="Name"
                        value={this.state.txtName}
                        onChange={evt => this.setState({ txtName: evt.target.value })}
                    />

                    <br />

                    <input
                        type='number'
                        className="form-control"
                        placeholder="Phone"
                        min='0'
                        value={this.state.txtPhone}
                        onChange={evt => this.setState({ txtPhone: evt.target.value })}
                    />

                    <br />

                    <button
                        className="btn btn-success"
                        onClick={this.createMember}
                    >
                        CREATE
                    </button>
                </div>

                <br />

                {this.props.members.map(member => <TableMember key={member._id} member={member} />)}
            </div>
        );
    }
}

const mapStateToProp = state => ({members: state.members});

export const Member = connect(mapStateToProp)(MemberComponent)