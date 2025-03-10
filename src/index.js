document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form"); // Select the form
  const taskList = document.querySelector("#tasks"); // Select the task list container

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from refreshing the page

      const taskInput = document.querySelector("#new-task-description"); // Get input field
      const taskText = taskInput.value.trim(); // Get and trim input value

      if (taskText) { // Ensure input isn't empty
          const li = document.createElement("li"); // Create new list item
          li.textContent = taskText; // Set text content to input value
          taskList.appendChild(li); // Add task to task list

          taskInput.value = ""; // Clear input field after submission
      }
  });
});