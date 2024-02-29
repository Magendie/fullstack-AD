import Content from "./Content";
// IT IS ALLOWED TO DECLARE ALL THE COMPONENTS IN THE COURSE MODULE
// MOSTLY WE DID IT IN THE Content module
//import Header from "./Header";
//import Total from "./Total";

const Course = (props) => {
  // const parts = courses.map(course => course.parts);
  const { courses } = props;
  console.log(courses);
  console.log(courses.data);

  return (
    <div>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map((course) => {
          return <Content key={course.id} course={course} />;
        })}
      </ul>
    </div>
  );
};

export default Course;
