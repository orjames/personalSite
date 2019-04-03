import React from 'react'

const ProcedureShow = (props) => {
  let procedure = props.procedures.find((procedure) => {
    return procedure.id === parseInt(props.match.params.id)
  })
  // console.log(props.match)
  return (
    <div>
      <h1>{procedure.name}</h1>
      <p>it hurts a lot</p>
    </div>
  )
}

export default ProcedureShow