What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById target an element by its ID. getElementsByClassName is used to target all elements with the same class. If want to select one element, use querySelector; if want to select multiple elements, use querySelectorAll.


How do you create and insert a new element into the DOM?
Answer: Locate the HTML where we want to insert the element, then use createElement in JavaScript, add the HTML content, and finally insert it into the DOM using methods like append or appendChild.

What is Event Bubbling and how does it work?
Answer: Event Bubbling means when an event happens on a child element, it automatically bubbles up and also triggers on its parent elements, up through the DOM tree.

What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique where we can add a single event listener under the parent element to handle events on its child elements. It is useful because it avoids looping or adding many listeners, making the code simpler and the website faster.

What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() is using for automatically reloading. 