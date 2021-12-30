/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DAI, DAIInterface } from "../DAI";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "adjustDailyDAILimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "daiMintedToday",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dailyDAILimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastMintRestart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "pull",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516112c33803806112c38339818101604052602081101561003357600080fd5b5051336000908152602081815260409182902060019081905582518084018452600e81526d2230b49029ba30b13632b1b7b4b760911b9083015282518084018452908152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f0b1461ddc0c1d5ded79a1db0f74dae949050a7c0b28728c724b24958c27a328b818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101939093523060a0808501919091528251808503909101815260c0909301909152815191012060085569021e19e0c9bab24000006002556111888061013b6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c8063798247ae116100f9578063a9059cbb11610097578063bf353dbb11610071578063bf353dbb1461053c578063dd62ed3e14610562578063ef1277e014610590578063f2d5d56b14610598576101a9565b8063a9059cbb146104ae578063b753a98c146104da578063bb35783b14610506576101a9565b806392bc513c116100d357806392bc513c1461042e57806395d89b41146104545780639c52a7f11461045c5780639dc29fac14610482576101a9565b8063798247ae146103885780637ecebe00146103ae5780638fcbaf0c146103d4576101a9565b806333b3cfc6116101665780635422224e116101405780635422224e1461033457806354fd4d501461035a57806365fae35e1461033457806370a0823114610362576101a9565b806333b3cfc6146102e15780633644e5151461030057806340c10f1914610308576101a9565b806306fdde03146101ae578063095ea7b31461022b57806318160ddd1461026b57806323b872dd1461028557806330adf81f146102bb578063313ce567146102c3575b600080fd5b6101b66105c4565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102576004803603604081101561024157600080fd5b506001600160a01b0381351690602001356105ee565b604080519115158252519081900360200190f35b610273610603565b60408051918252519081900360200190f35b6102576004803603606081101561029b57600080fd5b506001600160a01b03813581169160208101359091169060400135610609565b6102736107e3565b6102cb610807565b6040805160ff9092168252519081900360200190f35b6102fe600480360360208110156102f757600080fd5b503561080c565b005b61027361086a565b6102fe6004803603604081101561031e57600080fd5b506001600160a01b038135169060200135610870565b6102fe6004803603602081101561034a57600080fd5b50356001600160a01b0316610a25565b6101b6610a9b565b6102736004803603602081101561037857600080fd5b50356001600160a01b0316610ab8565b6102736004803603602081101561039e57600080fd5b50356001600160a01b0316610aca565b610273600480360360208110156103c457600080fd5b50356001600160a01b0316610adc565b6102fe60048036036101008110156103eb57600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608081013515159060ff60a0820135169060c08101359060e00135610aee565b6102736004803603602081101561044457600080fd5b50356001600160a01b0316610de8565b6101b6610dfa565b6102fe6004803603602081101561047257600080fd5b50356001600160a01b0316610e19565b6102fe6004803603604081101561049857600080fd5b506001600160a01b038135169060200135610e8c565b610257600480360360408110156104c457600080fd5b506001600160a01b038135169060200135611044565b6102fe600480360360408110156104f057600080fd5b506001600160a01b038135169060200135611051565b6102fe6004803603606081101561051c57600080fd5b506001600160a01b03813581169160208101359091169060400135611061565b6102736004803603602081101561055257600080fd5b50356001600160a01b0316611072565b6102736004803603604081101561057857600080fd5b506001600160a01b0381358116916020013516611084565b610273611090565b6102fe600480360360408110156105ae57600080fd5b506001600160a01b038135169060200135611096565b6040518060400160405280600e81526020016d2230b49029ba30b13632b1b7b4b760911b81525081565b60006105fa83836110a1565b90505b92915050565b60015481565b6001600160a01b038316600090815260036020526040812054821115610671576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b038416331480159061069557506000196106928533611107565b14155b1561073057816106a58533611107565b10156106f8576040805162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015290519081900360640190fd5b61070b6107058533611107565b83611132565b6001600160a01b03851660009081526004602090815260408083203384529091529020555b6001600160a01b0384166000908152600360205260409020546107539083611132565b6001600160a01b0380861660009081526003602052604080822093909355908516815220546107829083611142565b6001600160a01b0380851660008181526003602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b601281565b33600090815260208190526040902054600114610865576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b600255565b60085481565b3360009081526020819052604090205461099457600254336000908152600760205260409020546108a2908390611142565b1115806108d9575033600090815260066020526040902054611964906108c9904390611132565b101580156108d957506002548111155b610921576040805162461bcd60e51b815260206004820152601460248201527313dd995c8819185a5b1e4811105248131a5b5a5d60621b604482015290519081900360640190fd5b3360009081526006602052604090205461196490610940904390611132565b106109695733600090815260076020908152604080832084905560069091529020439055610994565b336000908152600760205260409020546109839082611142565b336000908152600760205260409020555b6001600160a01b0382166000908152600360205260409020546109b79082611142565b6001600160a01b0383166000908152600360205260409020556001546109dd9082611142565b6001556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b33600090815260208190526040902054600114610a7e576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040902060019055565b604051806040016040528060018152602001603160f81b81525081565b60036020526000908152604090205481565b60066020526000908152604090205481565b60056020526000908152604090205481565b600854604080517fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb6020808301919091526001600160a01b03808d16838501819052908c166060840152608083018b905260a083018a905288151560c0808501919091528451808503909101815260e08401855280519083012061190160f01b61010085015261010284019590955261012280840195909552835180840390950185526101429092019092528251929091019190912090610bee576040805162461bcd60e51b815260206004820152601560248201527404461692f696e76616c69642d616464726573732d3605c1b604482015290519081900360640190fd5b60018185858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610c48573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614610cac576040805162461bcd60e51b815260206004820152601260248201527111185a4bda5b9d985b1a590b5c195c9b5a5d60721b604482015290519081900360640190fd5b851580610cb95750854211155b610cff576040805162461bcd60e51b815260206004820152601260248201527111185a4bdc195c9b5a5d0b595e1c1a5c995960721b604482015290519081900360640190fd5b6001600160a01b03891660009081526005602052604090208054600181019091558714610d67576040805162461bcd60e51b81526020600482015260116024820152704461692f696e76616c69642d6e6f6e636560781b604482015290519081900360640190fd5b600085610d75576000610d79565b6000195b6001600160a01b03808c166000818152600460209081526040808320948f168084529482529182902085905581518581529151949550929391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92592918290030190a350505050505050505050565b60076020526000908152604090205481565b6040518060400160405280600381526020016244414960e81b81525081565b33600090815260208190526040902054600114610e72576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b0316600090815260208190526040812055565b6001600160a01b038216600090815260036020526040902054811115610ef4576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b0382163314801590610f185750600019610f158333611107565b14155b15610fb35780610f288333611107565b1015610f7b576040805162461bcd60e51b815260206004820152601a60248201527f4461692f696e73756666696369656e742d616c6c6f77616e6365000000000000604482015290519081900360640190fd5b610f8e610f888333611107565b82611132565b6001600160a01b03831660009081526004602090815260408083203384529091529020555b6001600160a01b038216600090815260036020526040902054610fd69082611132565b6001600160a01b038316600090815260036020526040902055600154610ffc9082611132565b6001556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006105fa338484610609565b61105c338383610609565b505050565b61106c838383610609565b50505050565b60006020819052908152604090205481565b60006105fa8383611107565b60025481565b61105c823383610609565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b808203828111156105fd57600080fd5b808201828110156105fd57600080fdfea264697066735822122053d653aae19459ab15a06cb6787a67840f87338a203b39be694a6e3344c8d00664736f6c63430007050033";

export class DAI__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAI> {
    return super.deploy(chainId_, overrides || {}) as Promise<DAI>;
  }
  getDeployTransaction(
    chainId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(chainId_, overrides || {});
  }
  attach(address: string): DAI {
    return super.attach(address) as DAI;
  }
  connect(signer: Signer): DAI__factory {
    return super.connect(signer) as DAI__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAIInterface {
    return new utils.Interface(_abi) as DAIInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DAI {
    return new Contract(address, _abi, signerOrProvider) as DAI;
  }
}