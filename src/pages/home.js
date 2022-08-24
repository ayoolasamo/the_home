import React from "react";
import Banner from "../components/banner";
import Searchbar from "../components/searchbar";
import Body from "../components/body";

const Home =()=>{
    return(
        <div>
            <Banner/>
            <Searchbar/>
            <Body/>
        </div>
    )
}
export default Home;