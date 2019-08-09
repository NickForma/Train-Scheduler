$(document).ready(function() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDgzgfmdBJM5QCbuD70TzQ3HoAtYzpf6NM",
    authDomain: "trainsched-581b6.firebaseapp.com",
    databaseURL: "https://trainsched-581b6.firebaseio.com",
    projectId: "trainsched-581b6",
    storageBucket: "",
    messagingSenderId: "312542928293",
    appId: "1:312542928293:web:77d3f2b8b3f477c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let database = firebase.database();
let auth = firebase.auth();


  // database.ref().on(function(snapshot) {
  //   console.log(snapshot.val());    
  // });


  $('.submit').on('click', function(e){
    e.preventDefault();
    

    let trainName = $('.trainName').val().trim()
    let trainDest = $('.trainDest').val().trim()
    let trainTime = $('.trainTime').val().trim()
    let trainFreq = $('.trainFreq').val().trim()
    console.log(trainName, trainTime, trainFreq)

    database.ref().set({
      trainName: trainName,
      trainDest: trainDest,
      trainTime: trainTime,
      trainFreq: trainFreq
    })

    $('.table').append(
      `<tr>
        <td>${trainName}</td>
        <td>${trainDest}</td>
        <td>${trainTime}</td>
        <td>${trainFreq}</td>
      </tr>
      `
    )
  });


});
