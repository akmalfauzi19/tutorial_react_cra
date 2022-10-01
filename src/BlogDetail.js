import { useParams } from "react-router-dom";

function BlogDetail() {
    const urlParams = useParams();

    return (
        <>
            <h1>ini Detail Blog</h1>
            <p>Ini halaman detail {urlParams.slug}</p>
        </>
    );
}

export default BlogDetail;