// const heading = React.createElement('h1',{id:"heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("head"));
// root.render(heading)

/* <div id="parent">
        <div id="child">
            <h1>I'm in h1</h1>
            <h2>I'm in h2</h2>
        </div>
</div> */

const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h1 tag")
        ]
    ))
const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(heading)