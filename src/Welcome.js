import { Link, Outlet } from "react-router-dom";

function welcome() {
    return (
        <>
            <h1>ini halaman welcome</h1>
            <p>Jika kalian ingin mengetahui tentang kami silahkan klik <Link to="about">link ini</Link> </p>

            <Outlet />
        </>
    );
}

export default welcome;