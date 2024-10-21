import React from 'react';

function MemoryManagementInCpp() {
    return (
        <div className="memoryManagement">
        <hr/>
            <h3>Memory Management in C++</h3>
            <p>
                Memory management in C++ is a crucial aspect that involves allocating, using, and freeing memory to ensure efficient use of resources.
            </p>
            
            <h3>Stack vs Heap</h3>
            <p>
                C++ manages memory in two primary areas: the stack and the heap. The stack is used for static memory allocation, while the heap is used for dynamic memory allocation.
            </p>
            <p>
                <strong>Stack:</strong> Automatically manages memory; variables are created and destroyed as the function scope is entered and exited.
            </p>
            <p>
                <strong>Heap:</strong> Requires manual management; memory must be allocated and freed explicitly.
            </p>

            <h3>Dynamic Memory Allocation</h3>
            <p>
                Dynamic memory allocation allows you to allocate memory at runtime using the <code>new</code> keyword.
            </p>
            <pre><code>{`int *arr = new int[10]; // Allocate memory for an array of 10 integers
// Use the array...
delete[] arr; // Free the allocated memory`}</code></pre>

            <h3>Memory Leaks</h3>
            <p>
                A memory leak occurs when allocated memory is not properly deallocated, leading to increased memory usage over time. Always ensure to free dynamically allocated memory using <code>delete</code> or <code>delete[]</code>.
            </p>
            <pre><code>{`int *p = new int(10);
// Forgetting to delete p causes a memory leak
delete p; // Free the allocated memory`}</code></pre>

            <h3>Using Smart Pointers</h3>
            <p>
                C++11 introduced smart pointers, which help manage dynamic memory automatically and prevent memory leaks.
            </p>
            <pre><code>{`#include <memory>
std::unique_ptr<int> p1(new int(10)); // Exclusive ownership
std::shared_ptr<int> p2(new int(20)); // Shared ownership
std::weak_ptr<int> p3 = p2; // Non-owning reference`}</code></pre>

            <h3>Advantages of Smart Pointers</h3>
            <ul>
                <li><strong><code>std::unique_ptr</code></strong>: Automatically deallocates memory when the pointer goes out of scope.</li>
                <li><strong><code>std::shared_ptr</code></strong>: Maintains a reference count, allowing multiple pointers to share ownership of an object.</li>
                <li><strong><code>std::weak_ptr</code></strong>: Prevents circular references by not affecting the reference count of <code>std::shared_ptr</code>.</li>
            </ul>

            <h3>Best Practices for Memory Management</h3>
            <ul>
                <li>Always initialize pointers to <code>nullptr</code> to avoid dangling pointers.</li>
                <li>Use smart pointers when possible to automate memory management.</li>
                <li>Release dynamically allocated memory as soon as it's no longer needed.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Proper memory management is essential for creating efficient and reliable C++ applications. Understanding the differences between stack and heap memory, using dynamic allocation correctly, and leveraging smart pointers can help you manage memory effectively and prevent common pitfalls like memory leaks and dangling pointers.
            </p>
        </div>
    );
}

export default MemoryManagementInCpp;
