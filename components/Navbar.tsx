import Link from 'next/link'

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

                    <div className="flex items-center gap-3">
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}
