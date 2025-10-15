⚙️ Setup Instructions
1️⃣ Clone this repository

git clone https://github.com/yhongyhong/merge-project.git

cd merge-project

2️⃣ Install dependencies

npm install

▶️ Run the Code

You can run the merge function manually using ts-node:

npx ts-node src/merge.ts


🧪 Run Unit Tests

Tests are written using Jest + ts-jest.

Run all tests

npm test

Expected Output
> jest

 PASS  tests/merge.test.ts
  merge function
    ✓ should merge and sort all arrays ascending (3 ms)
    ✓ should handle empty arrays
    ✓ should handle all empty arrays
