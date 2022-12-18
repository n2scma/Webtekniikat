  function addMessage() {
    // Get the values of the username and message input fields
    var username = document.getElementById("username").value;
    var message = document.getElementById("message").value;

    // Create a new list item with the username
    var usernameItem = document.createElement("li");
    usernameItem.innerHTML = "Username: " + username;

    // Create a new list item with the message
    var messageItem = document.createElement("li");
    messageItem.innerHTML = "Message: " + message;

    // Add the list items to the list
    document.getElementById("messageList").appendChild(usernameItem);
    document.getElementById("messageList").appendChild(messageItem);
  }

