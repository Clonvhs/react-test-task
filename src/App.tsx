import React from 'react';
import './App.css';
import {CreateJsonList} from './dataList';
import {List} from './components/List';
import {CreateListForm} from "./components/CreateListForm";

const App: React.FC = () => {
    const list = JSON.parse(CreateJsonList(3, 2));

    return (
        <div className="App">
            <CreateListForm/>
            <List list={list}/>
        </div>
    );
}

export default App;
