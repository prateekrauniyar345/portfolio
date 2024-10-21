import React from 'react';

function TemplatesInCpp() {
    return (
        <div className="templatesInCpp">
        <hr/>
            <h3>Templates in C++</h3>
            <p>
                Templates in C++ allow you to write generic and reusable code. They enable functions and classes to operate with different data types without being rewritten for each type.
            </p>

            <h3>Function Templates</h3>
            <p>
                A function template allows you to define a generic function that can work with any data type.
            </p>
            <pre><code>{`template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    int x = 10, y = 20;
    double p = 5.5, q = 6.6;

    std::cout << add(x, y) << std::endl;  // Calls add<int>
    std::cout << add(p, q) << std::endl;  // Calls add<double>
}`}</code></pre>

            <h3>Class Templates</h3>
            <p>
                A class template allows you to create a generic class that can work with any data type.
            </p>
            <pre><code>{`template <typename T>
class Box {
    T value;
public:
    Box(T val) : value(val) {}
    T getValue() const { return value; }
};

int main() {
    Box<int> intBox(123);
    Box<double> doubleBox(45.67);

    std::cout << intBox.getValue() << std::endl;  // Outputs 123
    std::cout << doubleBox.getValue() << std::endl;  // Outputs 45.67
}`}</code></pre>

            <h3>Template Specialization</h3>
            <p>
                Template specialization allows you to customize the behavior of a template for a specific data type.
            </p>
            <pre><code>{`template <typename T>
class Box {
public:
    T value;
    Box(T val) : value(val) {}
    T getValue() const { return value; }
};

// Specialization for char type
template <>
class Box<char> {
public:
    char value;
    Box(char val) : value(val) {}
    void display() const { std::cout << "Char: " << value << std::endl; }
};

int main() {
    Box<int> intBox(123);
    Box<char> charBox('A');

    std::cout << intBox.getValue() << std::endl;  // Outputs 123
    charBox.display();  // Specialized behavior for char
}`}</code></pre>

            <h3>Advantages of Templates</h3>
            <ul>
                <li>Code reusability: Write generic code that works with different types.</li>
                <li>Type safety: Ensures the correct type is used during compilation.</li>
                <li>Improved maintainability: Reduces the need for code duplication.</li>
            </ul>

            <h3>Best Practices for Templates</h3>
            <ul>
                <li>Use templates when you need generic code for multiple types.</li>
                <li>Specialize templates when you need custom behavior for a specific type.</li>
                <li>Keep template code in headers, as template instantiation occurs at compile time.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Templates are a powerful feature in C++ that help you write generic, type-safe, and reusable code. By understanding how to use function and class templates, as well as template specialization, you can create flexible and efficient code that works with a variety of data types.
            </p>
        </div>
    );
}

export default TemplatesInCpp;
