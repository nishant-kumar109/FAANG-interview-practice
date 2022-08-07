
class Person {
    constructor(name ){
        this.name  = name;
        this.children  = []
        this.isAlive = true
    }
}

class ThroneInheritance {
    constructor(kingName) {
        this.king = new Person(kingName)
        this._kingdom = { [this.king.name] : this.king }
    }

    birth(parentName, childName){
        const parent_person = this._kingdom[parentName];
        const newChild = new Person(childName)
        parent_person.children.push(newChild);
        this._kingdom[childName] = newChild;
    }

    death(name){
        const person = this._kingdom[name];
        if (person == undefined) return `no person exhist with name : ${name}`;
        person.isAlive = false
    }

    _dfs(currentPerson, order){
        if (currentPerson.isAlive) {
            order.push(currentPerson.name)
        }

        for (let i = 0; i < currentPerson.children.length; i++) {
            this._dfs(currentPerson.children[i], order);
        }
    }


    getInheritanceOrder(){
        const order = [];
        this._dfs(this.king, order);
        return order;
    }
}


const newThrone = new ThroneInheritance('nishant')
console.log('throne 1', newThrone);
newThrone.birth('nishant', 'nishant junior')
newThrone.birth('nishant', 'vikash');
newThrone.birth('nishant junior', 'nishant junior second');
console.log(newThrone.death('nishant junior')); 
newThrone.birth('vikash', 'vikash junior')
console.log('throne 3', newThrone);
console.log(newThrone.getInheritanceOrder());


/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */