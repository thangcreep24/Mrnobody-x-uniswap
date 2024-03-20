// hash->signature mapping generated by scripts/generateFunctionSignatureHashesFromABIs.js

const HASH_TO_FUNCTION_SIGNATURE: Record<string, string> = {
  '46141319': 'feeGrowthGlobal1X128()',
  '49616997': 'unwrapWETH9(uint256)',
  '89035730': 'parameters()',
  '3644e515': 'DOMAIN_SEPARATOR()',
  '30adf81f': 'PERMIT_TYPEHASH()',
  '4aa4a4fc': 'WETH9()',
  '095ea7b3': 'approve(address,uint256)',
  '70a08231': 'balanceOf(address)',
  '6c0360eb': 'baseURI()',
  '42966c68': 'burn(uint256)',
  '302e5bb1': 'collect(tuple)',
  '13ead562': 'createAndInitializePoolIfNecessary(address,address,uint24,uint160)',
  c6887a9d: 'decreaseLiquidity(tuple)',
  c45a0155: 'factory()',
  '081812fc': 'getApproved(uint256)',
  f13884c1: 'increaseLiquidity(tuple)',
  e985e9c5: 'isApprovedForAll(address,address)',
  '4405fca9': 'mint(tuple)',
  ac9650d8: 'multicall(bytes[])',
  '06fdde03': 'name()',
  '6352211e': 'ownerOf(uint256)',
  '7ac2ff7b': 'permit(address,uint256,uint256,uint8,bytes32,bytes32)',
  '99fbab88': 'positions(uint256)',
  '12210e8a': 'refundETH()',
  '42842e0e': 'safeTransferFrom(address,address,uint256)',
  b88d4fde: 'safeTransferFrom(address,address,uint256,bytes)',
  f3995c67: 'selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)',
  '4659a494': 'selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)',
  a4a78f0c: 'selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)',
  c2e3140a: 'selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)',
  a22cb465: 'setApprovalForAll(address,bool)',
  '01ffc9a7': 'supportsInterface(bytes4)',
  df2ab5bb: 'sweepToken(address,uint256,address)',
  '95d89b41': 'symbol()',
  '4f6ccce7': 'tokenByIndex(uint256)',
  '2f745c59': 'tokenOfOwnerByIndex(address,uint256)',
  c87b56dd: 'tokenURI(uint256)',
  '18160ddd': 'totalSupply()',
  '23b872dd': 'transferFrom(address,address,uint256)',
  d3487997: 'uniswapV3MintCallback(uint256,uint256,bytes)',
  '49404b7c': 'unwrapWETH9(uint256,address)',
  '7e5af771': 'flipRatio(address,address,uint256)',
  b7af3cdc: 'nativeCurrencyLabel()',
  a18246e2: 'nativeCurrencyLabelBytes()',
  '9d7b0ea8': 'tokenRatioPriority(address,uint256)',
  e9dc6375: 'tokenURI(address,uint256)',
  '80fb3ad6': 'exactInput(tuple)',
  '5d76b977': 'exactInputSingle(tuple)',
  d42bbb58: 'exactOutput(tuple)',
  '5bd7800f': 'exactOutputSingle(tuple)',
  e0e189a0: 'sweepTokenWithFee(address,uint256,address,uint256,address)',
  fa461e33: 'uniswapV3SwapCallback(int256,int256,bytes)',
  '9b2c0a37': 'unwrapWETH9WithFee(uint256,address,uint256,address)',
  '81c88719': 'migrate(tuple)',
  b44a2722: 'nonfungiblePositionManager()',
  '2841384c': 'initFlash(tuple)',
  c31c9c07: 'swapRouter()',
  e9cbafb0: 'uniswapV3FlashCallback(uint256,uint256,bytes)',
  cdca1753: 'quoteExactInput(bytes,uint256)',
  f7729d43: 'quoteExactInputSingle(address,address,uint24,uint256,uint160)',
  '2f80bb1d': 'quoteExactOutput(bytes,uint256)',
  '30d07f21': 'quoteExactOutputSingle(address,address,uint24,uint256,uint160)',
  '6b89534b': 'quoteExactInputSingle(tuple)',
  a801d040: 'quoteExactOutputSingle(tuple)',
  '351fb478': 'getPopulatedTicksInWord(address,int16)',
  '0f28c97d': 'getCurrentBlockTimestamp()',
  '4d2301cc': 'getEthBalance(address)',
  '1e31a740': 'multicall(tuple[])',
  '785689b2': 'constructTokenURI(tuple)',
  dd62ed3e: 'allowance(address,address)',
  '313ce567': 'decimals()',
  a9059cbb: 'transfer(address,uint256)',
  '8fcbaf0c': 'permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)',
  '1626ba7e': 'isValidSignature(bytes32,bytes)',
  d0e30db0: 'deposit()',
  '2e1a7d4d': 'withdraw(uint256)',
  a1671295: 'createPool(address,address,uint24)',
  '8a7c195f': 'enableFeeAmount(uint24,int24)',
  '22afcccb': 'feeAmountTickSpacing(uint24)',
  '1698ee82': 'getPool(address,address,uint24)',
  '8da5cb5b': 'owner()',
  '13af4035': 'setOwner(address)',
  a34123a7: 'burn(int24,int24,uint128)',
  '4f1eb3d8': 'collect(address,int24,int24,uint128,uint128)',
  '85b66729': 'collectProtocol(address,uint128,uint128)',
  ddca3f43: 'fee()',
  f3058399: 'feeGrowthGlobal0X128()',
  '490e6cbc': 'flash(address,uint256,uint256,bytes)',
  '32148f67': 'increaseObservationCardinalityNext(uint16)',
  f637731d: 'initialize(uint160)',
  '1a686502': 'liquidity()',
  '70cf754a': 'maxLiquidityPerTick()',
  '3c8a7d8d': 'mint(address,int24,int24,uint128,bytes)',
  '252c09d7': 'observations(uint256)',
  '883bdbfd': 'observe(uint32[])',
  '514ea4bf': 'positions(bytes32)',
  '1ad8b03b': 'protocolFees()',
  '8206a4d1': 'setFeeProtocol(uint8,uint8)',
  '3850c7bd': 'slot0()',
  a38807f2: 'snapshotCumulativesInside(int24,int24)',
  '128acb08': 'swap(address,bool,int256,uint160,bytes)',
  '5339c296': 'tickBitmap(int16)',
  d0c93a7c: 'tickSpacing()',
  f30dba93: 'ticks(int24)',
  '0dfe1681': 'token0()',
  d21220a7: 'token1()',
  '7ecebe00': 'nonces(address)',
  d505accf: 'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)',
  '10d1e85c': 'uniswapV2Call(address,uint256,uint256,bytes)',
  '1e3dd18b': 'allPairs(uint256)',
  '574f2ba3': 'allPairsLength()',
  c9c65396: 'createPair(address,address)',
  '017e7e58': 'feeTo()',
  '094b7415': 'feeToSetter()',
  e6a43905: 'getPair(address,address)',
  f46901ed: 'setFeeTo(address)',
  a2e74af6: 'setFeeToSetter(address)',
  ba9a7a56: 'MINIMUM_LIQUIDITY()',
  '89afcb44': 'burn(address)',
  '0902f1ac': 'getReserves()',
  '485cc955': 'initialize(address,address)',
  '7464fc3d': 'kLast()',
  '6a627842': 'mint(address)',
  '5909c0d5': 'price0CumulativeLast()',
  '5a3d5493': 'price1CumulativeLast()',
  bc25cf77: 'skim(address)',
  '022c0d9f': 'swap(uint256,uint256,address,bytes)',
  fff6cae9: 'sync()',
  '709a1cc2': 'collectRewards(bytes)',
  '24856bc3': 'execute(bytes,bytes[])',
  '3593564c': 'execute(bytes,bytes[],uint256)',
  bc197c81: 'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)',
  f23a6e61: 'onERC1155Received(address,address,uint256,uint256,bytes)',
  '150b7a02': 'onERC721Received(address,address,uint256,bytes)',
  '8264fe98': 'buyPunk(uint256)',
  '8b72a2ec': 'transferPunk(address,uint256)',
  '571ac8b0': 'approveMax(address)',
  cab372ce: 'approveMaxMinusOne(address)',
  '639d71a9': 'approveZeroThenMax(address)',
  ab3fdd50: 'approveZeroThenMaxMinusOne(address)',
  b3a2af13: 'callPositionManager(bytes)',
  efdeed8e: 'checkOracleSlippage(bytes[],uint128[],uint24,uint32)',
  f25801a7: 'checkOracleSlippage(bytes,uint24,uint32)',
  '68e0d4e1': 'factoryV2()',
  dee00f35: 'getApprovalType(address,uint256)',
  '1f0464d1': 'multicall(bytes32,bytes[])',
  '5ae401dc': 'multicall(uint256,bytes[])',
  '791b98bc': 'positionManager()',
  f2d5d56b: 'pull(address,uint256)',
  '472b43f3': 'swapExactTokensForTokens(uint256,uint256,address[],address)',
  '42712a67': 'swapTokensForExactTokens(uint256,uint256,address[],address)',
  e90a182f: 'sweepToken(address,uint256)',
  '3068c554': 'sweepTokenWithFee(address,uint256,uint256,address)',
  d4ef38de: 'unwrapWETH9WithFee(uint256,uint256,address)',
  '1c58db4f': 'wrapETH(uint256)',
  df6adeaf: 'quoteExactInputSingleV2(tuple)',
  '38c0dfd3': 'quoteExactInputSingleV3(tuple)',
  be7672e5: 'batchValidate(address[],address[],uint256)',
  '0143aace': 'validate(address,address[],uint256)',
}

export default function methodHashToFunctionSignature(hash: string): string | undefined {
  return HASH_TO_FUNCTION_SIGNATURE[hash]
}
