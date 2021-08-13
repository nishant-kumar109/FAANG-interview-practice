class TriNode {
  constructor(){
    this.end = false;
    this.keys = {};
  }
}


class Trie {
  constructor(){
    this.root = new TriNode();
  }

  insert(word, node = this.root){
    if(word.length === 0){
      node.end = true;
      return ;
    }
    else if(!node.keys[word[0]]){
      node.keys[word[0]] = new TriNode();
      this.insert(word.substring(1), node.keys[word[0]]);
    }else{
      this.insert(word.substring(1), node.keys[word[0]]);
    }
  }

  search(word, node = this.root){
    if(word.length==0 && node.end){
      return true;
    }else if(word.length == 0){
      return false
    }else{
      return this.search(word.substring(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root){
    if(prefix.length === 0){
      return true;
    }else if(!node.keys.hasOwnProperty(prefix[0])){
      return false
    }else{
      return this.startsWith(prefix.substring(1), node.keys[prefix[0]])
    }
  }
}


// =================== alternate solution =====================================
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}

// ======================== logs =============================================

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"))      // false
console.log(trie.startsWith("app"))  // true
console.log(trie.search("app"))      // false
trie.insert("dog")
trie.insert("app");
console.log(trie.search("app"));     // true