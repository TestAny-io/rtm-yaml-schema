#!/usr/bin/env node

const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

function validateSchema(schemaPath) {
  try {
    const ajv = new Ajv({ strict: false, allErrors: true });
    addFormats(ajv);
    
    console.log(`正在验证 schema: ${schemaPath}`);
    
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    const schema = JSON.parse(schemaContent);
    
    // 编译 schema
    const validate = ajv.compile(schema);
    console.log('✅ Schema 编译成功');
    
    return true;
  } catch (error) {
    console.error('❌ Schema 验证失败:', error.message);
    return false;
  }
}

function validateData(schemaPath, dataPath) {
  try {
    const ajv = new Ajv({ strict: false, allErrors: true });
    addFormats(ajv);
    
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    const schema = JSON.parse(schemaContent);
    const validate = ajv.compile(schema);
    
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    let data;
    
    if (dataPath.endsWith('.yaml') || dataPath.endsWith('.yml')) {
      const yaml = require('js-yaml');
      data = yaml.load(dataContent);
    } else {
      data = JSON.parse(dataContent);
    }
    
    const isValid = validate(data);
    
    if (isValid) {
      console.log(`✅ ${dataPath} 验证通过`);
      return true;
    } else {
      console.log(`❌ ${dataPath} 验证失败:`);
      validate.errors.forEach(error => {
        console.log(`  - ${error.instancePath}: ${error.message}`);
      });
      return false;
    }
  } catch (error) {
    console.error(`❌ 验证 ${dataPath} 时出错:`, error.message);
    return false;
  }
}

// 主程序
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('用法:');
  console.log('  node validate-schema.js compile <schema-file>');
  console.log('  node validate-schema.js validate <schema-file> <data-file>');
  process.exit(1);
}

const command = args[0];
const schemaPath = args[1];

if (command === 'compile') {
  const success = validateSchema(schemaPath);
  process.exit(success ? 0 : 1);
} else if (command === 'validate') {
  if (args.length < 3) {
    console.error('validate 命令需要数据文件参数');
    process.exit(1);
  }
  const dataPath = args[2];
  const success = validateData(schemaPath, dataPath);
  process.exit(success ? 0 : 1);
} else {
  console.error('未知命令:', command);
  process.exit(1);
}
