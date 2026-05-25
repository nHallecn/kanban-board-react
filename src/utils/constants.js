export const COLUMNS = [
    {id: "backlog", title: "Backlog" ,color: "#5B73FF"},
    {id: "todo", title: "To Do" ,color: "#FFB547"},
    {id: "inprogress", title: "In Progress" ,color: "#A78BFA"},
    {id: "done", title: "Done" ,color: "#3ECF8E"},
];

export const PRIORITIES = ["Low", "Medium", "High"];

export const LABELS = ["Feature", "Bug", "Design", "Research", "Docs", "Testing"];

export const PRIORITY_COLORS = {
  Low:    "#3ECF8E",
  Medium: "#FFB547",
  High:   "#FF6B6B",
};

export const LABEL_COLORS = {
  Feature:  "#5B73FF",
  Bug:      "#FF6B6B",
  Design:   "#A78BFA",
  Research: "#FFB547",
  Docs:     "#3ECF8E",
  Testing:  "#60A5FA",
};

export const SEED_CARDS = {
  backlog: [
    { id: "c1", title: "User authentication flow",   description: "Implement login, register, and forgot password screens.", priority: "High",   label: "Feature" },
    { id: "c2", title: "Dark mode support",          description: "Add a theme toggle and persist preference.",               priority: "Low",    label: "Design"  },
    { id: "c3", title: "API rate limiting",          description: "Add rate limiting middleware to all public endpoints.",    priority: "Medium", label: "Feature" },
  ],
  todo: [
    { id: "c4", title: "Fix nav bar overflow bug",   description: "On mobile the nav items overflow on small screens.",      priority: "High",   label: "Bug"     },
    { id: "c5", title: "Write onboarding docs",      description: "Document the setup steps for new contributors.",          priority: "Low",    label: "Docs"    },
  ],
  inprogress: [
    { id: "c6", title: "Dashboard charts",           description: "Build the recharts bar and donut chart components.",      priority: "Medium", label: "Feature" },
    { id: "c7", title: "Unit tests for helpers",     description: "Cover all utility functions with Jest tests.",            priority: "Medium", label: "Testing" },
  ],
  done: [
    { id: "c8", title: "Project scaffold",           description: "Set up Vite + React with folder structure.",              priority: "Low",    label: "Feature" },
    { id: "c9", title: "Design system tokens",       description: "Define CSS variables for colors, spacing, and fonts.",   priority: "Low",    label: "Design"  },
  ],
};