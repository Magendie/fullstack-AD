import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = (props) => {
  // const parts = courses.map(course => course.parts);
  const { courses } = props;
  console.log(courses);
  console.log(courses.data);
  

  return (
    <div>
      {/* <Header name={coursesArray.name}/>  */}

      <ul>
        {courses.map(course => {
          return <Content key={course.id} course={course} />;
        })}
      </ul>

      {/* <Total parts={coursesArray} /> */}
    </div>
  );
};

export default Course;
