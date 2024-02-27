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

  return (
    <div>
      <div> {course.name} </div>
      {/* courses.parts === `const parts` declared above */}
      {parts.map((part) => {
        return <li key={part.id}>{part.name}</li>;
      })}
    </div>
  );
};

export default Content;
