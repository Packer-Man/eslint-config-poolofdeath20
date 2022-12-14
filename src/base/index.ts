const base = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-extra-semi': 2,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-var-requires': 2,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/camelcase': 0,
        'no-async-promise-executor': 0,
        '@typescript-eslint/no-namespace': 0,
        'no-fallthrough': 0,
        '@typescript-eslint/no-unused-vars': [
            2,
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'import/no-anonymous-default-export': 2,
        'import/no-unresolved': 0,
        'import/named': 0,
        'no-constant-condition': 2,
        'no-restricted-syntax': [
            2,
            {
                selector: 'TSEnumDeclaration',
                message: "Don't declare enums",
            },
        ],
        semi: [2, 'always'],
    },
} as const;

export default base;
