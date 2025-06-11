#!/bin/bash

# Test all example files
echo "Testing example files..."

if ls examples/*.yaml 1> /dev/null 2>&1; then
    find examples -name "*.yaml" -o -name "*.yml" | while read file; do
        echo "Validating $file"
        ajv validate -s schema/rtm-schema.json -d "$file"
        if [ $? -eq 0 ]; then
            echo "✅ $file is valid"
        else
            echo "❌ $file failed validation"
            exit 1
        fi
    done
else
    echo "No example files found, creating basic structure..."
    mkdir -p examples/simple-project
    echo "Please add example files to examples/ directory"
fi

echo "All example tests completed!"