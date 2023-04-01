import './App.css'
import Header from "./Header";
import axios from "axios";
import {useEffect, useState} from "react";
import DisplayCard from "./DisplayCard";
import Clothes from "./Clothes";

const Body = () => {
    //fetch clothes & shoes from Home component
    const [upcomingReleases, setUpcomingReleases] = useState([]);

    //fetch upcoming shoes & clothing from backend
    const fetchUpcomingReleases = async () => {
        try {
            const response = await axios('http://localhost:8080/upcomingReleases');
            console.log(response.data);
            setUpcomingReleases(response.data);
        }catch (error){
        console.log(error.response); }
    }
    //render on each change/update
    useEffect(() => {
        fetchUpcomingReleases();
    },[]);

        return (
        <>
            <div className='container-fluid home-parent-container'>
                    <div className='col'>
                        <h1 className='home-display-title'>Upcoming Releases</h1>
                        <div className='row justify-content-center'>
                            {
                                //display each item in Display card comp
                                upcomingReleases.map((item)=> {
                                    return <DisplayCard item={item}/>
                                })
                            }
                        </div>
                    </div>
            </div>

        </>
    )
}
export default function Home(props){
    //fetch props from index.js -> give access to Body component
    const {clothes, shoes} = props;
    return(
        <>
            <div>
                <Header />
                <div>
                    <Body clothes={clothes} shoes={shoes}/>
                </div>
            </div>


        </>
    );
}