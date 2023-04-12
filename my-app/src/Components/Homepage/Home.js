import './Home.css';
import Header from "../Header";
import axios from "axios";
import {useEffect, useState} from "react";
import DisplayCard from "../Products/DisplayCard";

const Body = () => {
    const API_URL = 'http://springbootbackendecommerce-env.eba-biverqpa.us-east-2.elasticbeanstalk.com';

    //fetch clothes & shoes from Homepage component
    const [upcomingReleases, setUpcomingReleases] = useState([]);

    //fetch upcoming shoes & clothing from backend
    const fetchUpcomingReleases = async () => {
        try {
            const response = await axios(API_URL + '/upcomingReleases');
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
            <div className='container home-parent-container mb-5'>
                    <div className='col'>
                        <h1 className='home-display-title'>Coming Soon...</h1>
                        <div className='row justify-content-center'>
                            {
                                //display each item in Display card comp
                                upcomingReleases.map((item)=> {
                                    return <DisplayCard item={item} key={item.id}/>
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