import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <dev>Home</dev>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">
                        <dev>About</dev>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">
                        <dev>Blog</dev>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav