# 🎯 Regex Visualizer & Explainer

> Transform complex regular expressions into clear, interactive visualizations and human-readable explanations.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Built with ❤️](https://img.shields.io/badge/Built%20with-❤️-red.svg)](https://github.com/castle-bravo-project/regex-visualizer-explainer)

## ✨ Features

- **🎨 Interactive Visualizations**: Transform regex patterns into beautiful, understandable diagrams
- **📖 Plain English Explanations**: Get human-readable descriptions of what your regex does
- **🔍 Step-by-Step Breakdown**: Understand each component of your regular expression
- **🌈 Syntax Highlighting**: Color-coded regex patterns for better readability
- **🧪 Live Testing**: Test your regex against sample strings in real-time
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🚀 Performance Optimized**: Fast rendering even for complex regex patterns
- **🔄 Export Options**: Save visualizations as images or share via URL

## 🚀 Demo

Try it live: [Regex Visualizer Demo](https://your-demo-url.com)

![Demo GIF](assets/demo.gif)

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/castle-bravo-project/regex-visualizer-explainer.git

# Navigate to the project directory
cd regex-visualizer-explainer

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at `http://localhost:3000`

### Docker (Alternative)

```bash
# Build and run with Docker
docker build -t regex-visualizer .
docker run -p 3000:3000 regex-visualizer
```

## 📚 Usage

### Basic Usage

1. **Enter your regex pattern** in the input field
2. **View the visualization** that appears automatically
3. **Read the explanation** generated in plain English
4. **Test with sample strings** to verify your pattern works correctly

### Advanced Features

#### Visualization Types

- **Railroad Diagrams**: Classic flow-chart style visualization
- **Syntax Trees**: Hierarchical breakdown of regex components
- **State Machines**: Finite automaton representation

#### Explanation Modes

- **Beginner**: Simple, jargon-free explanations
- **Intermediate**: More technical details with examples
- **Expert**: Complete technical breakdown with edge cases

### Examples

```regex
# Email validation
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

# Phone number (US format)
^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$

# URL matching
https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
```

## 🏗️ Architecture

### Tech Stack

- **Frontend**: React 18 with TypeScript
- **Visualization**: D3.js for interactive diagrams
- **Styling**: Tailwind CSS for responsive design
- **Testing**: Jest & React Testing Library
- **Build**: Vite for fast development and optimized builds

### Project Structure

```
src/
├── components/          # React components
│   ├── Visualizer/     # Main visualization component
│   ├── Explainer/      # Explanation generator
│   └── UI/             # Reusable UI components
├── utils/              # Utility functions
│   ├── parser.ts       # Regex parsing logic
│   ├── visualizer.ts   # Visualization generation
│   └── explainer.ts    # Explanation generation
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
└── tests/              # Test files
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Ensure all tests pass: `npm test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow the existing code formatting (Prettier configured)
- Write tests for new features
- Keep components small and focused

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please check our [Issues](https://github.com/castle-bravo-project/regex-visualizer-explainer/issues) page.

When reporting bugs, please include:
- Your operating system and browser version
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Regexper](https://regexper.com/) and [Regex101](https://regex101.com/)
- Built with the amazing [D3.js](https://d3js.org/) visualization library
- Icons from [Lucide React](https://lucide.dev/)
- Special thanks to all contributors and the open-source community

## 📈 Roadmap

- [ ] **Advanced Regex Features**: Support for lookaheads, lookbehinds, and named groups
- [ ] **Multiple Flavors**: Support for different regex engines (JavaScript, Python, Java, etc.)
- [ ] **Collaborative Features**: Share and collaborate on regex patterns
- [ ] **Performance Analyzer**: Identify performance bottlenecks in regex patterns
- [ ] **Mobile App**: Native mobile application for iOS and Android
- [ ] **API Integration**: RESTful API for programmatic access

---

<div align="center">
  <p>Made with ❤️ by the Castle Bravo Project team</p>
  <p>
    <a href="https://github.com/castle-bravo-project">GitHub</a> •
  </p>
</div>
