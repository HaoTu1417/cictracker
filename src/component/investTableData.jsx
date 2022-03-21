import * as XLSX from "xlsx";
const coinsToIgnore = ["BUSD"];

const readFileToData = (e, onReadDone) => {
  const [file] = e.target.files;
  const reader = new FileReader();
  const coinData = [];
  reader.onload = (evt) => {
    const bstr = evt.target.result;
    const wb = XLSX.read(bstr, { type: "binary" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log(data);
    for (let i = 2; i < data.length; i++) {
      const line = data[i];
      const coinCode = line[1];
      if (!coinCode || coinCode.length < 1) {
        continue;
      }
      if (coinsToIgnore.includes(coinCode)) {
        continue;
      }
      const coin = { ...baseData[coinCode] };
      coin._id = i;
      coin.coinInvestment = line[6];
      coin.realizedValue = line[9];
      coinData.push(coin);
    }
    console.log(coinData);
    onReadDone(coinData);
  };
  reader.readAsBinaryString(file);
};

const columns = [
  {
    path: "coinCode",
    label: "Mã Coin",
  },

  { path: "coinName", label: "Tên Coin" },
  { path: "safetyPoint", label: "Điểm An Toàn" },
  { path: "group", label: "Nhóm" },
  { path: "coinInvestment", label: "Vốn" },
  { path: "coinCurrentValue", label: "Giá trị hiện tại" },
  { path: "realizedValue", label: "Đã chốt" },
];

const baseData = {
  BTC: {
    coinName: "Bitcoin",
    group: "C",
    safetyPoint: 10,
    coinCode: "BTC",
  },
  ETH: {
    coinName: "Ethereum",
    group: "C",
    safetyPoint: 9,
    coinCode: "ETH",
  },
  ADA: {
    coinName: "Cardano",
    group: "C",
    safetyPoint: 7,
    coinCode: "ADA",
  },
  LINK: {
    coinName: "ChainLink",
    group: "C",
    safetyPoint: 7,
    coinCode: "LINK",
  },
  BNB: {
    coinName: "Binance Coin",
    group: "C",
    safetyPoint: 6,
    coinCode: "BNB",
  },
  BCH: {
    coinName: "Bitcoin Cash",
    group: "C",
    safetyPoint: 5,
    coinCode: "BCH",
  },
  LTC: {
    coinName: "Litecoin",
    group: "C",
    safetyPoint: 5,
    coinCode: "LTC",
  },
  XMR: {
    coinName: "Monero",
    group: "C",
    safetyPoint: 4,
    coinCode: "XMR",
  },
  XLM: {
    coinName: "Stellar",
    group: "C",
    safetyPoint: 4,
    coinCode: "XLM",
  },
  NEO: {
    coinName: "NEO",
    group: "C",
    safetyPoint: 4,
    coinCode: "NEO",
  },
  MIOTA: {
    coinName: "IOTA",
    group: "C",
    safetyPoint: 4,
    coinCode: "MIOTA",
  },
  TRX: {
    coinName: "TRON",
    group: "C",
    safetyPoint: 4,
    coinCode: "TRX",
  },
  DASH: {
    coinName: "Dash",
    group: "C",
    safetyPoint: 3,
    coinCode: "DASH",
  },
  XEM: {
    coinName: "NEM",
    group: "C",
    safetyPoint: 3,
    coinCode: "XEM",
  },
  PAXG: {
    coinName: "PAX Gold",
    group: "C",
    safetyPoint: 3,
    coinCode: "PAXG",
  },
  XRP: {
    coinName: "XRP",
    group: "C",
    safetyPoint: 1,
    coinCode: "XRP",
  },
  EOS: {
    coinName: "EOS",
    group: "C",
    safetyPoint: 0,
    coinCode: "EOS",
  },
  SOL2: {
    coinName: "Solana",
    group: "B",
    safetyPoint: 7,
    coinCode: "SOL",
  },
  DOT2: {
    coinName: "Polkadot",
    group: "B",
    safetyPoint: 7,
    coinCode: "DOT",
  },
  ZEC: {
    coinName: "Zcash",
    group: "B",
    safetyPoint: 5,
    coinCode: "ZEC",
  },
  VET: {
    coinName: "VeChain",
    group: "B",
    safetyPoint: 5,
    coinCode: "VET",
  },
  HT: {
    coinName: "Huobi Token",
    group: "B",
    safetyPoint: 5,
    coinCode: "HT",
  },
  THETA: {
    coinName: "Theta Token",
    group: "B",
    safetyPoint: 5,
    coinCode: "THETA",
  },
  ATOM2: {
    coinName: "Cosmos",
    group: "B",
    safetyPoint: 5,
    coinCode: "ATOM",
  },
  XTZ: {
    coinName: "Tezos",
    group: "B",
    safetyPoint: 5,
    coinCode: "XTZ",
  },
  LUNA: {
    coinName: "LUNA",
    group: "B",
    safetyPoint: 5,
    coinCode: "LUNA",
  },
  UNI2: {
    coinName: "Uniswap",
    group: "B",
    safetyPoint: 5,
    coinCode: "UNI",
  },
  "1INCH": {
    coinName: "1Inch",
    group: "B",
    safetyPoint: 5,
    coinCode: "1INCH",
  },
  NEAR: {
    coinName: "Near",
    group: "B",
    safetyPoint: 5,
    coinCode: "NEAR",
  },
  AVAX: {
    coinName: "Avalanche",
    group: "B",
    safetyPoint: 5,
    coinCode: "AVAX",
  },
  ONE: {
    coinName: "Harmony",
    group: "B",
    safetyPoint: 5,
    coinCode: "ONE",
  },
  ZRX: {
    coinName: "0x",
    group: "B",
    safetyPoint: 4,
    coinCode: "ZRX",
  },
  BAT: {
    coinName: "Basic Attention Token",
    group: "B",
    safetyPoint: 4,
    coinCode: "BAT",
  },
  ICX: {
    coinName: "ICON",
    group: "B",
    safetyPoint: 4,
    coinCode: "ICX",
  },
  XNO: {
    coinName: "Nano",
    group: "B",
    safetyPoint: 4,
    coinCode: "XNO",
  },
  WAVES: {
    coinName: "Waves",
    group: "B",
    safetyPoint: 4,
    coinCode: "WAVES",
  },
  ZIL: {
    coinName: "Zilliqa",
    group: "B",
    safetyPoint: 4,
    coinCode: "ZIL",
  },
  DCR: {
    coinName: "decred",
    group: "B",
    safetyPoint: 4,
    coinCode: "DCR",
  },
  KCS: {
    coinName: "Kucoin Shares",
    group: "B",
    safetyPoint: 4,
    coinCode: "KCS",
  },
  RVN: {
    coinName: "Ravencoin",
    group: "B",
    safetyPoint: 4,
    coinCode: "RVN",
  },
  MKR: {
    coinName: "Maker",
    group: "B",
    safetyPoint: 4,
    coinCode: "MKR",
  },
  MATIC: {
    coinName: "Polygon",
    group: "B",
    safetyPoint: 4,
    coinCode: "MATIC",
  },
  QTUM: {
    coinName: "Qtum",
    group: "B",
    safetyPoint: 3,
    coinCode: "QTUM",
  },
  LSK: {
    coinName: "Lisk",
    group: "B",
    safetyPoint: 3,
    coinCode: "LSK",
  },
  DGB: {
    coinName: "DigiByte",
    group: "B",
    safetyPoint: 3,
    coinCode: "DGB",
  },
  ONT: {
    coinName: "Ontology",
    group: "B",
    safetyPoint: 3,
    coinCode: "ONT",
  },
  BTS: {
    coinName: "BitShares",
    group: "B",
    safetyPoint: 2,
    coinCode: "BTS",
  },
  GLM: {
    coinName: "Golem",
    group: "B",
    safetyPoint: 2,
    coinCode: "GLM",
  },
  HOT: {
    coinName: "Holochain",
    group: "B",
    safetyPoint: 2,
    coinCode: "HOT",
  },
  GAS: {
    coinName: "Gas",
    group: "B",
    safetyPoint: 1,
    coinCode: "GAS",
  },
  STEEM: {
    coinName: "Steem",
    group: "B",
    safetyPoint: 1,
    coinCode: "STEEM",
  },
  ETC: {
    coinName: "Etherum Classic",
    group: "B",
    safetyPoint: 1,
    coinCode: "ETC",
  },
  OMG: {
    coinName: "OMG Network",
    group: "B",
    safetyPoint: 0,
    coinCode: "OMG",
  },
  AAVE: {
    coinName: "Aave",
    group: "A",
    safetyPoint: 5,
    coinCode: "AAVE",
  },
  YFI: {
    coinName: "Yearn.finance",
    group: "A",
    safetyPoint: 5,
    coinCode: "YFI",
  },
  GRT: {
    coinName: "The Graph",
    group: "A",
    safetyPoint: 5,
    coinCode: "GRT",
  },
  KNC: {
    coinName: "Kyber Network",
    group: "A",
    safetyPoint: 4,
    coinCode: "KNC",
  },
  FTM: {
    coinName: "Fantom",
    group: "A",
    safetyPoint: 4,
    coinCode: "FTM",
  },
  ALGO: {
    coinName: "Algorand",
    group: "A",
    safetyPoint: 4,
    coinCode: "ALGO",
  },
  ENJ: {
    coinName: "Enjin Coin",
    group: "A",
    safetyPoint: 4,
    coinCode: "ENJ",
  },
  SNX: {
    coinName: "Synthetix Network",
    group: "A",
    safetyPoint: 4,
    coinCode: "SNX",
  },
  SRM: {
    coinName: "Serum Coin",
    group: "A",
    safetyPoint: 4,
    coinCode: "SRM",
  },
  FTT: {
    coinName: "FTX Token",
    group: "A",
    safetyPoint: 4,
    coinCode: "FTT",
  },
  FIL: {
    coinName: "Filecoin",
    group: "A",
    safetyPoint: 4,
    coinCode: "FIL",
  },
  CRV: {
    coinName: "Curve",
    group: "A",
    safetyPoint: 4,
    coinCode: "CRV",
  },
  KSM: {
    coinName: "Kusama",
    group: "A",
    safetyPoint: 4,
    coinCode: "KSM",
  },
  CELO: {
    coinName: "Celo",
    group: "A",
    safetyPoint: 4,
    coinCode: "CELO",
  },
  CVC: {
    coinName: "Civic",
    group: "A",
    safetyPoint: 3,
    coinCode: "CVC",
  },
  STORJ: {
    coinName: "Storj",
    group: "A",
    safetyPoint: 3,
    coinCode: "STORJ",
  },
  WAXP: {
    coinName: "WAX",
    group: "A",
    safetyPoint: 3,
    coinCode: "WAXP",
  },
  BNT: {
    coinName: "Bancor",
    group: "A",
    safetyPoint: 3,
    coinCode: "CVC",
  },
  CRO: {
    coinName: "Crypto.com Chain",
    group: "A",
    safetyPoint: 3,
    coinCode: "CRO",
  },
  SAND: {
    coinName: "The Sandbox",
    group: "A",
    safetyPoint: 3,
    coinCode: "SAND",
  },
  SUSHI: {
    coinName: "Sushi",
    group: "A",
    safetyPoint: 3,
    coinCode: "SUSHI",
  },
  CAKE: {
    coinName: "Pancake",
    group: "A",
    safetyPoint: 3,
    coinCode: "CAKE",
  },
  INJ: {
    coinName: "Injective Protocol",
    group: "A",
    safetyPoint: 3,
    coinCode: "INJ",
  },
  REN: {
    coinName: "Ren",
    group: "A",
    safetyPoint: 3,
    coinCode: "REN",
  },
  CHZ: {
    coinName: "Chiliz",
    group: "A",
    safetyPoint: 3,
    coinCode: "CHZ",
  },
  ANKR: {
    coinName: "ANKR",
    group: "A",
    safetyPoint: 3,
    coinCode: "ANKR",
  },
  API3: {
    coinName: "API3",
    group: "A",
    safetyPoint: 3,
    coinCode: "API3",
  },
  AR: {
    coinName: "Arweave",
    group: "A",
    safetyPoint: 3,
    coinCode: "AR",
  },
  LOOM: {
    coinName: "Loom Network",
    group: "A",
    safetyPoint: 2,
    coinCode: "LOOM",
  },
  LRC: {
    coinName: "Loopring",
    group: "A",
    safetyPoint: 2,
    coinCode: "LRC",
  },
  TOMO: {
    coinName: "TomoChain",
    group: "A",
    safetyPoint: 2,
    coinCode: "TOMO",
  },
  NEXO: {
    coinName: "Nexo",
    group: "A",
    safetyPoint: 2,
    coinCode: "NEXO",
  },
  COMP: {
    coinName: "Compound",
    group: "A",
    safetyPoint: 2,
    coinCode: "COMP",
  },
  BAND: {
    coinName: "Band Protocol",
    group: "A",
    safetyPoint: 2,
    coinCode: "BAND",
  },
  ALPHA: {
    coinName: "Alpha",
    group: "A",
    safetyPoint: 2,
    coinCode: "ALPHA",
  },
  SFP: {
    coinName: "SafePal Wallet",
    group: "A",
    safetyPoint: 2,
    coinCode: "SFP",
  },
  TWT: {
    coinName: "Trust Wallet Token",
    group: "A",
    safetyPoint: 2,
    coinCode: "TWT",
  },
  CTK: {
    coinName: "Certik",
    group: "A",
    safetyPoint: 2,
    coinCode: "CTK",
  },
  REEF: {
    coinName: "Reef",
    group: "A",
    safetyPoint: 2,
    coinCode: "REEF",
  },
  BTCST: {
    coinName: "Bitcoin Standard Hashrate Token",
    group: "A",
    safetyPoint: 2,
    coinCode: "BTCST",
  },
  OCEAN: {
    coinName: "Ocean Protocol",
    group: "A",
    safetyPoint: 2,
    coinCode: "OCEAN",
  },
  DODO: {
    coinName: "Dodo",
    group: "A",
    safetyPoint: 2,
    coinCode: "DODO",
  },
  COTI: {
    coinName: "Coti",
    group: "A",
    safetyPoint: 2,
    coinCode: "COTI",
  },
  AXS: {
    coinName: "Axie Infinity",
    group: "A",
    safetyPoint: 2,
    coinCode: "AXS",
  },
  KMD: {
    coinName: "Komodo",
    group: "A",
    safetyPoint: 1,
    coinCode: "KMD",
  },
  FIRO: {
    coinName: "Firo",
    group: "A",
    safetyPoint: 1,
    coinCode: "FIRO",
  },
  XVS: {
    coinName: "Venus",
    group: "A",
    safetyPoint: 1,
    coinCode: "XVS",
  },
  TRB: {
    coinName: "Tellor",
    group: "A",
    safetyPoint: 1,
    coinCode: "TRB",
  },
  FRONT: {
    coinName: "Frontier",
    group: "A",
    safetyPoint: 1,
    coinCode: "FRONT",
  },
  LIT: {
    coinName: "Litentry",
    group: "A",
    safetyPoint: 1,
    coinCode: "LIT",
  },
  PHA: {
    coinName: "Phala Network",
    group: "A",
    safetyPoint: 1,
    coinCode: "PHA",
  },
  CND: {
    coinName: "Cindicator",
    group: "A",
    safetyPoint: 0,
    coinCode: "CND",
  },
  NULS: {
    coinName: "Nuls",
    group: "A",
    safetyPoint: 1,
    coinCode: "NULS",
  },
};

export default { columns, readFileToData };
