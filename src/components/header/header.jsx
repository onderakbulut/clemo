"use client";
import './index.css';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'

function Header() {
    const pathname = usePathname();

    return (
        <header className={`header border-bottom border-gray-50 bg-white z-10 position-sticky top-0 position-lg-fixed`}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image 
                                src="/logo.svg" 
                                alt="Logo"
                                width={100}  
                                height={50} 
                                className="align-baseline"
                            />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="myNav">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto column-gap-16">
                                <li className="nav-item">
                                    <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`}  aria-current="page" href="/about">about us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    services
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <Link className={`dropdown-item ${pathname === '/services' ? 'active' : ''}`} href="/services">services</Link>                                
                                        <Link className={`dropdown-item ${pathname === '/services/detail' ? 'active' : ''}`} href="/services/detail">services detail</Link>                                
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    works
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <Link className={`dropdown-item ${pathname === '/work' ? 'active' : ''}`} href="/work">works</Link>
                                        <Link className={`dropdown-item ${pathname === '/work/detail' ? 'active' : ''}`} href="/work/detail">works detail</Link>
                                    </ul>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" href="/blog">blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;