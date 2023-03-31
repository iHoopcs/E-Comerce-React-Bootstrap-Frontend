import './App.css'
import Header from "./Header";


const Body = () => {
    return (
        <>
            <div className='container body-container'>
                <h1>Body</h1>
            </div>
        </>
    )
}
export default function Home(){
    return(
        <>
            <div>
                <Header />
                <div>
                    <Body />
                </div>
            </div>


        </>
    );
}