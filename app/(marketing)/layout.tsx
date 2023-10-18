import { Navbar } from './_components/navbar';

const MarketingLayout = ({
    children}:
    {
        children:React.ReactNode
    }) => {
    return ( 
        <div className="h-full dark:bg-[#1f1f1f]">
            <Navbar/>
            <main className="h-fill pt-40">
                {children}
            </main>
        </div>
    );
}
 
export default MarketingLayout;