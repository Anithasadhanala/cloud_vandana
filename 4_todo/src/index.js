function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskInput.value;

    // Create a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    // Add event listener to remove task
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
