const root = ReactDOM.createRoot(document.getElementById('root'))

function CardButton() {
    return <button>Button</button>
} 

function CardHeader() {
    return <h2>This is header</h2>
}

function CardText() {
    return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda impedit aperiam odit velit! Expedita est ipsum quos tempore at repellat.</p>
}

function CardImage() {
    return <img src="https://placekitten.com/g/230/130" alt="cat" />
}

function Card() {
    return <div class="my-card">
        <CardImage />
        <CardHeader />
        <CardText />
        <CardButton />
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