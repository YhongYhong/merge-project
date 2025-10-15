✅ README (Section: Setup & Run)
## ⚙️ Setup & Run Instructions

### 🧩 1. Clone the repository
```bash
git clone https://github.com/yhongyhong/merge-project.git
cd merge-project
📦 2. Install dependencies
Make sure you have Node.js (v18+) installed, then run:
npm install
▶️ 3. Run the program manually
You can execute the merge function directly using ts-node:
npx ts-node src/merge.ts
🧪 4. Run unit tests
This project uses Jest with ts-jest for testing.
Run all tests:
npm test
Expected output:
 PASS  tests/merge.test.ts
  merge function
    ✓ should merge and sort all arrays ascending
    ✓ should handle empty arrays
    ✓ should handle all empty arrays