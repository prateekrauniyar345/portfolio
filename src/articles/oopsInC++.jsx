import React from 'react';

function OOPInCpp() {
    return (
        <div className="oopInCpp">
        <hr/>
            <h3>Object-Oriented Programming in C++</h3>
            <p>
                Object-Oriented Programming (OOP) in C++ is a paradigm that uses objects and classes to design and structure code. OOP aims to improve code reusability, scalability, and maintainability.
            </p>
            
            <h3>Classes and Objects</h3>
            <p>
                A class in C++ is a blueprint for creating objects. It defines the data (attributes) and functions (methods) that the objects of the class can use.
            </p>
            <pre><code>{`class Car {
public:
    string model;
    int year;

    void display() {
        cout << "Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    Car myCar;
    myCar.model = "Toyota";
    myCar.year = 2020;
    myCar.display();
}`}</code></pre>

            <h3>Encapsulation</h3>
            <p>
                Encapsulation is the concept of bundling data (variables) and methods that operate on the data into a single unit (class). It also provides control over the access to that data through access specifiers like <code>private</code>, <code>public</code>, and <code>protected</code>.
            </p>
            <pre><code>{`class Car {
private:
    int year;

public:
    void setYear(int y) {
        year = y;
    }

    int getYear() {
        return year;
    }
};`}</code></pre>

            <h3>Inheritance</h3>
            <p>
                Inheritance allows one class (child class) to inherit attributes and methods from another class (parent class), promoting code reuse and establishing relationships between classes.
            </p>
            <pre><code>{`class Vehicle {
public:
    string brand = "Ford";
};

class Car : public Vehicle {
public:
    string model = "Mustang";
};

int main() {
    Car myCar;
    cout << myCar.brand << " " << myCar.model << endl; // Output: Ford Mustang
}`}</code></pre>

            <h3>Polymorphism</h3>
            <p>
                Polymorphism allows methods to do different things based on the object that invokes them. It can be achieved through function overloading, operator overloading, and virtual functions in C++.
            </p>
            <pre><code>{`class Animal {
public:
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* animal = new Dog();
    animal->sound(); // Output: Dog barks
    delete animal;
}`}</code></pre>

            <h3>Abstraction</h3>
            <p>
                Abstraction is the process of hiding complex implementation details and showing only the necessary features of an object. In C++, it can be achieved using abstract classes and pure virtual functions.
            </p>
            <pre><code>{`class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};`}</code></pre>

            <h3>Advantages of OOP</h3>
            <ul>
                <li><strong>Encapsulation:</strong> Safeguards data by restricting direct access and providing controlled interfaces.</li>
                <li><strong>Inheritance:</strong> Promotes code reuse and creates a natural class hierarchy.</li>
                <li><strong>Polymorphism:</strong> Enables methods to work on different objects in a class hierarchy.</li>
                <li><strong>Abstraction:</strong> Simplifies complex systems by exposing only the necessary functionality.</li>
            </ul>

            <h3>Best Practices for OOP in C++</h3>
            <ul>
                <li>Use <code>private</code> and <code>protected</code> access specifiers to ensure proper encapsulation.</li>
                <li>Leverage inheritance wisely to avoid tight coupling between classes.</li>
                <li>Make use of polymorphism to write flexible and maintainable code.</li>
                <li>Use abstract classes and interfaces to enforce consistent behavior across related objects.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Object-Oriented Programming in C++ provides a powerful framework for designing complex applications. By understanding key concepts such as classes, inheritance, polymorphism, and abstraction, developers can write modular, maintainable, and reusable code.
            </p>
        </div>
    );
}

export default OOPInCpp;
