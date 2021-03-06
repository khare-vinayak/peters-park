import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'
import cat from '../store/cat';

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedAllCats extends React.Component {
  render() {
   //console.log(this.props);
    return (
      <div className='all-cats'>
        <h1>Peter's Park</h1>
        { <ul>
          {
            this.props.cats.map(cat=>{
              return( 
                <li key={cat.id} >
                  <CatCard key={cat.id} id={cat.id} name={cat.name} />
                </li>
              )
            })
          }             
        </ul>
        }
      
      </div>
    )
  }
}


export const mapStateToProps = (state) => {
  return {
    cats:state.cats
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
        goGetCats:()=>dispatch({ type: "LOAD_CATS" })
  }
}

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedAllCats somewhere else in your program
// you're gonna have a bad time
export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCats)



