/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SPACirculatingSupplyContract,
  SPACirculatingSupplyContractInterface,
} from "../SPACirculatingSupplyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "OHM",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OHMCirculatingSupply",
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
    name: "getNonCirculatingOHM",
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
        name: "_ohm",
        type: "address",
      },
    ],
    name: "initialize",
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
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nonCirculatingOHMAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_nonCirculatingAddresses",
        type: "address[]",
      },
    ],
    name: "setNonCirculatingOHMAddresses",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107703803806107708339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b0390921691909117905561070d806100636000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c8063a0b15ebf11610066578063a0b15ebf14610161578063a6c41fec14610169578063c4d66de814610171578063f00f848b14610197578063f2fde38b146101b457610092565b80626883ba146100975780632e1455621461011b578063392e53cd146101355780638da5cb5b1461013d575b600080fd5b610107600480360360208110156100ad57600080fd5b8101906020810181356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460208302840111640100000000831117156100fc57600080fd5b5090925090506101da565b604080519115158252519081900360200190f35b610123610248565b60408051918252519081900360200190f35b6101076102e2565b6101456102eb565b604080516001600160a01b039092168252519081900360200190f35b6101236102fa565b6101456103cf565b6101076004803603602081101561018757600080fd5b50356001600160a01b03166103e3565b610145600480360360208110156101ad57600080fd5b5035610480565b610107600480360360208110156101ca57600080fd5b50356001600160a01b03166104aa565b6001546000906001600160a01b03163314610232576040805162461bcd60e51b815260206004820152601360248201527229b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b61023e6002848461065f565b5060019392505050565b600080600060019054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029957600080fd5b505afa1580156102ad573d6000803e3d6000fd5b505050506040513d60208110156102c357600080fd5b5051905060006102db6102d46102fa565b8390610525565b9250505090565b60005460ff1681565b6001546001600160a01b031681565b60008060005b6002548110156103c957600054600280546103b59261010090046001600160a01b0316916370a08231918590811061033457fe5b60009182526020918290200154604080516001600160e01b031960e086901b1681526001600160a01b0390921660048301525160248083019392829003018186803b15801561038257600080fd5b505afa158015610396573d6000803e3d6000fd5b505050506040513d60208110156103ac57600080fd5b5051839061056e565b91506103c281600161056e565b9050610300565b50905090565b60005461010090046001600160a01b031681565b6001546000906001600160a01b0316331461043b576040805162461bcd60e51b815260206004820152601360248201527231b0b63632b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b60005460ff161561044b57600080fd5b506000805460ff196001600160a01b03841661010002610100600160a81b031990921691909117166001908117909155919050565b6002818154811061049057600080fd5b6000918252602090912001546001600160a01b0316905081565b6001546000906001600160a01b03163314610502576040805162461bcd60e51b815260206004820152601360248201527229b2b73232b91034b9903737ba1037bbb732b960691b604482015290519081900360640190fd5b50600180546001600160a01b0383166001600160a01b0319909116178155919050565b600061056783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506105c8565b9392505050565b600082820183811015610567576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081848411156106575760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561061c578181015183820152602001610604565b50505050905090810190601f1680156106495780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b8280548282559060005260206000209081019282156106b2579160200282015b828111156106b25781546001600160a01b0319166001600160a01b0384351617825560209092019160019091019061067f565b506106be9291506106c2565b5090565b5b808211156106be57600081556001016106c356fea2646970667358221220ae8ba49204f15b274b8e5ae52b5db950a2b3adb6c69c345608b37731242ebf3f64736f6c63430007050033";

export class SPACirculatingSupplyContract__factory extends ContractFactory {
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
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SPACirculatingSupplyContract> {
    return super.deploy(
      _owner,
      overrides || {}
    ) as Promise<SPACirculatingSupplyContract>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): SPACirculatingSupplyContract {
    return super.attach(address) as SPACirculatingSupplyContract;
  }
  connect(signer: Signer): SPACirculatingSupplyContract__factory {
    return super.connect(signer) as SPACirculatingSupplyContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SPACirculatingSupplyContractInterface {
    return new utils.Interface(_abi) as SPACirculatingSupplyContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SPACirculatingSupplyContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SPACirculatingSupplyContract;
  }
}
