import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {
    state = {  

        movies:[],
        tv:[],
        

    }
    
    getTrending=async (mediaType)=>{

        let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f0a50bc8a19365f118f8113032daf8fa`)
        this.setState({[mediaType]:data.results})
    
        }
    
    
        componentDidMount=()=>{
    
            this.getTrending("movies");
            this.getTrending("tv");
        }
    
    render() { 


        let{movies,tv}=this.state


        return ( 
            <>

            <div className="row py-5">
                <div className="col-md-4 py-3">
                    <div className="brdr w-25 mb-3"></div>
                    <h3>
                        Trending <br/> Movies <br/>
                        To Watch Right Now
                    </h3>

                    <p className="my-3 secondFontColor">Most Watched Movies by days </p>
                    <div className="brdr w-100 mb-3"></div>

                    </div>       
                
             {
                movies.slice(0,10).map( (movie)=>
                <div  key={movie.id}className="col-md-2">
                    <div className="movie ">
                        <img src={`  https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100"/>
                        <h4 className="py-2 h6">{movie.title}{movie.name}</h4>
                        <div className="vote position-absolute">{movie.vote_average}</div>



                    </div>

                </div>


                )
            }
                
            </div>

            <div className="row py-5">
                <div className="col-md-4 py-3">
                    <div className="brdr w-25 mb-3"></div>
                    <h3>
                        Trending <br/> Tv <br/>
                        To Watch Right Now
                    </h3>

                    <p className="my-3 secondFontColor">Most Watched Tv by days </p>
                    <div className="brdr w-100 mb-3"></div>

                    </div>       
                
             {
                tv.slice(0,10).map( (tv)=>
                <div key={tv.id} className="col-md-2">
                    <div className="movie">
                        <img src={`  https://image.tmdb.org/t/p/w500/${tv.poster_path}`} className="w-100"/>
                        <h4 className="py-2 h6">{tv.title}{tv.name}</h4>
                        <div className="vote position-absolute">{tv.vote_average}</div>



                    </div>

                </div>


                )
            }
                
            </div>


            </>

         );
    }
}
 
export default Home;