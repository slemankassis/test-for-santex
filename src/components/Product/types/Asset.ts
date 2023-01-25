export enum AssetType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  BINARY = 'BINARY'
}

export const stringToAssetType = (assetTypeString: string): AssetType => {
  switch (assetTypeString) {
    case 'VIDEO':
      return AssetType.VIDEO;
    case 'BINARY':
      return AssetType.BINARY;
    default:
      return AssetType.IMAGE;
  }
};

export type AssetProps = {
  name: string;
  type: AssetType;
  source: string;
  width: number;
  height: number;
};
