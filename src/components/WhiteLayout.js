import { Outlet, Link } from "react-router-dom";

const WhiteLayout = () => {
    return (
        <main id="innerGrid" className="container justify-center">
            <Outlet />
        </main>
    );


};

export default WhiteLayout;