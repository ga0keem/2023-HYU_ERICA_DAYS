import Link from 'next/link';
import DarkModeToggle from './dark-mode-toggle';

export default function Header(){
    return(
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    
                    <Link href="/">
                        <a className="flex title-font font-semibold items-center hover:text-gray-900 mb-4 md:mb-0">
                         <span className="ml-3 text-2xl">DAYS</span>
                        </a>
                    </Link>
                    
                    <nav className="md:ml-auto flex flex-wrap items-center justify-center">
                       
                        <Link href="/">
                        <a className="mr-5 hover:text-gray-900 text-lg">Home</a>
                        </Link>

                        <Link href="/recruiting">
                        <a className="mr-5 hover:text-gray-900 text-lg">모집공고</a>
                        </Link>
                    
                        <Link href="/curriculum">
                        <a className="mr-5 hover:text-gray-900 text-lg">Curriculum</a>
                        </Link>

                        <Link href="/members">
                        <a className="mr-5 hover:text-gray-900 text-lg">Members</a>
                        </Link>

                        <Link href="/mentors">
                        <a className="mr-5 hover:text-gray-900 text-lg">Mentors</a>
                        </Link>

                        <Link href="/projects">
                        <a className="mr-5 hover:text-gray-900 text-lg">Projects</a>
                        </Link>
                        
                        <a href="https://open.kakao.com/o/sV7hawGe" className="mr-5 hover:text-gray-900 text-lg">contact</a>
                    
                    </nav>
                    <DarkModeToggle/>
                </div>
            </header>
        </>
    );
}