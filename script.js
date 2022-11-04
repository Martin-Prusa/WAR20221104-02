const root = ReactDOM.createRoot(document.getElementById('root'))

function Card() {
    return <div class="my-card">
        <img src="https://placekitten.com/g/230/130" alt="cat"></img>
        <h2>This is header</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda impedit aperiam odit velit! Expedita est ipsum quos tempore at repellat.</p>
        <button>Button</button>
    </div>
}

function App() {
    return <>
        <Card />
        <Card />
        <Card />
    </>
}

root.render(<App />)