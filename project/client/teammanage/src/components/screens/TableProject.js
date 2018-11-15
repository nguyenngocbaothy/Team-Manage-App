import React, { Component } from 'react';

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

export class TableProject extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleMember: false
        }

        this.toggle = this.toggle.bind(this);
        this.toggleMember = this.toggleMember.bind(this);
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
                        <select className="form-control" style={{ width: '200px' }}>
                            <option>name</option>
                            <option>name</option>
                            <option>name</option>
                        </select>
                    </div>

                    <br />

                    <div style={{ marginLeft: '10px' }}>
                        <button style={{ marginLeft: '5%' }} className="btn btn-success" onClick={this.toggle}>Add</button>
                        <button style={{ marginLeft: '6%' }} className="btn btn-success" onClick={this.toggle}>Cancel</button>
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
                                <tr>
                                    {this.props.project.member.map(e => {
                                        return (
                                                <React.Fragment key={e._id}>
                                                    <td>{e.name}</td>
                                                    <td>{e.phone}</td>
                                                </React.Fragment>
                                            );
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <br />

                    <div style={{ marginLeft: '10px' }}>
                        <button style={{ marginLeft: '1%' }} className="btn btn-success" onClick={this.toggleMember}>Cancel</button>
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