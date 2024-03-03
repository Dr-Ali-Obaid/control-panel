module.exports = {
    plugins: [
      [
        'postcss-preset-env',
        {
          // Options
          features: {
            'nesting-rules': {
              noIsPseudoSelector: false,
            },
          },
        },
      ],
    ]
}  