import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/Register";
import Todo from "./components/todo";

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