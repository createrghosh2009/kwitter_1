//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAJqvlQCtamhJCdTHbkLq_-MUOGgBtHJyY",
      authDomain: "kwitter-3f939.firebaseapp.com",
      databaseURL: "https://kwitter-3f939-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f939",
      storageBucket: "kwitter-3f939.appspot.com",
      messagingSenderId: "440431426948",
      appId: "1:440431426948:web:0cc22a322e33e45130f1d1"
    };
    
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0    
      });

      document.getElementById("msg").value = "";
}
