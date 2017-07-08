import {
  ADD_ASSET,
  REMOVE_ASSET,
  MODIFY_ASSET_LABEL,
  MODIFY_ASSET_AMOUNT,
  RECALCULATE_ASSETS_TOTAL,
} from '../constants';

export const addAsset = label => ({
  type: ADD_ASSET,
  label
})
export const removeAsset = label => ({
  type: REMOVE_ASSET,
  label
})
export const modifyAssetLabel = (oldLabel, newLabel) => ({
  type: MODIFY_ASSET_LABEL,
  oldLabel,
  newLabel
})
export const modifyAssetAmount = (label, amount) => ({
  type: MODIFY_ASSET_AMOUNT,
  label,
  amount
})

export const updateAssetsTotal = total => ({
  type: RECALCULATE_ASSETS_TOTAL,
  total
})
