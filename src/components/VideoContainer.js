import React, { Component } from 'react';


class VideoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            id: 1,
            playerElement: "playerElement1",
        };

        this.changeVideoLeft = this.changeVideoLeft.bind(this);
        this.changeVideoRight = this.changeVideoRight.bind(this);
        this.createVideo = this.createVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
    }

    createVideo(id) {

        const script = document.createElement("script");
        const Wowza = document.createElement("script");

        script.src = "//player.wowza.com/player/latest/wowzaplayer.min.js"; //luo uusi <script> 

        script.async = true;

        Wowza.innerHTML = 'WowzaPlayer.create("playerElement'+id+'", { "license": "PLAY1-ejrM8-zjEKd-6A4J7-9JJnM-7kju6", "title": "GoCoder", "description": "", "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fasdasd%2Fplaylist.m3u8", "autoPlay": false, "volume": "75", "mute": false, "loop": false, "audioOnly": false, "uiShowQuickRewind": true,"uiQuickRewindSeconds": "30" } );';

        document.body.appendChild(script);
        document.body.appendChild(Wowza);

        console.log(script);

        eval(Wowza); //execute javascript koodi

        console.log(Wowza.title)

    }

    removeVideo(id) {

        const script = document.createElement("script");
        const Wowza = document.createElement("script");
        script.src = "//player.wowza.com/player/latest/wowzaplayer.min.js";

        console.log("Id: " + id);

        Wowza.innerHTML = 'try {const myPlayer' + id + ' = WowzaPlayer.get("playerElement1"); console.log("Eval working?"); if(myPlayer' + id + ' != null){console.log("Destroyed");myPlayer' + id + '.destroy();}else{console.log("Not destroyed")}} catch{ }';

        document.body.appendChild(script);
        document.body.appendChild(Wowza);

        eval(Wowza); //execute javascript koodi
        /*
        try { const myPlayer = script.WowzaPlayer;
        console.log("myPlayer: " + myPlayer);
        if (myPlayer != null) {
            myPlayer.destroy(); console.log("Destroyed");
        } else {
            console.log("Not destroyed");
            }
        } catch{ }
        */
        //   eval(Wowza);
    }


    changeVideoLeft() {

        let currentVideoId = this.state.id;
        let playerElementString = "playerElement";

        if (currentVideoId === 1) {
            this.setState({ id: 5 });
            this.setState({ playerElement: (playerElementString + this.state.id) });
            this.removeVideo(this.state.id);
        } else {
            currentVideoId--;
            this.setState({ id: currentVideoId });
            this.setState({ playerElement: (playerElementString + this.state.id) });
            this.removeVideo(this.state.id);
        }
    }

    changeVideoRight() {

        let currentVideoId = this.state.id;
        let playerElementString = "playerElement";

        if (currentVideoId === 5) {
            this.setState({ id: 1 });
            this.setState({ playerElement: (playerElementString + this.state.id) });
            this.removeVideo(this.state.id);
        } else {
            currentVideoId++;
            this.setState({ id: currentVideoId });
            this.setState({ playerElement: (playerElementString + this.state.id) });
            this.removeVideo(this.state.id);
        }
    }

    componentDidMount() {
        console.log("video ", this.props);
        this.createVideo(this.state.id);
    }

    render() {
        return (
            <React.Fragment>
                <div className="VideoContainer">
                    <h2>{this.state.playerElement}{" , "}{this.state.id} </h2>
                    <div>
                        <h4 onClick={this.changeVideoLeft}>Edellinen video</h4>
                        <h4 onClick={this.changeVideoRight}>Seuraava video</h4>
                    </div>
                    <div className="VideoParent">
                        <div id={this.state.playerElement}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default VideoContainer;
