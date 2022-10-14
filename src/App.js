import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import RequireAuth from "./features/auth/RequireAuth";
import Welcome from "./features/auth/Welcome";
import UserList from "./features/users/UserList";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />

                {/* public routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="userList" element={<UserList />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
