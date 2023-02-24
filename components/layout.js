import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
    return(
        <>
            <dv className="bg-primary">
            <Header/>
            <div>{children}</div>
            <Footer/>
            </dv>
        </>
    );
}