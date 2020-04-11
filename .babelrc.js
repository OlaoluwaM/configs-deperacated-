module.exports = api => {
  const isTest = String(process.env.NODE_ENV) === 'test';

  return {
    presets: [
      ['@babel/preset-env', { modules: isTest ? 'commonjs' : false }],
      '@babel/preset-react',
    ],
    plugins: [
      'syntax-dynamic-import',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      [
        'transform-inline-environment-variables',
        {
          include: ['NODE_ENV'],
        },
      ],
    ],
  };
};
