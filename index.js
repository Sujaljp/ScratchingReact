import React from 'react';
import ReactDOM from 'react-dom/client';

// Introduction to React with simple element
const heading = React.createElement('h1',{},"Helllo there ")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

//nested element along with siblings
const parent = React.createElement('div',{id:'parent'},[
    React.createElement('h1',{id:'child1'},'Hello there '),
    React.createElement('h2',{id:'child2'},'This is a h2 ')]
)
console.log(parent)
root.render(parent)