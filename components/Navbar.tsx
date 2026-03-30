import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ThemeToggle } from './themeToggle'

const navLinks = [
    {title: "Home", url: "/", id: 1},
    {title: "Blogs", url: "/", id: 2},
    {title: "Create", url: "/", id: 3}
]

export default function Navbar() {
    return (
        <header className='w-full px-3 py-3 '>
            <nav className='w-full flex items-center justify-between'>
                {/* Left Side = Logo + Links */}
                <div className="flex items-center gap-4">
                    <Link href="/" className='text-3xl font-bold'>
                        Next <span className='text-blue-500'>Pro</span>
                    </Link>

                    <div className="flex items-center gap-2">
                        {navLinks.map((item)=> (
                            <Link className={buttonVariants({variant: "ghost"})} href={item.url} key={item.id}>{item.title}</Link>
                        ))}
                    </div>
                </div>

                {/* Right Side = Theme toggle + Buttons */}

                <div className="flex gap-2 items-center">
                    <Button asChild variant='ghost'>
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
