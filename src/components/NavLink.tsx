import Link from "next/link";

type Props = {
    children?: React.ReactNode;
    href: string;
    className?: string;
}

const NavLink = ({ children, href, ...props }: Props) => {
    return (
        <Link 
            href = {href}
            {...props}
        >
            {children}
        </Link>
    )
}

export default NavLink