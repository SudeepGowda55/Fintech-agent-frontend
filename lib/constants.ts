import type { Address } from "wagmi";

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export const exchangeProxy = "0xdef1c0ded9bec7f1a1670819833240f027b25eff";

/* type Token = {
  address: Address;
}; */

interface Token {
  name: string;
  address: Address;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export const POLYGON_TOKENS: Token[] = [
  {
    chainId: 11155111,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  {
    chainId: 11155111,
    name: "UNISWAP",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  {
    chainId: 11155111,
    name: "CHAINLINK",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  }
];

export const POLYGON_TOKENS_BY_SYMBOL: Record<string, Token> = {
  weth: {
    chainId: 11155111,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  uni: {
    chainId: 11155111,
    name: "UNISWAP",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  link: {
    chainId: 11155111,
    name: "CHAINLINK",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  }
};

export const POLYGON_TOKENS_BY_ADDRESS: Record<string, Token> = {
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": {
    chainId: 11155111,
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    address: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
    logoURI:
      "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
  },
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": {
    chainId: 11155111,
    name: "UNISWAP",
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg",
  },
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": {
    chainId: 11155111,
    name: "CHAINLINK",
    symbol: "LINK",
    decimals: 18,
    address: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    logoURI:
      "https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg",
  }
};
