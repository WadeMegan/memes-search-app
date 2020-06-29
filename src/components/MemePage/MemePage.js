import React, { Component } from 'react'
import './MemePage.css'

class App extends Component {

    state={
        meme:null,
        text:'Cool Meme!',
        color:"black"
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

            let textStyle={
                color: `${this.state.color}`,
            }

            return(
                <>
                {/*<h1>{meme.name}</h1>*/}
                <div className='imgContainer' >
                    <img src={meme.url}/>
                    <p className='memeText' style={textStyle}>{this.state.text}</p>
                </div>
                </>

            )
        }
    }

    handleChange=(event)=>{
        this.setState({text: event.target.value});
        //console.log(this.state.text)
    }

    handleColorChange=(color)=>{
        //console.log(event.target.value)
        this.setState({color: color});
    }

renderColorButtons=()=>{
    
    if(this.state.color==='black'){
        return(
        <>
            <button className='selected blackButton' onClick={()=>this.handleColorChange("black")}></button>
            <button className='whiteButton' onClick={()=>this.handleColorChange("white")}></button>
        </>
        )
    } else{
        return(
            <>
                <button className='blackButton' onClick={()=>this.handleColorChange("black")}></button>
                <button onClick={()=>this.handleColorChange("white")} className='selected whiteButton'></button>
            </>
            )
    }
    
    
}

  render(){

    return(
        <div className="container memePageContainer">
            <section>
                <h2>Edit your meme</h2>
                <form>
                    <label htmlFor='text'>Text:</label><br/>
                    <input type='text' name='text' id='text' value={this.state.text} onChange={this.handleChange}/>                 
                </form>
                <p>Color:</p>
                {this.renderColorButtons()}
            </section>
            <section>
                {this.renderMeme()}
            </section>
        </div>
    )
  }
}

export default App