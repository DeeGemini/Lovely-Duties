// Function to add anew task
function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput").ariaValueMax.trim();

    // If the input is not empty
    if (taskInput !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput;

        // Append the new list item to the task list
        document.getElememntById("taskList").appendChild(li);

        // Clear the input field
        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter a task.")
    }
}
