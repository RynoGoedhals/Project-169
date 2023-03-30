AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button");
        var playButton = document.getElementById("play-button");

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Game",
                text: "Work In Progress"
            });
        });

        playButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for choosing to play!",
                text: "You will play shortly!"
            });
        });
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})