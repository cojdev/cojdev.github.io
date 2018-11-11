import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Main />
            </div>
        )
    }
}