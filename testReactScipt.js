console.log("rect index")


function HelloWorld() {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        console.log("use")
        console.log(count)
    }, [count]);
    return (
        <div>
            <p>{count}</p>
            <h1 onClick={() => {
                setCount(prev => prev + 1);
                console.log("click")
            }}>Hello, world!</h1>
            <p>This is a React component rendered via CDN.</p>
            <button onClick={() => {
                console.log("bt")
            }}>bt</button>
        </div>
    );
}

// Render the component to the DOM
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
