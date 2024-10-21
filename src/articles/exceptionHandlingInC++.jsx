import React from 'react';

function ExceptionHandlingInCpp() {
    return (
        <div className="exceptionHandlingInCpp">
        <hr/>
            <h3>Exception Handling in C++</h3>
            <p>
                Exception handling in C++ provides a way to manage and respond to runtime errors or unexpected conditions, ensuring that programs can recover or handle such errors gracefully.
            </p>
            
            <h3>Basic Concepts</h3>
            <p>
                Exception handling uses three key keywords: <code>try</code>, <code>throw</code>, and <code>catch</code>. The <code>try</code> block contains the code that may throw an exception, the <code>throw</code> keyword is used to signal an error, and the <code>catch</code> block handles the exception.
            </p>
            <pre><code>{`try {
    // Code that may throw an exception
    if (someError) {
        throw "Error occurred!";
    }
} catch (const char* e) {
    // Handle exception
    cout << "Caught exception: " << e << endl;
}`}</code></pre>

            <h3>Throwing Exceptions</h3>
            <p>
                Exceptions can be thrown using the <code>throw</code> keyword with any data type, including primitive types or objects. For better error handling, it's common to throw exceptions of types derived from the standard <code>exception</code> class.
            </p>
            <pre><code>{`#include <iostream>
#include <exception>

class MyException : public std::exception {
public:
    const char* what() const noexcept override {
        return "My custom exception occurred!";
    }
};

int main() {
    try {
        throw MyException();
    } catch (const MyException& e) {
        std::cout << e.what() << std::endl;
    }
}`}</code></pre>

            <h3>Multiple Catch Blocks</h3>
            <p>
                You can define multiple <code>catch</code> blocks to handle different types of exceptions. C++ allows you to catch exceptions by reference, type, or base class.
            </p>
            <pre><code>{`try {
    throw 42; // Throwing an integer
} catch (int e) {
    cout << "Caught integer: " << e << endl;
} catch (const std::exception& e) {
    cout << "Caught exception: " << e.what() << endl;
}`}</code></pre>

            <h3>Standard Exception Class</h3>
            <p>
                C++ provides a set of standard exceptions defined in the <code>&lt;exception&gt;</code> library, including <code>std::runtime_error</code>, <code>std::invalid_argument</code>, and <code>std::out_of_range</code>.
            </p>
            <pre><code>{`#include <stdexcept>

int main() {
    try {
        throw std::out_of_range("Out of range error");
    } catch (const std::out_of_range& e) {
        cout << "Exception: " << e.what() << endl;
    }
}`}</code></pre>

            <h3>Re-throwing Exceptions</h3>
            <p>
                Sometimes, it is necessary to catch an exception, perform some operation, and then re-throw the exception to be handled by another <code>catch</code> block further up the call stack.
            </p>
            <pre><code>{`try {
    try {
        throw std::runtime_error("Error occurred!");
    } catch (const std::exception& e) {
        cout << "Caught inside inner catch: " << e.what() << endl;
        throw; // Re-throw the exception
    }
} catch (const std::exception& e) {
    cout << "Caught in outer catch: " << e.what() << endl;
}`}</code></pre>

            <h3>Exception Specifications (Deprecated)</h3>
            <p>
                Exception specifications were used to declare which exceptions a function might throw. However, they are deprecated in modern C++ and replaced with <code>noexcept</code>, which specifies that a function doesn't throw exceptions.
            </p>
            <pre><code>{`void myFunction() noexcept {
    // This function does not throw exceptions
}`}</code></pre>

            <h3>Advantages of Exception Handling</h3>
            <ul>
                <li><strong>Error Propagation:</strong> Exceptions can be propagated up the call stack, allowing centralized error handling.</li>
                <li><strong>Separation of Concerns:</strong> Exception handling separates error-handling logic from the normal program flow.</li>
                <li><strong>Improved Code Readability:</strong> Cleaner code with a structured approach to handling errors.</li>
            </ul>

            <h3>Best Practices for Exception Handling</h3>
            <ul>
                <li>Avoid using exceptions for regular control flow.</li>
                <li>Use exceptions only for error conditions, especially runtime errors.</li>
                <li>Always catch exceptions by reference to avoid object slicing.</li>
                <li>Use standard exception types or derive from <code>std::exception</code> for custom exceptions.</li>
                <li>Prefer using <code>noexcept</code> for functions that do not throw exceptions.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Exception handling in C++ provides a structured way to manage runtime errors, making code more robust and maintainable. By understanding how to use <code>try</code>, <code>throw</code>, and <code>catch</code> effectively, developers can handle unexpected situations gracefully.
            </p>
        </div>
    );
}

export default ExceptionHandlingInCpp;
