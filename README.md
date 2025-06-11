# RTM YAML Schema

A comprehensive JSON Schema for Requirements Traceability Matrix (RTM) documents in YAML format.

[![Schema Validation](https://github.com/yourusername/rtm-yaml-schema/workflows/Schema%20Validation/badge.svg)](https://github.com/yourusername/rtm-yaml-schema/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JSON Schema](https://img.shields.io/badge/JSON%20Schema-Draft%2007-blue.svg)](https://json-schema.org/)

## 🎯 Purpose

This schema defines a standardized structure for Requirements Traceability Matrix documents that enables:

- **Bidirectional traceability** between business objectives, requirements, and validation evidence
- **Tool interoperability** across different development environments
- **Automated validation** of RTM document completeness and consistency
- **Structured data exchange** between requirements management tools

## 🏗️ Schema Structure

The RTM schema supports comprehensive requirement traceability with the following entities:

### Core Entities

- **📋 Requirements** - Functional & Non-Functional requirements with complete traceability
- **🏛️ Architecture Decision Records (ADR)** - Design decisions and their rationale
- **💭 Project Assumptions** - Critical assumptions and their validation status
- **🐛 Issues & Risks** - Problem tracking and risk management
- **🔧 Software Components** - System components and their requirements mapping
- **🧪 Test Cases** - Validation and verification test cases
- **🔄 Change Requests** - Requirement changes and their impact

### Key Features

- **Multi-phase development support** - Schema adapts to different project phases
- **Flexible requirement categorization** - Support for various requirement types
- **Comprehensive validation** - Strict field validation and type checking
- **Semantic versioning compatibility** - Version alignment with SRS documents

## 🚀 Quick Start

### Installation & Validation

```bash
# Install AJV CLI for schema validation
npm install -g ajv-cli

# Validate your RTM document
ajv validate -s schema/rtm-schema.json -d your-rtm.yaml
```

### Basic RTM Structure

```yaml
info:
  version: "1.0.0"
  title: "My Project RTM"
  description: "Complete traceability matrix for project requirements"
  contact:
    name: "Project Manager"
    email: "pm@company.com"
  created: "2025-01-15"
  updated: "2025-01-15"
  status: "Draft"

requirement:
  - id: "FR-USER-001"
    summary: "User registration functionality"
    description: "System shall allow new users to register with email and password"
    type: "Functional"
    priority: "High"
    srs_info:
      business_objectives: "Enable user onboarding and account management"
      category_and_complexity:
        category: "User Management"
        complexity: "Medium"
      acceptance_criteria:
        - "User can register with valid email address"
        - "Password must meet complexity requirements"
        - "Registration confirmation sent via email"

  - id: "NFR-USER-001"
    summary: "Login response time"
    description: "User login shall complete within 2 seconds under normal load"
    type: "Non-Functional"
    priority: "High"
    srs_info:
      business_objectives: "Ensure good user experience"
      metrics: "P95 response time < 2 seconds"
      category_and_complexity:
        category: "Performance"
        complexity: "Small"
      acceptance_criteria:
        - "Login response time measured under 1000 concurrent users"
        - "P95 response time consistently below 2 seconds"

# Empty arrays for future development phases
adr: []
assumption: []
issue: []
component: []
testcase: []
risk: []
change_request: []
```

## 📖 Documentation

- [📚 Schema Reference](docs/schema-reference.md) - Complete field documentation
- [🔧 Usage Guide](docs/usage-guide.md) - How to create RTM documents
- [⭐ Best Practices](docs/best-practices.md) - Recommended patterns and conventions
- [📝 Examples](examples/) - Sample RTM documents for different project types

## 🛠️ Tools & Integrations

### Validation Tools

- **JSON Schema Validators**: AJV, Ajv-cli, jsonschema
- **IDE Support**: VS Code with YAML extensions, IntelliJ IDEA
- **CI/CD Integration**: GitHub Actions, GitLab CI, Jenkins

### Programming Language Support

```javascript
// Node.js
const Ajv = require('ajv');
const ajv = new Ajv();
const validate = ajv.compile(require('./schema/rtm-schema.json'));
```

```python
# Python
import jsonschema
import yaml

with open('schema/rtm-schema.json') as f:
    schema = json.load(f)
    
jsonschema.validate(rtm_data, schema)
```

```go
// Go
import "github.com/xeipuuv/gojsonschema"

schemaLoader := gojsonschema.NewReferenceLoader("file://./schema/rtm-schema.json")
documentLoader := gojsonschema.NewStringLoader(yamlString)
result, _ := gojsonschema.Validate(schemaLoader, documentLoader)
```

## 🌟 Features

- ✅ **JSON Schema Draft 07 compliant** - Industry standard validation
- ✅ **Comprehensive field validation** - Strict type checking and pattern validation
- ✅ **Flexible requirement categorization** - Support for diverse project types
- ✅ **Multi-phase development support** - Adapts to different development stages
- ✅ **Tool-agnostic design** - Works with any YAML-compatible system
- ✅ **Extensive documentation** - Complete guides and examples
- ✅ **CI/CD ready** - GitHub Actions workflow included
- ✅ **Community driven** - Open for contributions and feedback

## 📊 Schema Statistics

| Entity Type | Required Fields | Optional Fields | Validation Rules |
|-------------|----------------|-----------------|------------------|
| Requirements | 5 | 8+ | ID pattern, type enum, priority enum |
| ADR | 7 | 12+ | Status workflow, decision structure |
| Components | 7 | 8+ | Tech stack validation, interface definitions |
| Test Cases | 4 | 7+ | Test type enum, verification timing |
| Risks | 3 | 8+ | Risk level matrix, mitigation tracking |

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Ensure all examples validate: `npm run test`
5. Submit a pull request

### Areas for Contribution

- 📊 **Schema enhancements** - New fields, validation rules
- 📝 **Documentation improvements** - Guides, examples, tutorials  
- 🛠️ **Tool integrations** - IDE plugins, CLI tools, API wrappers
- 🌍 **Internationalization** - Multi-language documentation
- 🎯 **Use case examples** - Industry-specific RTM patterns

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

## 📈 Usage Statistics

``` text
Downloads: 🚀 Growing
GitHub Stars: ⭐ Help us reach 1k!
Community: 👥 Join our discussions
Issues Resolved: ✅ Quick response time
```

## 🙏 Acknowledgments

- Thanks to all [contributors](https://github.com/yourusername/rtm-yaml-schema/graphs/contributors)
- Inspired by industry best practices in requirements management
- Built with love for the software engineering community

---

**⭐ Star this repo if you find it useful!**  
**🔗 Share with your team to standardize RTM across your organization!**

## 📞 Support

- 📚 [Documentation](docs/)
- 🐛 [Issue Tracker](https://github.com/TestAny-io/rtm-yaml-schema/issues)
- 💬 [Discussions](https://github.com/TestAny-io/rtm-yaml-schema/discussions)
- 📧 [Email Support](mailto:support@testany.io)