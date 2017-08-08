//http://js-algorithms.tutorialhorizon.com/2015/12/13/flatten-binary-tree-to-linked-list/
'use strict';

function BinarySearchTree () {
  this.root = null;
}

function LinkedList () {
  this.head = null;
}

function createLevelLinkedList (root, lists, level) {
  if (root === null) {
    return;
  }

  var list = null;
  if (lists.length === level) {
    list = new LinkedList();
    lists[level] = list;
  } else {
    list = lists[level];
  }

  list.insertNodeAtTail(root.data);

  createLevelLinkedList(root.left, lists, level + 1);
  createLevelLinkedList(root.right, lists, level + 1);
}

let BST = new BinarySearchTree();
BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);

var lists = [];
createLevelLinkedList(BST.root, lists, 0);
console.log('Linked Lists : ', lists);
