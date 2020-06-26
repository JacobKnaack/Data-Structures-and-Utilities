'use strict';

class BinaryTree {

  constructor() {
    this.root = null;
  }

  // @params {function} cb - optional cacllback function to perform in pre order
  preOrder(cb = null) {

    let values = [];

    let _traverse = (root) => {
      cb ? values.push(cb(root.value)) : values.push(root.value);
      if (root.left) _traverse(root.left);
      if (root.right) _traverse(root.right);
    }
    _traverse(this.root);

    return values;
  }

  // @params {function} cb - optional cacllback function to perform in-order
  inOrder(cb = null) {

    let values = [];

    let _traverse = (root) => {
      if (root.left) _traverse(root.left);
      cb ? values.push(cb(root.value)) : value.push(root.value);
      if (root.right) _traverse(root.right);
    }
    _traverse(this.root);

    return values;
  }

  // @params {function} cb - optional cacllback function to perform in post order
  postOrder(cb = null) {
    let values = [];

    let _traverse = (root) => {
      if (root.left) _traverse(root.left);
      if (root.right) _traverse(root.right);
      cb ? values.push(cb(root.value)) : value.push(root.value);
    }
    _traverse(this.root);

    return values;
  }

  insert(value) {
    let node = new TNode(value);

    let _addTo = (root) => {

      if (root.left) {
        return _addTo(root.left);
      } else if (root.right) {
        return _addTo(root.right);
      } else if (!root.left) {
        root.left = node;
        return;
      } else if (!root.right) {
        root.right = node;
        return;
      } else {
        return null;
      }
    }
    _addTo(this.root);
  }
}

class TNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const BST = new BinaryTree();
BST.root = new TNode(1);
BST.root.left = new TNode(2);
BST.root.right = new TNode(3);

console.log('pre order traversal');
BST.preOrder(console.log);
console.log('in order traversal');
BST.inOrder(console.log);
console.log('post order traversal');
BST.postOrder(console.log);

BST.insert(4);
console.log('pre order traversal');
BST.preOrder(console.log);

module.exports = BinaryTree;