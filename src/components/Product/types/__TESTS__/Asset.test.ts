import { AssetType, stringToAssetType, AssetProps } from '../Asset';

const asset: AssetProps = {
  name: '__NAME__',
  type: 'IMAGE' as AssetType,
  source: '__SOURCE__',
  width: 3,
  height: 2
};

describe('stringToAssetType function', () => {
  it('returns expected AssetType value based on given string', () => {
    expect(stringToAssetType('VIDEO')).toEqual(AssetType.VIDEO);
    expect(stringToAssetType('BINARY')).toEqual(AssetType.BINARY);
    expect(stringToAssetType('IMAGE')).toEqual(AssetType.IMAGE);
  });

  it('by default, returns AssetType.IMAGE', () => {
    expect(stringToAssetType('')).toEqual(AssetType.IMAGE);
    expect(stringToAssetType('     ')).toEqual(AssetType.IMAGE);
    expect(stringToAssetType('not a valid value')).toEqual(AssetType.IMAGE);
  });
});

describe('Asset model', () => {
  it('assigns expected values to properties in constructor', () => {
    expect(asset.name).toEqual('__NAME__');
    expect(asset.type).toEqual('IMAGE');
    expect(asset.source).toEqual('__SOURCE__');
    expect(asset.width).toEqual(3);
    expect(asset.height).toEqual(2);
  });
});
