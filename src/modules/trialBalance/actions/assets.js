import * as constants from '../constants/assets';

export const addAsset = label => ({
  type: constants.ADD_ASSET,
  label
})
export const removeAsset = label => ({
  type: constants.REMOVE_ASSET,
  label
})
export const modifyAssetLabel = (oldLabel, newLabel) => ({
  type: constants.MODIFY_ASSET_LABEL,
  oldLabel,
  newLabel
})
export const modifyAssetAmount = (label, amount) => ({
  type: constants.MODIFY_ASSET_AMOUNT,
  label,
  amount
})
