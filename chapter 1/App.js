const heading= React.createElemment( "div",{id:"parent"},[
    React.createElemment( "div",{id:"child"},
    [React.createElemment( "h1",{},"this is H1 from c1"),
    React.createElemment( "h2",{},"this is H2 from c1")],

    React.createElemment( "div",{id:"child2"},
    [React.createElemment( "h1",{},"this is H1 from c2"),
    React.createElemment( "h2",{},"this is H2 from c2")],
]
    );
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);