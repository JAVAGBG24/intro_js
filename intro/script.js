// TASK MANAGER APP

// vi ska skapa en liten app där vi kan lägga till "tasks", markera en task som klar,
// visa alla tasks samt filtrera ut alla klara tasks.
// användaren gör val i en meny och vår app visar sedan korrekt val

// vår app ska bestå av två delar:
// 1. ett objekt som ska innehålla all logik
// 2. en funktion som ska hantera menyval

// vårt objekt ska ha följande properties:
// - array som innehåller alla tasks
// - funktion för att lägga till en ny task
// - funktion för att markera en task som klar
// - funktion för att visa alla tasks
// - funktion för att visa alla tasks som är klara

// vår menu() ska ta emot en input från en user och visa rätt val

let taskId = 1;

// task manager objekt
const taskManager = {
  tasks: [],
  addTask: function () {
    // vi vill ta emot nån typ av beskrivning på en task
    const description = prompt("Please add a description to the task");
    if (description.trim() === "") {
      alert("Description can not be empty!");
      this.addTask();
    }

    console.log("Description: " + description);
    const task = {
      id: taskId++,
      description: description,
      completed: false,
    };

    this.tasks.push(task);
    // console.log("Task: " + this.tasks[0]);
    alert("Task added!");
    menu();
  },
  listTasks: function () {
    if (this.tasks.length === 0) {
      alert("No tasks!");
      menu();
    }

    let message = "";
    this.tasks.forEach((task) => {
      message += `Id: ${task.id}, Description: ${task.description}, 
        Completed: ${task.completed ? "Yes" : "No"}`;
    });

    alert(message);
    menu();
  },
  completeTask: function () {
    //this.listTasks()
    let message = "";
    this.tasks.forEach((task) => {
      message += `Id: ${task.id}, Description: ${task.description}, 
        Completed: ${task.completed ? "Yes" : "No"}`;
    });

    alert(message);

    const id = parseInt(prompt("Enter id of task to complete"));

    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      alert("No task found!");
      menu();
    }

    task.completed = true;
    alert("Task marked as completed");
    menu();
  },
  listCompletedTasks: function () {
    const completedTasks = this.tasks.filter((task) => task.completed);

    if (completedTasks.length === 0) {
      alert("No completed tasks!");
      menu();
    }

    let message = "";
    completedTasks.forEach((task) => {
      message += `Id: ${task.id}, Description: ${task.description}\n`;
    });

    alert(message);
    menu();
  },
  exit: function () {
    const leave = confirm("Are you sure you want to exit?");
    if (leave) {
      window.close();
    } else {
      menu();
    }
  },
};

//taskManager.addTask();

// menyn
function menu() {
  const choice = parseInt(
    prompt(
      "Select from the menu:\n 1) Add task\n 2) Complete a task\n 3) Show all tasks\n 4) Show completed tasks\n 5) Exit"
    )
  );

  switch (choice) {
    case 1:
      taskManager.addTask();
      break;
    case 2:
      taskManager.completeTask();
      break;
    case 3:
      taskManager.listTasks();
      break;
    case 4:
      taskManager.listCompletedTasks();
      break;
    case 5:
      taskManager.exit();
      break;
    default:
      alert("Invalid choice");
      menu();
      break;
  }
}

menu();
