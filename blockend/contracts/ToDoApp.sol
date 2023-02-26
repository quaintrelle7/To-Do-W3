// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './Task.sol';

contract ToDoApp{

    address []public tasks;

    function createTask(string memory description, string memory category) public{
        
         address newTask = address(new Task(description, category));
         tasks.push(newTask);
    }

    function getTasks()public view returns(address[] memory){
        return tasks;
    }
   
    
}