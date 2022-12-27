class TrieNode {
    constructor(){
        this.end = false;
        this.keys = {};
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, node = this.root){
        if(word.length == 0){
            node.end = true;
            return;
        }
        else if(!node.keys[word[0]]){
            node.keys[word[0]] = new TrieNode();
        }
        this.insert(word.substring(1), node.keys[word[0]])
    }

    search(word, node = this.root){
        if(word.length == 0 && node.end){
            return true;
        }
        else if(word.length == 0 ) {
            return false;
        }
        else if(!node.keys[word[0]]){
            return false;
        }else{
            this.search(word.substring(1), node.keys[word[0]]);
        }
    }

    startsWith(prefix, node = this.root){
        if(prefix.length === 0){
            return true;
        }
        else if(!node.keys[prefix[0]]){
            return false;
        }
        else{
           return this.startsWith(prefix.substring(1), node.keys[prefix[0]])
        }
    }
}

var trie = new Trie()
trie.insert('app')
trie.insert('apple')
trie.insert('appleiance')
console.log(trie)