```markdown
# re-new Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill introduces the core development patterns and conventions used in the `re-new` TypeScript codebase. It covers file naming, import/export styles, commit message conventions, and testing patterns. By following these guidelines, contributors can ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- **Style:** kebab-case
- **Example:**  
  `user-service.ts`, `data-fetcher.test.ts`

### Import Style
- **Style:** Alias imports are preferred.
- **Example:**
  ```typescript
  import { fetchData } from '@utils/data-fetcher';
  ```

### Export Style
- **Style:** Named exports are used throughout the codebase.
- **Example:**
  ```typescript
  // In user-service.ts
  export function getUser(id: string) { ... }
  export const USER_ROLE = 'admin';
  ```

### Commit Message Convention
- **Type:** Conventional Commits
- **Prefix:** `feat`
- **Example:**
  ```
  feat: add user authentication middleware
  ```

## Workflows

### Feature Development
**Trigger:** When adding a new feature or module  
**Command:** `/feature-dev`

1. Create a new file using kebab-case naming (e.g., `new-feature.ts`).
2. Use alias imports for dependencies.
3. Export all functions and constants using named exports.
4. Write or update corresponding test files (`*.test.ts`).
5. Commit changes using the conventional commit format:
   ```
   feat: short description of the feature
   ```

### Testing
**Trigger:** Before submitting a pull request or merging changes  
**Command:** `/run-tests`

1. Ensure all test files follow the `*.test.*` pattern (e.g., `user-service.test.ts`).
2. Run the test suite using the project's test runner.
3. Address any failing tests before proceeding.

## Testing Patterns

- **Test File Naming:**  
  Test files must match the pattern `*.test.*` (e.g., `api-handler.test.ts`).
- **Framework:**  
  The specific testing framework is not detected; follow existing patterns in the repository.
- **Example:**
  ```typescript
  // In data-fetcher.test.ts
  import { fetchData } from '@utils/data-fetcher';

  describe('fetchData', () => {
    it('should return data for valid input', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command        | Purpose                                  |
|----------------|------------------------------------------|
| /feature-dev   | Start a new feature development workflow  |
| /run-tests     | Run the test suite before submission      |
```