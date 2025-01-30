// localStorage.clear()
const employees = [
  {
    id: 1,
    name: "nitesh",
    username: "nitesh@gmail.com",
    password: "pass123",
    countTask: {
      active: 2,
      newTask: 5,
      completedTask: 4,
      failed: 3,
    },
    tasks: [
      {
        active: 2,
        newTask: 3,
        completedTask: 1,
        failed: 0,
        title: "Fix Bug",
        description: "Resolve bugs today ASAP",
        date: "2025-01-24",
        category: "Bug Fixing",
      },
      {
        active: 1,
        newTask: 2,
        completedTask: true,
        failed: 2,
        title: "Create UI",
        description: "Design the user interface for the new feature",
        date: "2025-01-23",
        category: "UI Design",
      },
      {
        active: 4,
        newTask: 2,
        completedTask: 4,
        failed: 5,
        title: "Update Documentation",
        description: "Update the project documentation with recent changes",
        date: "2025-01-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    name: "vishal",
    username: "vishal@gmail.com",
    password: "pass123",
    countTask: {
      active: 3,
      newTask: 6,
      completedTask: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: 5,
        completedTask: false,
        failed: 2,
        title: "Implement Feature",
        description: "Implement the new feature as per the requirements",
        date: "2025-01-24",
        category: "Development",
      },
      {
        active: 4,
        newTask: false,
        completedTask: true,
        failed: 4,
        title: "Code Review",
        description: "Review the code submitted by the team",
        date: "2025-01-23",
        category: "Code Review",
      },
      {
        active: 4,
        newTask: 1,
        completedTask: 4,
        failed: 5,
        title: "Test Application",
        description: "Perform testing on the application to identify issues",
        date: "2025-01-22",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    name: "akash",
    username: "akash@gmail.com",
    password: "pass123",
    countTask: {
      active: 4,
      newTask: 3,
      completedTask: 5,
      failed: 2,
    },
    tasks: [
      {
        active: 2,
        newTask: 5,
        completedTask: 2,
        failed: 4,
        title: "Optimize Performance",
        description: "Optimize the application performance",
        date: "2025-01-24",
        category: "Performance",
      },
      {
        active: false,
        newTask: 4,
        completedTask: true,
        failed: 4,
        title: "Deploy Application",
        description: "Deploy the application to the production environment",
        date: "2025-01-23",
        category: "Deployment",
      },
      {
        active: false,
        newTask: 4,
        completedTask: false,
        failed: 5,
        title: "Conduct Meeting",
        description: "Conduct a meeting with the stakeholders",
        date: "2025-01-22",
        category: "Meeting",
      },
    ],
  },
  {
    id: 4,
    name: "shubham",
    username: "shubham@gmail.com",
    password: "pass123",
    countTask: {
      active: 2,
      newTask: 4,
      completedTask: 2,
      failed: 5,
    },
    tasks: [
      {
        active: 5,
        newTask: 1,
        completedTask: 4,
        failed: false,
        title: "Fix Bug",
        description: "Resolve bugs today ASAP",
        date: "2025-01-24",
        category: "Bug Fixing",
      },
      {
        active: false,
        newTask: 4,
        completedTask: 1,
        failed: false,
        title: "Create UI",
        description: "Design the user interface for the new feature",
        date: "2025-01-23",
        category: "UI Design",
      },
      {
        active: false,
        newTask: 4,
        completedTask: false,
        failed: 1,
        title: "Update Documentation",
        description: "Update the project documentation with recent changes",
        date: "2025-01-22",
        category: "Documentation",
      },
    ],
  },
  {
    id: 5,
    name: "aryan",
    username: "aryan@gmail.com",
    password: "pass123",
    countTask: {
      active: 5,
      newTask: 2,
      completedTask: 3,
      failed: 1,
    },
    tasks: [
      {
        active: 1,
        newTask: 4,
        completedTask: 3,
        failed: 2,
        title: "Implement Feature",
        description: "Implement the new feature as per the requirements",
        date: "2025-01-24",
        category: "Development",
      },
      {
        active: 4,
        newTask: 2,
        completedTask: 1,
        failed: 2,
        title: "Code Review",
        description: "Review the code submitted by the team",
        date: "2025-01-23",
        category: "Code Review",
      },
      {
        active: 2,
        newTask: 3,
        completedTask: 2,
        failed: 1,
        title: "Test Application",
        description: "Perform testing on the application to identify issues",
        date: "2025-01-22",
        category: "Testing",
      },
    ],
  },
];

const admin = {
  id: 1,
  name: "nitesh",
  username: "admin",
  password: "pass123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employes", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employe = JSON.parse(localStorage.getItem("employes"));
  console.log(employe);
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employe, admin };
};
