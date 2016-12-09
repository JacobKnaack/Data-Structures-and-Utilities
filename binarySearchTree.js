'use strict';

function Node(val) { // declares a constructor function called Node which takes in an agrument called val and creates an object with three values.
  this.value = val; // object key value assigned the value of the argument val
  this.left = null; // creates an object key left and assigns it the value of null
  this.right = null; // creates an objet key right and assigns it the value of null
}

function BinarySearchTree() {  // declares a constructor function that creates an object with the key root and a value of null
  this.root = null;
}

BinarySearchTree.prototype.push = function(val) { // defines a method push on the BinarySearchTree object  which takes in an argument val 
  var root = this.root; // declares a vaiable root and 

  if(!root) {  // if there is no this.root value assigned to root, this.root is assigned to a new Node object
    this.root = new Node(val);
    return;
 }

  var currentNode = root;  // the variable currentNode is declared and assigned to the value of the variable root
  var newNode = new Node(val);  // the variable newNode is declared and assigned a new Node object using the constructor function Node 

  while(currentNode) { // while the variable currentNode is truthy the code block will run
    if(val < currentNode.value) { //  if the value of val is less than the value of currentNode.value the following code block will run
      if(!currentNode.left) { // if there is no value 'left' on the currentNode object the following code block will run
        currentNode.left = newNode; // the value 'left' on the currentNode object gets assigned the NewNode object
        break; // breaks out of the method
      } else {
        currentNode = currentNode.left; // if there is a Node object on the left side of the bst, the variable currentNode will be assigned to the value of that object
        }
    } else {  // if the value of val is greater or equal to the value of currentNode.value, this code block will run
      if(!currentNode.right) { 
      currentNode.right = newNode // if there is no Node on the right side of the currentNode object, set that value to the newNode object
        break; //break out of the method
      } else {
        currentNode = currentNode.right; // if there is a node right side, set the current Node to the Node object on the Node on the right side of currentNode
      }
    }
  }
}

exports.bst = new BinarySearchTree();
