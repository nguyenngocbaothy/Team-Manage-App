import React, { Component } from 'react';

export class TableMember extends Component {
    state = {}
    render() {
        const { name, phone } = this.props.member;
        return (
            <div>
                <table className="table table-striped" style={{width: '50%'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}