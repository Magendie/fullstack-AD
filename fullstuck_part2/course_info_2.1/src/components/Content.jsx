const Content = ({ course }) => {
  // retrieving only parts of current course
  const parts = course.parts;

  /*

course = [ name, [parts] ]

part = {name}, {[parts]}

for part in course:
    print(part)
        
    // name         => typeof(part)
    // [parts]      => typeof(part)

*/

  const result = parts.reduce((total, part) => {
    console.log("what is happening", total);
    console.log("number of exers", part.exercises);
    return (total += part.exercises);
  }, 0);

  return (
    <div>
      <div>
        {" "}
        <h2> {course.name} </h2>{" "}
      </div>
      {/* courses.parts === `const parts` declared above */}
      {parts.map((part) => {
        return <li key={part.id}>{part.name} {part.exercises}</li>;
      })}
      <h4>Total number of exercises {result}</h4>
    </div>
  );
};

export default Content;
