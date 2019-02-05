import React from "react";
import NewForm from "./forms/New";
import DummyData from "../dummy";

const App = () => {
    return (
        <div>
            <NewForm data={DummyData} />
        </div>
    );
}

export default App;