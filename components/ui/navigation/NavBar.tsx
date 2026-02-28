export default function NavBar() {
    return (
        <>
        <header className=" sticky top-0 z-50 w-full bg-amber-500">
            <div className="container-wrapper 3xl:fixed:px-0 px-6">
                <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
             
              <span className="text-lg font-semibold tracking-tighter">
                RDT
              </span>
            </a>
            <div className="flex items-center"></div>
            </div>
            </nav>
            </div>
        </header>
        </>
    )
}