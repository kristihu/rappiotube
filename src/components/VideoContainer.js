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

        const script = document.getElementById("wowzaScript");
        const Wowza = document.createElement("script");

        const WowzaPlayerScripts = document.getElementById("WowzaPlayerScripts");


        script.async = true;

        Wowza.innerHTML = 'WowzaPlayer.create("playerElement' + id + '", { "license": "PLAY1-ejrM8-zjEKd-6A4J7-9JJnM-7kju6", "title": "GoCoder'+id+'", "description": "", "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fasdasd%2Fplaylist.m3u8", "autoPlay": false, "volume": "75", "mute": false, "loop": false, "audioOnly": false, "uiShowQuickRewind": true,"uiQuickRewindSeconds": "30" } );';

     //   document.body.appendChild(Wowza);

        WowzaPlayerScripts.appendChild(Wowza);

        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    resolve(eval(Wowza));
                } catch{}
            }, 1000);
        });

      //  console.log(script);

     //   eval(Wowza); //execute javascript koodi

        console.log(Wowza.title)

    }

    removeVideo(id) {

        console.log("Id: " + id);

        // Wowza.innerHTML = 'try {const myPlayer' + id + ' = WowzaPlayer.get("playerElement1"); console.log("Eval working?",myPlayer' + id + '); if(myPlayer' + id + ' != null){console.log("Destroyed");myPlayer' + id + '.destroy();}else{console.log("Not destroyed");myPlayer' + id + '.destroy();}} catch{ }';

        //  eval(Wowza); //execute javascript koodi
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    const myPlayer = document.getElementById("wowzaScript").WowzaPlayer.get("playerElement"+id);
                    console.log("myPlayer: " + myPlayer);
                    if (myPlayer != null) {
                        myPlayer.destroy(); console.log("Destroyed");
                    } else {
                        console.log("Not destroyed");
                    }
                } catch{
                    console.log("Error on finding Wowza");
                }
            }, 2000);
        });


        //   eval(Wowza);
    }


    changeVideoLeft() {

        let currentVideoId = this.state.id;
        let playerElementString = "playerElement";

        if (currentVideoId === 1) {
            this.createVideo(5);
            this.setState({ id: 5 });
            this.setState({ playerElement: (playerElementString + "5") });
            this.removeVideo(currentVideoId);
        } else {
            currentVideoId--;
            this.createVideo(currentVideoId);
            this.setState({ id: currentVideoId });
            this.setState({ playerElement: (playerElementString + currentVideoId ) });
            this.removeVideo(currentVideoId);
        }
    }

    changeVideoRight() {

        let currentVideoId = this.state.id;
        let playerElementString = "playerElement";

        if (currentVideoId === 5) {
            this.setState({ id: 1 });
            this.createVideo(1);
            this.setState({ playerElement: (playerElementString + "1" ) });
            this.removeVideo(currentVideoId);
        } else {
            currentVideoId++;
            this.createVideo(currentVideoId);
            this.setState({ id: currentVideoId });
            this.setState({ playerElement: (playerElementString + currentVideoId ) });
            this.removeVideo(currentVideoId);
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
                    <h2>{"Video"}{" "}{this.state.id} </h2>
                {/*    <div>
                        <h4 onClick={this.changeVideoLeft}>Edellinen video</h4>
                        <h4 onClick={this.changeVideoRight}>Seuraava video</h4>
                    </div> */}
                    <div className="VideoParent">
                        <div id={this.state.playerElement}></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default VideoContainer;
