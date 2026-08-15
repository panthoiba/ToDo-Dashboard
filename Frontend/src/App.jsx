import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Todo from "./Components/Todo";

function App() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/todo");
    };

    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login onLogin={handleLogin} />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/todo"
                element={<Todo />}
            />

        </Routes>
    );
}

export default App;