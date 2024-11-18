module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    src: './src',
                },
            },
        ],
        '@babel/plugin-transform-typescript', // TypeScript 변환 플러그인
        '@babel/plugin-proposal-class-properties', // 클래스 속성 지원
        '@babel/plugin-syntax-jsx', // JSX 문법 지원
    ],
};
