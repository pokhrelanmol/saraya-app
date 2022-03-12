import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./componets/Hero";
import Form from "./componets/Form";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Hero />
            <Form />
        </div>
    );
}

export default App;
