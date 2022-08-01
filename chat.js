const firebaseConfig = {
    apiKey: "AIzaSyBVkjUMTSWcXVzG8btScrAYf1s_sMnYct4",
    authDomain: "project-5049644992309032509.firebaseapp.com",
    projectId: "project-5049644992309032509",
    storageBucket: "project-5049644992309032509.appspot.com",
    messagingSenderId: "823916376055",
    appId: "1:823916376055:web:2515eb1e3a18b33e4088f2"
  };

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



