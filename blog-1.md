## Question: Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

# Answer:
Actually, Any disable the typescripts type checking that's why it called a type safety hole. On the other hand, unknown is safer because it forces to check the type before using the value.

- `why any is dangerous`
1. If i call wrong method it will not show any error.
2. It may cause errors at runtime because TypeScript skips type checking.
3. It removes all type checking, so you can accidentally treat a value like the wrong type without getting any warning.

- `Why unknown is safer`
1. Anyone cannot directly use properties or methods until check the type.
2. User must verify the type before using the value, which reduces bugs.
3. It improves code reliability and reduces runtime errors

# Type Narrowing
well, type narrowing means reducing a broad types such as unknown, union type etc into a more specific type using checks.