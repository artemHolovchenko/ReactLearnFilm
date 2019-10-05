import React from 'react';
import moviesData from './MoviesData';
import ItemsMovies from './ItemsMovies';



class MoviesItem extends React.Component{

    state={
           
        movies: moviesData,
        moviesWillWatch: []
    }

    Delete = (item) =>{
        const updateMovies = this.state.movies.filter(id =>{
            return id.id !== item.id})
        
        
            this.setState({
            movies : updateMovies
        })
}


Add = (item) =>{
  const updateMovies = [...this.state.moviesWillWatch];
  updateMovies.push(item);

  this.setState({
      moviesWillWatch : updateMovies
  })
}


DeleteFromWatch = (item) =>{
    const updateMovies = this.state.moviesWillWatch.filter(id =>{
        return id.id !== item.id})
    
    
        this.setState({
            moviesWillWatch : updateMovies
    })
}






    render(){
       return(
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row">
            {this.state.movies.map(item =>{
                return(
                    <div className="col-6 mb-4" key={item.id} >
                <ItemsMovies  
                item={item} 
                Delete={this.Delete}
                Add={this.Add}
                DeleteFromWatch={this.DeleteFromWatch}
                />
                </div>
                )
                })}
                </div>
        </div>
        <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>

        </div>
        </div>
        </div>
          
        )
    }

}




export default MoviesItem;