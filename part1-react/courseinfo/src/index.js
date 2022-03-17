import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  const name = course.name;
  return <h1>{name}</h1>;
}

const Content = ({parts}) =>{
  const part = parts.parts;
  return(
    <div>
      <Part parts={part[0]} />
      <Part parts={part[1]} />
      <Part parts={part[2]} />
    </div>
  )
}

const Part = ({parts}) => {
  const {name, exercises} = parts;
  return <p>{name}: {exercises}</p>
}

const Total = ({parts}) =>{
    const part = parts.parts;
    const total = part.map(x => x.exercises).reduce((a,b) => a + b, 0);
    console.log(total)
    return <p>Number of exercises: {total}</p>
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
        {
        name:'Fundamentals of React',
        exercises: 10
        },
        {
          name:'Using props to pass data',
          exercises: 7
        },
        {
          name:'State of a component',
          exercises: 14
        }
    ]
  }
 

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total parts={course}/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))