import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#17233b', muted: '#6c7890', brand: '#5b5ce2', canvas: '#f5f7fb' }, boxShadow: { soft: '0 10px 30px rgba(28, 43, 75, .06)' } } }, plugins: [] };
export default config;
