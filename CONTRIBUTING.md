# Contributing to RTM YAML Schema

Thank you for your interest in contributing! This document provides guidelines for contributing to the RTM YAML Schema project.

## 🎯 Ways to Contribute

- **🔧 Schema improvements**: Enhance field definitions, validation rules, and entity structures
- **📝 Documentation**: Improve guides, examples, and reference documentation
- **💡 Examples**: Add real-world RTM examples from different industries
- **🛠️ Tools**: Create validation tools, IDE plugins, or integration libraries
- **🐛 Bug reports**: Report schema issues, validation problems, or inconsistencies
- **🌍 Internationalization**: Help translate documentation to other languages

## 🚀 Getting Started

### 1. Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/TestAny-io/rtm-yaml-schema.git
cd rtm-yaml-schema

# Install dependencies
npm install

# Install validation tools
npm install -g ajv-cli

# Run tests to ensure everything works
npm test
```

### 2. Project Structure

``` markdown
rtm-yaml-schema/
├── schema/
│   ├── rtm-schema.json         # Main schema file
│   └── versions/               # Version history
├── examples/
│   ├── simple-project/         # Basic project examples
│   ├── complex-project/        # Enterprise project examples
│   └── industry-specific/      # Domain-specific examples
├── docs/
│   ├── schema-reference.md     # Complete field documentation
│   ├── usage-guide.md         # How-to guides
│   └── best-practices.md      # Recommended patterns
├── tools/
│   ├── validate.js            # Validation utilities
│   └── generate-docs.js       # Documentation generator
└── tests/
    ├── valid/                 # Valid example tests
    └── invalid/               # Invalid example tests
```

## 📋 Schema Change Guidelines

### Making Schema Changes

#### 1. Backward Compatibility

- **MAJOR version** (x.0.0): Breaking changes allowed
- **MINOR version** (0.x.0): Add new optional fields only
- **PATCH version** (0.0.x): Bug fixes and clarifications

#### 2. Required Process for Schema Changes

1. **Create an issue** describing the proposed change
2. **Discuss the change** with maintainers and community
3. **Update schema file** with proper versioning
4. **Add or update examples** showcasing the change
5. **Update documentation** reflecting the changes
6. **Add tests** for the new functionality
7. **Update CHANGELOG.md** with the changes

#### 3. Schema Design Principles

- **Clarity over brevity**: Use descriptive field names
- **Flexibility with constraints**: Allow customization while enforcing standards
- **Tool agnostic**: Don't favor specific tools or platforms
- **Future-proof**: Design for extensibility
- **Industry standard**: Follow JSON Schema best practices

### Example Schema Change Process

```json
// Example: Adding a new optional field to Requirements
{
  "requirement": {
    "properties": {
      // existing fields...
      "estimated_effort": {
        "type": "string",
        "description": "Estimated development effort (e.g., 'Small', 'Medium', 'Large')",
        "enum": ["XSmall", "Small", "Medium", "Large", "XLarge"]
      }
    }
  }
}
```

## 🧪 Testing Requirements

### Validation Testing

All changes must pass validation tests:

```bash
# Test all valid examples
npm run test:valid

# Test all invalid examples (should fail validation)
npm run test:invalid

# Test specific example
ajv validate -s schema/rtm-schema.json -d examples/simple-project/rtm.yaml
```

### Adding New Tests

#### Valid Examples

Create examples in `tests/valid/` that should pass validation:

```yaml
# tests/valid/new-feature-example.yaml
info:
  version: "1.0.0"
  title: "Test RTM with New Feature"
  # ... rest of valid example
```

#### Invalid Examples

Create examples in `tests/invalid/` that should fail validation:

```yaml
# tests/invalid/missing-required-field.yaml
info:
  # Missing required 'version' field
  title: "Invalid RTM Example"
  # ... rest of invalid example
```

## 📝 Documentation Guidelines

### Documentation Standards

- **Clear and concise**: Use simple language and short sentences
- **Example-driven**: Include practical examples for every concept
- **Complete coverage**: Document all fields, constraints, and use cases
- **Up-to-date**: Keep documentation synchronized with schema changes

### Documentation Structure

#### Schema Reference (docs/schema-reference.md)

- Complete field definitions
- Type specifications and constraints
- Validation rules and patterns
- Cross-references between entities

#### Usage Guide (docs/usage-guide.md)

- Step-by-step tutorials
- Common use cases and patterns
- Integration examples
- Tool-specific instructions

#### Best Practices (docs/best-practices.md)

- Recommended naming conventions
- Project structure suggestions
- Performance considerations
- Maintenance guidelines

## 🔄 Pull Request Process

### Before Submitting

- [ ] Create or link to relevant issue
- [ ] Update schema version if needed
- [ ] Add or update examples
- [ ] Update documentation
- [ ] Add tests for new functionality
- [ ] Ensure all tests pass
- [ ] Update CHANGELOG.md

### PR Requirements

1. **Clear description**: Explain what changes and why
2. **Examples included**: Show the change in action
3. **Documentation updated**: Keep docs in sync
4. **Tests passing**: All validation tests must pass
5. **No breaking changes**: Unless it's a major version

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (major version)
- [ ] Documentation update

## Testing
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Examples validate against updated schema

## Documentation
- [ ] Schema reference updated
- [ ] Usage guide updated if needed
- [ ] Examples added or updated
- [ ] CHANGELOG.md updated
```

## 🐛 Reporting Issues

### Bug Reports

Include the following information:

- **Schema version** being used
- **Example YAML** that demonstrates the issue
- **Expected behavior** vs actual behavior
- **Validation tool** and version used
- **Environment details** (OS, tool versions)

### Feature Requests

For new features, provide:

- **Clear use case**: Describe the problem being solved
- **Proposed solution**: How should it work?
- **Example usage**: Show desired behavior
- **Backward compatibility**: Impact on existing implementations

### Issue Template

```markdown
## Issue Type
- [ ] Bug Report
- [ ] Feature Request
- [ ] Documentation Issue
- [ ] Question

## Description
Clear description of the issue or request.

## Example
```yaml
# Provide relevant YAML example
```

## Expected Behavior

What should happen?

## Actual Behavior

What actually happens?

## Environment

- Schema version: 
- Validator: 
- OS: 
```

## 🌟 Recognition

### Contributors
All contributors are recognized in:
- GitHub contributors graph
- CONTRIBUTORS.md file
- Release notes for significant contributions
- Annual contributor highlights

### Contribution Types
We recognize various contribution types:
- 🔧 **Code**: Schema improvements, tools, fixes
- 📝 **Documentation**: Guides, examples, tutorials
- 🐛 **Bug Reports**: Quality issue identification
- 💡 **Ideas**: Feature suggestions and discussions
- 🎨 **Design**: UX/UI improvements for tools
- 🌍 **Translation**: Internationalization efforts

## 📞 Getting Help

- **💬 Discussions**: [GitHub Discussions](https://github.com/TestAny-io/rtm-yaml-schema/discussions)
- **📧 Email**: [support@testany.io](mailto:support@testany.io)
- **🐛 Issues**: [GitHub Issues](https://github.com/TestAny-io/rtm-yaml-schema/issues)
- **📚 Documentation**: [Project Docs](docs/)

## 🎉 Thank You!

Thank you for helping make RTM YAML Schema better! Every contribution, no matter how small, helps the entire software engineering community build better, more traceable requirements.

---

**Remember**: The best contribution is the one that helps someone else solve a real problem! 🚀