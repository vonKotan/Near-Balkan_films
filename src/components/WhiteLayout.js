import { Outlet, Link } from "react-router-dom";

const WhiteLayout = ({ user, userObject }) => {
    return (
        <main id="innerGrid" className="container justify-center">
            <Outlet />
        </main>
    );


};

export default WhiteLayout;