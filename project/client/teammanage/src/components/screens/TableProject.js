import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

const displayMember = {
    display: 'block'
};
const hideMember = {
    display: 'none'
};

export class TableProjectComponent extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleMember: false,
            memberId: ''
        }

        this.toggle = this.toggle.bind(this);
        this.toggleMember = this.toggleMember.bind(this);
        this.addMemberToProject = this.addMemberToProject.bind(this);
    }

    componentDidMount() {
        if (this.props.members.length === 0) {
            axios.get('http://localhost:4000/member/')
                .then(data => {
                    this.props.dispatch({ type: 'GET_MEMBERS', members: data.data.members })
                });
        }
    }

    toggle(event) {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    toggleMember(event) {
        this.setState(prevState => ({
            toggleMember: !prevState.toggleMember
        }));
    }

    addMemberToProject() {
        if (this.state.memberId === '') {
            alert('Please choose member to add to project!');
            return;
        }

        axios.post('http://localhost:4000/project/addmember', {
            projectId: this.props.project._id,
            memberId: this.state.memberId
        })
            .then(data => {
                if (data.data.success) {
                    alert('Add member successfully!');
                    this.toggle();
                } else {
                    alert(data.data.message);
                }
            });
    }

    render() {
        // modal add member
        var modal;
        modal = (
            <div key="" className="modal" style={this.state.toggle ? display : hide}>
                <div className="modal-content" style={{ width: '500px', margin: 'auto', marginTop: '15%', backgroundColor: '#e6e8ed' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4>SELECT MEMBERS</h4>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <label>Member name: </label>
                        <select
                            className="form-control" style={{ width: '200px' }}
                            onChange={evt => this.setState({ memberId: evt.target.value })}
                        >
                            {this.props.members.map(e => {
                                return <option key={e._id} value={e._id}>{e.name}</option>;
                            })}
                        </select>
                        {/* <pre>{this.state.memberId}</pre> */}
                    </div>

                    <br />

                    <div>
                        <button style={{ margin: '4% 4%' }} className="btn btn-success" onClick={this.addMemberToProject}>Add</button>
                        <button style={{ margin: '4% 4%' }} className="btn btn-success" onClick={this.toggle}>Cancel</button>
                    </div>

                </div>
                {/* <div className="modal-footer" style={{width: '500px', margin: 'auto', backgroundColor: '#e6e8ed'}}>
            <button className="btn btn-success" onClick={this.toggle}>Agree</button>
        </div> */}
            </div>
        );

        // model show member
        var modalMember;
        modalMember = (
            <div key="" className="modal" style={this.state.toggleMember ? displayMember : hideMember}>
                <div className="modal-content" style={{ width: '500px', margin: 'auto', marginTop: '15%', backgroundColor: '#e6e8ed' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4>MEMBERS</h4>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.project.member.map(e => {
                                    return (
                                        <React.Fragment key={e._id}>
                                            <tr>
                                                <td>{e.name}</td>
                                                <td>{e.phone}</td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <br />

                    <div style={{ marginLeft: '10px' }}>
                        <button style={{ margin: '2% 1%' }} className="btn btn-success" onClick={this.toggleMember}>Cancel</button>
                    </div>

                </div>
            </div>
        );

        return (
            <div>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th style={{ textAlign: 'center' }}>Add Member</th>
                                <th style={{ textAlign: 'center' }}>View Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.project.name}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <i className="fas fa-user-plus" onClick={this.toggle}></i>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <i className="fas fa-users" onClick={this.toggleMember}></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    {modal}
                </div>

                <div>
                    {modalMember}
                </div>

            </div>
        );
    }
}

const mapStateToProp = state => ({ members: state.members });

export const TableProject = connect(mapStateToProp)(TableProjectComponent)