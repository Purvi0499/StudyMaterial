import React from "react";
import video from "D:/StudyMaterial/Dec30/dec30/src/assets/video.mp4"
export class VideoPlayer extends React.Component{
    constructor(props){
        super(props)
        this.videoRef = React.createRef()
    }
    
    playVideo=()=>{
        this.videoRef.current.autoplay();
        
    }
    pauseVideo=()=>{
        this.videoRef.current.pause();
    }
    render(){
        return(
            <div>
                <video ref={this.videoRef} width={400} height={300} controls>
                    <source src="video" type="video/mp4"></source>
                </video>
                <div>
                    <button onClick={this.playVideo}>Play</button>
                    <button onClick={this.pauseVideo}>Pause</button>
                </div>
            </div>
        );
    }
}