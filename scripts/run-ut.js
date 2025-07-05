#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 获取项目根目录（scripts的父目录）
const projectRoot = join(__dirname, '..');

console.log('🚀 开始运行单元测试...');
console.log(`📁 项目根目录: ${projectRoot}`);
console.log('⏳ 执行命令: pnpm test:unit\n');



// 创建子进程运行 pnpm test:unit
const child = spawn('pnpm', ['test:unit'], {
  cwd: projectRoot,
  stdio: 'inherit', // 继承父进程的stdio，这样输出会直接显示在控制台
  shell: true
});



// 监听进程退出
child.on('close', (code) => {
  console.log(`\n📊 测试执行完成，退出码: ${code}`);

  // 直接根据退出码判断结果
  if (code === 0) {
    console.log('🎉 所有测试通过！');
    process.exit(0);
  } else {
    console.log('❌ 测试失败或执行异常！');
    process.exit(code || 1);
  }
});

// 监听进程错误
child.on('error', (error) => {
  console.error('❌ 运行测试时发生错误:', error.message);
  process.exit(1);
});

// 监听进程被中断
process.on('SIGINT', () => {
  console.log('\n⏹️  正在停止测试...');
  child.kill('SIGINT');
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('\n⏹️  正在停止测试...');
  child.kill('SIGTERM');
  process.exit(1);
});
