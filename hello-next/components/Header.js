import Link from "next/link";
const linkStyle = {
    marginRight: 15
}
export default function Header() {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>home</a></Link>
            <Link href="/about"><a style={linkStyle}>about</a></Link>
        </div>
    )
}