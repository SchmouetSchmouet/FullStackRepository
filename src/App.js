const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
      <Part title={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part title={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part title={props.parts[2].name} exercise={props.parts[2].exercises} />
      </p>
    </div>
  )
}

const Part = (props) => {
  return (  
    <div>
      {props.title} {props.exercise}
    </div>  
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}
export default App
