#!/usr/bin/env node

/**
 * Performance Testing Script for Mobile Optimization
 * This script helps validate the mobile performance improvements
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Triomphe Mobile Performance Test');
console.log('=====================================\n');

// Check if required optimizations are in place
const checks = [
  {
    name: 'Next.js Config Optimizations',
    file: 'next.config.ts',
    checks: [
      'images: {',
      'formats: [\'image/webp\', \'image/avif\']',
      'compress: true',
      'optimizeCss: true'
    ]
  },
  {
    name: 'Font Loading Optimizations',
    file: 'src/app/layout.tsx',
    checks: [
      'display: \'swap\'',
      'preload: true',
      'preload: false'
    ]
  },
  {
    name: 'Image Optimization Component',
    file: 'src/components/OptimizedImage.tsx',
    checks: [
      'import Image from "next/image"',
      'priority',
      'sizes',
      'quality'
    ]
  },
  {
    name: 'Component Memoization',
    file: 'src/components/Reveal.tsx',
    checks: [
      'memo,',
      'export default memo(Reveal)'
    ]
  },
  {
    name: 'Mobile CSS Optimizations',
    file: 'src/app/globals.css',
    checks: [
      '@media (max-width: 768px)',
      '@media (hover: none) and (pointer: coarse)',
      'prefers-reduced-motion: reduce'
    ]
  },
  {
    name: 'Service Worker',
    file: 'public/sw.js',
    checks: [
      'CACHE_NAME',
      'addEventListener(\'fetch\'',
      'cache-first'
    ]
  },
  {
    name: 'Web App Manifest',
    file: 'public/manifest.json',
    checks: [
      '"display": "standalone"',
      '"orientation": "portrait-primary"',
      '"theme_color"'
    ]
  }
];

let passedChecks = 0;
let totalChecks = 0;

checks.forEach(check => {
  console.log(`📋 ${check.name}`);
  
  const filePath = path.join(process.cwd(), check.file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`   ❌ File not found: ${check.file}\n`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let filePassed = 0;
  
  check.checks.forEach(checkItem => {
    totalChecks++;
    if (content.includes(checkItem)) {
      console.log(`   ✅ ${checkItem}`);
      filePassed++;
      passedChecks++;
    } else {
      console.log(`   ❌ ${checkItem}`);
    }
  });
  
  const percentage = Math.round((filePassed / check.checks.length) * 100);
  console.log(`   📊 ${filePassed}/${check.checks.length} (${percentage}%)\n`);
});

// Overall results
const overallPercentage = Math.round((passedChecks / totalChecks) * 100);
console.log('📈 Overall Results');
console.log('==================');
console.log(`✅ Passed: ${passedChecks}/${totalChecks} (${overallPercentage}%)`);

if (overallPercentage >= 90) {
  console.log('🎉 Excellent! Your site is well optimized for mobile performance.');
} else if (overallPercentage >= 70) {
  console.log('👍 Good! Most optimizations are in place, but there\'s room for improvement.');
} else {
  console.log('⚠️  Needs work. Consider implementing more mobile optimizations.');
}

console.log('\n🔧 Additional Recommendations:');
console.log('• Test on real mobile devices');
console.log('• Use Lighthouse for performance auditing');
console.log('• Monitor Core Web Vitals');
console.log('• Consider implementing lazy loading for below-the-fold content');
console.log('• Optimize third-party scripts and analytics');

// Performance tips
console.log('\n💡 Mobile Performance Tips:');
console.log('• Keep images under 100KB when possible');
console.log('• Use WebP/AVIF formats for better compression');
console.log('• Minimize JavaScript bundle size');
console.log('• Implement critical CSS inlining');
console.log('• Use CDN for static assets');
console.log('• Enable gzip/brotli compression on server');
