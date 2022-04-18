const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header title={course} />
      <Content />
      <Total one={part1.exercises} two={part2.exercises} three={part3.exercises} />

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

const Content = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <p>

      <Part title={part1.name} exercise={part1.exercises} />
      <Part title={part2.name} exercise={part2.exercises} />
      <Part title={part3.name} exercise={part3.exercises} />
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.title} {props.exercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.one + props.two + props.three}
      </p>
    </div>
  )
}


export default App
