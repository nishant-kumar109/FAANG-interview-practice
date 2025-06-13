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


// const mon = new Monarchy('Jake');
// mon.birth('Catherine', 'Jake');
// mon.birth('Tom', 'Jake');
// mon.birth('Celine', 'Jake');
// mon.birth('Peter', 'Celine');
// mon.birth('Jane', 'Catherine');
// mon.birth('Farah', 'Jane');
// mon.birth('Mark', 'Catherine');
// console.log(mon.getOrderOfSuccession());

// mon.death('Jake');
// mon.death('Jane');

// console.log(mon.getOrderOfSuccession());

// const mon = new Monarchy('ShreeVardhana'); // Starting with the king

// // Births
// mon.birth('Vishnuvardhana', 'ShreeVardhana'); // First son
// mon.birth('Vijayavardhana', 'ShreeVardhana'); // Second son
// mon.birth('VaibhavLakshmi', 'ShreeVardhana'); // Daughter
// mon.birth('ManiRathnam', ' Vishnuvardhana'); // Son of Prince Vishnuvardhana
// mon.birth('GirijaLakshmi', ' Vishnuvardhana'); // Daughter of Prince Vishnuvardhana
// mon.birth('GopiRathnam', ' Vijayavardhana'); // Son of Prince Vijayavardhana
// mon.birth('EshwaraNatha', ' VaibhavLakshmi'); // Son of Princess VaibhavLakshmi

// console.log("Initial Succession Order:");
// console.log(mon.getOrderOfSuccession()); // Outputs the initial order of succession

// // Deaths
// mon.death('ShreeVardhana'); // The king dies
// mon.death(' Vishnuvardhana'); // Prince Vishnuvardhana dies

// console.log("Succession Order After Deaths:");
// console.log(mon.getOrderOfSuccession()); // Outputs the new order of succession


// ShreeVardhana -King 
// ├── Prince Vishnuvardhana
// │   ├── Prince ManiRathnam
// │   └── Princess GirijaLakshmi
// ├── Prince Vijayavardhana
// │   └── Prince GopiRathnam
// └── Princess VaibhavLakshmi
//     └── Prince EshwaraNatha


// ShreeVardhana
//    │
//    ├── Prince Vishnuvardhana
//    │    │
//    │    ├── Prince ManiRathnam
//    │    └── Princess GirijaLakshmi
//    │
//    ├── Prince Vijayavardhana
//    │    │
//    │    └── Prince GopiRathnam
//    │
//    └── Princess VaibhavLakshmi
//         │
//         └── Prince EshwaraNatha
