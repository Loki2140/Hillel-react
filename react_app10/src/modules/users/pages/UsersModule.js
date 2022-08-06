import { Outlet } from 'react-router-dom';
import React from 'react';

function UsersModule() {
    return (
        <div>
            <h3>Users Management</h3>
            <Outlet />
        </div>
    );
}

export default UsersModule;
