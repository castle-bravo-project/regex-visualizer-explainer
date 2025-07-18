# Regex Visualizer & Explainer

An interactive, web-based tool designed to help users learn, build, and test Regular Expressions (regex) in real-time. It provides instant visual feedback, an interactive pattern builder, and common presets to make working with regex intuitive and efficient.

This application is built with React, TypeScript, and Tailwind CSS, and runs entirely in the browser without needing a backend or complex build process.

## Features

- **Real-time Matching**: Instantly see how your regex pattern affects the test string as you type.
- **Match Highlighting**: All matching substrings are clearly highlighted in the output for easy identification.
- **Interactive Regex Builder & Cheat Sheet**: Click on common regex tokens from the cheat sheet to append them directly to your expression, making it easy to construct complex patterns.
- **Common Presets**: A selection of one-click presets for common patterns like emails, URLs, IP addresses, and more, complete with sample test strings.
- **File Upload for Test String**: Easily load a test string by uploading a `.txt` file directly into the test area.
- **Match Count & Error Handling**: A dynamic counter shows the total number of matches found. If the regex pattern is invalid, a clear error message is displayed to help with debugging.
- **Analysis Report**: Generate a detailed report including the pattern, test string, and a numbered list of all matches. This report can be easily copied to the clipboard or downloaded as a `.txt` file.
- **Fully Client-Side**: All regex processing is done locally in your browser. No data, patterns, or test strings are ever sent to a server.
- **Responsive Design**: The user interface is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

## Getting Started

This project is designed to be as simple as possible to run. There is no build step or package installation required.

### How to Use

1.  Clone or download this repository to your local machine.
2.  Open the `index.html` file directly in a modern web browser (like Chrome, Firefox, or Edge).

That's it! The application will load and be ready to use.

### Usage Walkthrough

1.  **Enter a Pattern**: Type your regex pattern into the "Regular Expression" input field.
2.  **Build Your Pattern**: Use the "Regex Builder & Cheat Sheet" on the right. Click any item to add its token (like `\d` or `+`) to your expression.
3.  **Provide a Test String**: Enter the text you want to search in the "Test String" area, or click "Upload .txt" to load a file.
4.  **Analyze the Matches**: Look at the "Matches" section. Any parts of your test string that match the pattern will be highlighted, and the counter will show the total number of matches found.
5.  **Use Presets**: Click any button in the "Presets" section to load a common regex pattern and a corresponding test string to see how it works.
6.  **Generate a Report**: Once you're satisfied with your analysis, click the "Report" button to open a modal with a clean summary, which you can then copy or download.

### Examples

**Example 1: Find all phone numbers**
-   **Regex Pattern**: `\(?\d{3}\)?[-\s.]?\d{3}[-\s.]\d{4}`
-   **Test String**: `My number is 415-555-1234. You can also reach me at (800) 987.6543.`
-   **Result**: Both `415-555-1234` and `(800) 987.6543` will be highlighted.

**Example 2: Validate Hex Color Codes**
-   **Regex Pattern**: `#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b`
-   **Test String**: `The primary color is #FF5733 and the secondary is #333. An invalid one is #GHI.`
-   **Result**: `#FF5733` and `#333` will be highlighted.

## Roadmap

Here are some planned features to make the application more robust and powerful in the future.

1.  **Gemini API for Regex Generation**: Implement a feature where a user can describe a pattern in natural language (e.g., "a 10-digit phone number with an optional area code in parentheses"), and use the Gemini API to generate the correct regex pattern.
2.  **Gemini API for Regex Explanation**: Instead of a static cheat sheet, send the user's current regex pattern to the Gemini API to receive a detailed, step-by-step explanation of what each component of the pattern does.
3.  **Structured JSON Output (Castle Bravo Compatibility)**: Add an option to the report modal to generate a structured JSON output. This output would be designed for programmatic use and compatibility with the Castle Bravo Project suite of tools, detailing each match, its index, and any capture groups.
4.  **Capture Group Visualization**: Enhance the "Matches" view to not only highlight the full match but also individually identify and list the contents of any capture groups `(...)` within the regex.
5.  **UI Toggles for Regex Flags**: Add simple checkboxes or toggles to enable/disable global flags like `i` (case-insensitive), `m` (multi-line), and `s` (dotall).
6.  **Regex Saving & Sharing**: Allow users to save their patterns locally in their browser or generate a unique, shareable URL that pre-fills the tool with a specific regex and test string.
7.  **Advanced Syntax Highlighting**: Implement syntax highlighting within the regex input field itself to color-code different components of the pattern (quantifiers, groups, anchors, etc.), making complex patterns easier to read.
8.  **Regex Golf & Puzzles**: Introduce a "Challenges" section with a series of puzzles that require users to write a regex to solve them, turning learning into a game.
9.  **Performance Insights**: For very complex or inefficient patterns, provide a warning about potential performance issues (e.g., "catastrophic backtracking") and suggest possible optimizations.
10. **Theme Toggle**: Add a button to allow users to switch between the current dark theme and a new light theme.
