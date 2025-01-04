import React, { useEffect, useState } from "react";
import Axios from "axios";

const CricketScore = () => {

    const [cricketScore, setCricketScore] = useState([])
    const [search, setSearch] = useState("")

    const fetchCricketScore = async () => { 
        const response = await Axios.get("https://api.cricapi.com/v1/cricScore?apikey=9717f91d-6b52-425e-8a05-14aebb161fc3")
        if (response.data) {
            setCricketScore(response.data.data)
        }

    }



    useEffect(() => { 
        fetchCricketScore()
    }, [])
    
    const filterCricketScore = cricketScore.filter((match) => {
        match.status !== 'Match not started' && (match.series.toLowerCase().includes(search.toLowerCase()) || match.t1.toLowerCase().includes(search.toLowerCase()) || match.t2.toLowerCase().includes(search.toLowerCase()))
    })

    return (

        
        <div className="bg-gradient-to-b from-blue-500 to-indigo-600
            max-w-screen-xl min-h-screen">
            
            <div className="flex items-center md:flex-row flex-col lg:flex-row justify-center gap-4 pt-5 p-8">
                <input onChange={(e) => setSearch(e.target.value)}
                    type='text' className="lg:w-[40%] w-full p-4 border-none border-gray-500 outline-none rounded-lg"
                    placeholder="Search your team"/>
                <button className="'px-6 py-2 p-2 w-full md:w-fit lg:w-fit rounded-lg border-none outline-none
                    bg-blue-700 text-white hover:bg-white hover:text-black
                    duration-300 transition">Search</button>
            </div>

            <div className="w-full h-full grid 
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3 gap-4 mt-5 p-5">
                {filterCricketScore ? (
                    filterCricketScore.map((match, index) => {
                        return(
                        <div className="card bg-white shadow-xl rounded-lg p-4">
                            <h2 className="text-lg font-semibold">{match.series}</h2>
                            <h4 className="opacity-70 mt-2">{match.matchType}</h4>
                            <div className="flex items-center gap-5 justify-center">
                                <div className="flex items-center justify-center flex-col">
                                    <img className="h-28 rounded-lg object-cover object-center"
                                        src={match.t1img} alt="" />
                                    <h2 className="text-xl mt-2 mb-2">{match.t1}</h2>
                                    <h4 className="opacity-70 font-medium">{match.t1s?match.t1s:0}</h4>
            
                                </div>

                                <div className="flex items-center justify-center flex-col">
                                    <img className="h-28 rounded-lg object-cover object-center"
                                        src={match.t2img} alt="" />
                                    <h2 className="text-xl mt-2 mb-2">{match.t2}</h2>
                                    <h4 className="opacity-70 font-medium">{match.t2s?match.t2s:0}</h4>

                                </div>



                            </div>
                            <p className="text-black text-left">Status: <span className="text-green-600">{match.status}</span></p>
                        </div>
                    )})
                ) : "No Results found"}
            </div>
            <div className="w-full h-full grid             
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3 gap-4 mt-5 p-5">
                { cricketScore.length > 0 ? (
                    cricketScore.map((match, index) => {
                        return (
                        <div className="card bg-white shadow-xl rounded-lg p-4">
                            <h2 className="text-lg font-semibold">{match.series}</h2>
                            <h4 className="opacity-70 mt-2">{match.matchType}</h4>
                            <div className="flex items-center gap-5 justify-center">
                                <div className="flex items-center justify-center flex-col">
                                    <img className="h-28 rounded-lg object-cover object-center"
                                        src={match.t1img} alt="" />
                                    <h2 className="text-xl mt-2 mb-2">{match.t1}</h2>
                                    <h4 className="opacity-70 font-medium">{match.t1s?match.t1s:0}</h4>
            
                                </div>

                                <div className="flex items-center justify-center flex-col">
                                    <img className="h-28 rounded-lg object-cover object-center"
                                        src={match.t2img} alt="" />
                                    <h2 className="text-xl mt-2 mb-2">{match.t2}</h2>
                                    <h4 className="opacity-70 font-medium">{match.t2s?match.t2s:0}</h4>

                                </div>



                            </div>
                            <p className="text-black text-left">Status: <span className="text-green-600">{match.status}</span></p>
                        </div>
                    )})
                ) : (
                    <h2 className="text-center text-2xl">No Results found</h2> 
                )}
                
        </div>
        </div>

    )
 };


export default CricketScore;