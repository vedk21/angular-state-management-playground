module.exports = {
  name: 'entertainment-mart',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/entertainment-mart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
