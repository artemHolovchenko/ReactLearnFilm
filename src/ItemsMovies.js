import React from "react";


  class ItemsMovies extends React.Component{


    state ={
      WillWatch : false
    }
    render(){
const {item, Delete, Add,DeleteFromWatch} = this.props; 

      return(
          <div className="card">
            <img
           className="card-img-top"
           src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
             item.poster_path}`}
           alt=""/>
           <div className="card-body">
               <h6 className="card-title">{item.title}</h6>
               <div className="d-flex justify-content-between alogn-items-center">
             <p className="mb-0">Raiting: {item.vote_average}</p>
                {this.state.WillWatch ? 
                (<button className="btn btn-success"
                   onClick={ () =>{
                  this.setState({
                    WillWatch:false
                  })
                  DeleteFromWatch(item)
                }}
                >
                 Remove Watch</button>):



                (<button 
                  className="btn btn-secondary"
                onClick={ () =>{
                  this.setState({
                    WillWatch:true
                  })
                Add(item)
                }}
                >
                Will Watch
                </button>
                )}
              
              
              



             
             </div>

             <button onClick={Delete.bind(null,item)}>Delete</button>
             </div>
             </div>
    

      )
    }
    
}



export default ItemsMovies;