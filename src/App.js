// Filename - App.js

import "./App.css";
import { React, useState } from "react";

function App() {
    const [user, setUser ] = useState("");
    const [repo, setRepo] = useState("");
    const [commitLog, setCommitLog] = useState("");

    const fetchData = async () => {
        try{
            const response = await fetch(
                `http://localhost:5000/parameters?user=${user}&repo=${repo}`);
            const jsonData = await response.json();
            setCommitLog(jsonData["logs"]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    const handleReset = () => {
        // Reset all state variables here
        setUser("");
        setRepo("");
        setCommitLog("");
    };

    return (
        <div className="App">
            <h1>Change-Log User Display</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="user">
                        The User Name*
                    </label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        value={user}
                        onChange={(e) =>
                            setUser(e.target.value)
                        }
                        placeholder="Enter the github username"
                        required
                    />
                    <br/>
                    <label htmlFor="repo">The Repo Name*</label>
                    <input
                        type="text"
                        name="repo"
                        id="repo"
                        value={repo}
                        onChange={(e) =>
                            setRepo(e.target.value)
                        }
                        placeholder="Enter the repository name"
                        required
                    />
                    <br/>

                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>

                    <br/>
                    <label htmlFor="commit">Commit Log</label>
                    <textarea
                        name="commit"
                        id="commit"
                        cols="30"
                        rows="50"
                        disabled="True"
                        placeholder="Requested change logs are displayed here..."
                        required
                        value={commitLog}
                    ></textarea>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
