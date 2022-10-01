import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
            <h1>ini halaman Blog</h1>
            <ul>
                <li><Link to="artikel-1">Artikel-1</Link></li>
                <li><Link to="artikel-2">Artikel-2</Link></li>
                <li><Link to="artikel-3">Artikel-3</Link></li>
            </ul>

        </>
    );
}

export default Blog;