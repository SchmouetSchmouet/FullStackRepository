const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header title={course} />
      <Content />
      <Total one={exercises1} two={exercises2} three={exercises3} />

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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>

      <Part title={part1} exercise={exercises1} />
      <Part title={part2} exercise={exercises2} />
      <Part title={part3} exercise={exercises3} />
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
