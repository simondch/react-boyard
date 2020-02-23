module.exports = {
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    'components/(.*)$': '<rootDir>/src/components/$1',
    'store/(.*)$': '<rootDir>/src/store/$1',
    'styles/(.*)$': '<rootDir>/src/styles/$1'
  }
};
