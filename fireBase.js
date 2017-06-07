/**
 * Created by Cortana on 14/09/2016.
 */

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBfv7eKE7ues4vv5BjBomCwQiGYOcjvB6M",
        authDomain: "wayan-e95fd.firebaseapp.com",
        databaseURL: "https://wayan-e95fd.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "254420095695"
    };
    firebase.initializeApp(config);

        // Get a key for a new Post.
        //var newPostKey = firebase.database().ref().child('posts').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
    //    var updates = {};
    //    updates['/posts/'] = postData;
    //    //updates['/user-posts/' + '/' + newPostKey] = postData;
    //    return firebase.database().ref().update(updates);
    //});

    function pushToFirebase(){

                var postData = {
                    email: "This works online"
                    //$("#email").val(),

                    //firstName: $("#firstName").val(),
                    //lastName: $("#lastName").val(),
                    //email_valid: $("#email").valid(),
                    //firstName_valid: $("#firstName").valid(),
                    //lastName_valid: $("#lastName").valid(),
                    //form_valid: $("#form_signup").valid(),
                    //form: $("#form_signup")
                };
                // Get a key for a new Post.
                //var newPostKey = firebase.database().ref().child('posts').push().key;
                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/posts/'] = postData;
                //updates['/user-posts/' + '/' + newPostKey] = postData;
                return firebase.database().ref().update(updates);




    }

