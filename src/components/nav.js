import Link from "next/link";
import styles from "@/styles/nav.module.css"

const Nav = () => {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <dev>Home</dev>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <dev>About</dev>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <dev>Blog</dev>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav