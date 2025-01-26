// localStorage.clear()
const employees = [
  {
    id: 1,
    username: "employee1@gmail.com",
    password: "pass123",
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Fix Bug",
        description: "Resolve bugs today ASAP",
        date: "2025-01-24",
        category: "Bug Fixing",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Create UI",
        description: "Design the user interface for the new feature",
        date: "2025-01-23",
        category: "UI Design",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Update Documentation",
        description: "Update the project documentation with recent changes",
        date: "2025-01-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    username: "employee2@gmail.com",
    password: "pass123",
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Implement Feature",
        description: "Implement the new feature as per the requirements",
        date: "2025-01-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Code Review",
        description: "Review the code submitted by the team",
        date: "2025-01-23",
        category: "Code Review",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Test Application",
        description: "Perform testing on the application to identify issues",
        date: "2025-01-22",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    username: "employee3@gmail.com",
    password: "pass123",
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Optimize Performance",
        description: "Optimize the application performance",
        date: "2025-01-24",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Deploy Application",
        description: "Deploy the application to the production environment",
        date: "2025-01-23",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Conduct Meeting",
        description: "Conduct a meeting with the stakeholders",
        date: "2025-01-22",
        category: "Meeting",
      },
    ],
  },
  {
    id: 4,
    username: "employee4@gmail.com",
    password: "pass123",
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Fix Bug",
        description: "Resolve bugs today ASAP",
        date: "2025-01-24",
        category: "Bug Fixing",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Create UI",
        description: "Design the user interface for the new feature",
        date: "2025-01-23",
        category: "UI Design",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Update Documentation",
        description: "Update the project documentation with recent changes",
        date: "2025-01-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 5,
    username: "employee5@gmail.com",
    password: "pass123",
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failed: false,
        title: "Implement Feature",
        description: "Implement the new feature as per the requirements",
        date: "2025-01-24",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failed: false,
        title: "Code Review",
        description: "Review the code submitted by the team",
        date: "2025-01-23",
        category: "Code Review",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failed: true,
        title: "Test Application",
        description: "Perform testing on the application to identify issues",
        date: "2025-01-22",
        category: "Testing",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    username: "admin",
    password: "pass123",
  },
];

export const setLocalStorage=()=>{
    localStorage.setItem('employes',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employe = JSON.parse(localStorage.getItem('employes'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
   return {employe,admin};

}