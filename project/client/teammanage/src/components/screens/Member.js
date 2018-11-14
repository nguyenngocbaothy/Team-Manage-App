import React, { Component } from 'react';

export class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPhone: ''
        }
    }

    render() {
        return (
            <div
                style={{ width: '200px' }}
            >
            <div>
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
                >
                    CREATE
                </button>
            </div>
                
            <br />
            
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}