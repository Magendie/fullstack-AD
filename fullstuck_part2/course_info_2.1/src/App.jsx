import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 11,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 12,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 13,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 14,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 21,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 22,
        },
      ],
    },
  ];

  /* to test that parts works correctly
  course.parts.push({
    name: "Cheking parts",
    exercises: 5,
    id: 4
  })
  */

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
