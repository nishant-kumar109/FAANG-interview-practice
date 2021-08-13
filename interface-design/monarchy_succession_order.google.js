class Person {
  constructor(name){
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king){
    this.king = new Person(king);
    this._person = {
      [this.king.name] : this.king
    }
  }

  birth(childNmae, parentName){
    const parent = this._person[parentName];
    const newChild = new Person(childNmae);
    parent.children.push(newChild);
    this._person[childNmae] = newChild;
  }

  death(name){
    const person = this._person[name];
    if(person === undefined){
      return null;
    }
    person.isAlive = false;
  }

  _dfs(currentPerson, order){
    if(currentPerson.isAlive){
      order.push(currentPerson.name)
    }
    for(let i=0; i<currentPerson.children.length; i++){
      this._dfs(currentPerson.children[i], order);
    }
  }


  getOrderOfSuccession(){
    const order = [];
    this._dfs(this.king, order);
    return order;
  }

}


const mon = new Monarchy('Jake');
mon.birth('Catherine', 'Jake');
mon.birth('Tom', 'Jake');
mon.birth('Celine', 'Jake');
mon.birth('Peter', 'Celine');
mon.birth('Jane', 'Catherine');
mon.birth('Farah', 'Jane');
mon.birth('Mark', 'Catherine');
console.log(mon.getOrderOfSuccession());

mon.death('Jake');
mon.death('Jane');

console.log(mon.getOrderOfSuccession());
