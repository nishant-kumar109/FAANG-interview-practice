package main

import "fmt"

// interface Monarchy {
// 	void birth(String child, string parent)
// 	void death(String name)
// 	List<string> getOrderOfSuccession()
// }

// Person represents an individual in the monarchy.
type Person struct {
	Name     string
	IsAlive  bool
	Children []*Person
}

// Monarchy represents the monarchy structure with a king and successors.
type Monarchy struct {
	King    *Person
	Persons map[string]*Person
}

// NewMonarchy initializes a new monarchy with the given king's name.
func NewMonarchy(kingName string) *Monarchy {
	king := &Person{Name: kingName, IsAlive: true}
	return &Monarchy{
		King:    king,
		Persons: map[string]*Person{kingName: king},
	}
}

// Birth adds a new child to the parent in the monarchy.
func (m *Monarchy) Birth(childName, parentName string) {
	parent, exists := m.Persons[parentName]
	if !exists {
		return
	}
	child := &Person{Name: childName, IsAlive: true}
	parent.Children = append(parent.Children, child)
	m.Persons[childName] = child
}

// Death marks a person as deceased.
func (m *Monarchy) Death(name string) {
	person, exists := m.Persons[name]
	if exists {
		person.IsAlive = false
	}
}

// dfs performs a depth-first search to gather the order of succession.
func (m *Monarchy) dfs(currentPerson *Person, order *[]string) {
	if currentPerson.IsAlive {
		*order = append(*order, currentPerson.Name)
	}
	for _, child := range currentPerson.Children {
		m.dfs(child, order)
	}
}

// GetOrderOfSuccession retrieves the order of succession in the monarchy.
func (m *Monarchy) GetOrderOfSuccession() []string {
	order := []string{}
	m.dfs(m.King, &order)
	return order
}

func main() {
	mon := NewMonarchy("Jake")
	mon.Birth("Catherine", "Jake")
	mon.Birth("Tom", "Jake")
	mon.Birth("Celine", "Jake")
	mon.Birth("Peter", "Celine")
	mon.Birth("Jane", "Catherine")
	mon.Birth("Farah", "Jane")
	mon.Birth("Mark", "Catherine")

	fmt.Println(mon.GetOrderOfSuccession())

	mon.Death("Jake")
	mon.Death("Jane")

	fmt.Println(mon.GetOrderOfSuccession())
}
