import React, { Component } from 'react'
import './MemePage.css'

class App extends Component {

    state={
        meme:null,
        text:'Cool Meme!'
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => { //console.log(data)
                const meme = data.data.memes.filter(meme=>
                    meme.id===this.props.match.params.id
                )
                this.setState({
                    meme: meme[0]
                })
            })
    }

    renderMeme=()=>{
        if(this.state.meme){
            let meme=this.state.meme

            /*let myStyle = {
                background: `url(${meme.url}) no-repeat center center`
              };*/
            return(
                <>
                <h1>{meme.name}</h1>
                <div className='imgContainer' >
                    <img src={meme.url}/>
                    <p className='memeText'>{this.state.text}</p>
                </div>
                </>

            )
        }
    }

    handleChange=(event)=>{
        this.setState({text: event.target.value});
        console.log(this.state.text)
    }

  render(){

    return(
        <>
        <form>
            <label htmlFor='text'>Your text:</label>
            <input type='text' name='text' id='text' value={this.state.text} onChange={this.handleChange}/>
        </form>
        {this.renderMeme()}
        </>
    )
  }
}

export default App