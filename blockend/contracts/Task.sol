// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Task{

    address public manager;
    string public description;
    bool public isActive;
    bool public isCompleted;
    //Try adding arrays
    string public category;

    //This is how you are creating the task
    //Addresss of this Task == Address of this contract
    constructor(string memory desc, string memory cat){
        manager = msg.sender;
        require(bytes(desc).length!=0, "Add Description");
        require(bytes(cat).length!=0, "Add Category");
        description = desc;
        category = cat;
        isCompleted=false;
        isActive=true;
    }

    function completeTask() public onlyOwner{

        require(isActive==true, "Task does not exist");
        isCompleted = true;
    }

    function deleteTask() public onlyOwner {
        isActive = false;
    }

    modifier onlyOwner{
        require(msg.sender==manager);
        _;
    }
}