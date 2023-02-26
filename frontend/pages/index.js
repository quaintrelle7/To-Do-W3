import React from 'react'

import { ToDoContract } from '../../blockend/interact'

class ToDoIndex extends  React.Component{

  static async getInitialProps(){
    const tasks = await ToDoContract.methods.getTasks().call()
    return {tasks}
  }

  render(){
    return(
      <div>
        <h1>All about To-Do</h1>
        
      </div>
    )
  }

}

export default ToDoIndex;