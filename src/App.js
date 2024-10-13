// Filename - App.js

import "./App.css";
import { React, useState } from "react";

function App() {
    const [user, setUser ] = useState("");
    const [repo, setRepo] = useState("");
    const [commitLog, setCommitLog] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
          user,
          repo,
        );
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

                    <label htmlFor="commit">Commit Log</label>
                    <textarea
                        name="commit"
                        id="commit"
                        cols="30"
                        rows="50"
                        disabled="True"
                        placeholder="Request change logs are displayed here..."
                        required
                    ></textarea>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
