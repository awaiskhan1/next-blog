import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
  return (
    <header id="navbar-sticky" className="navbar bg-slate-900">
        <div className="container">
            <nav className="w-full">
                <a href="index-5.html" className="logo">
                    <Image src="/assets/images/logo/logo-no-background.png" height={10} width={100} className="h-10" alt="Logo" />
                </a>

                <div className="lg:hidden flex items-center ms-auto px-2.5">
                    <button className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5" type="button" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu" className="lucide lucide-menu h-5 w-5 stroke-white"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                    </button>
                </div>

                
                <div id="mobileMenu" className="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0">
                    <ul id="navbar-navlist" className="navbar-nav">
                        
                        <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link className="nav-link" href="/showcase">Showcase</Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link className="nav-link" href="/post">Blog</Link>
                        </li>
                    </ul>
                    
                    <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
                        <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-big-down-dash" className="lucide lucide-arrow-big-down-dash h-5 w-5 me-2"><path d="M15 5H9"></path><path d="M15 9v3h4l-7 7-7-7h4V9h6z"></path></svg> Download</a>
                    </div>
                </div>
                
                <div className="hidden lg:flex items-center">
                    <a href="#" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-big-down-dash" className="lucide lucide-arrow-big-down-dash h-5 w-5 me-2"><path d="M15 5H9"></path><path d="M15 9v3h4l-7 7-7-7h4V9h6z"></path></svg> Download</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navigation