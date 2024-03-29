/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingDistributorInterface extends ethers.utils.Interface {
  functions: {
    "OHM()": FunctionFragment;
    "addRecipient(address,uint256)": FunctionFragment;
    "adjustments(uint256)": FunctionFragment;
    "distribute()": FunctionFragment;
    "epochLength()": FunctionFragment;
    "info(uint256)": FunctionFragment;
    "nextEpochBlock()": FunctionFragment;
    "nextRewardAt(uint256)": FunctionFragment;
    "nextRewardFor(address)": FunctionFragment;
    "policy()": FunctionFragment;
    "pullPolicy()": FunctionFragment;
    "pushPolicy(address)": FunctionFragment;
    "removeRecipient(uint256,address)": FunctionFragment;
    "renouncePolicy()": FunctionFragment;
    "setAdjustment(uint256,bool,uint256,uint256)": FunctionFragment;
    "treasury()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "info", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "nextEpochBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextRewardAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextRewardFor",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "policy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullPolicy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pushPolicy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeRecipient",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePolicy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdjustment",
    values: [BigNumberish, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;

  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextEpochBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextRewardAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextRewardFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "policy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushPolicy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class StakingDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingDistributorInterface;

  functions: {
    OHM(overrides?: CallOverrides): Promise<[string]>;

    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adjustments(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
      }
    >;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    info(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { rate: BigNumber; recipient: string }>;

    nextEpochBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRecipient(
      _index: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  addRecipient(
    _recipient: string,
    _rewardRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adjustments(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber] & {
      add: boolean;
      rate: BigNumber;
      target: BigNumber;
    }
  >;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epochLength(overrides?: CallOverrides): Promise<BigNumber>;

  info(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { rate: BigNumber; recipient: string }>;

  nextEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

  nextRewardAt(
    _rate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nextRewardFor(
    _recipient: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  policy(overrides?: CallOverrides): Promise<string>;

  pullPolicy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushPolicy(
    newPolicy_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRecipient(
    _index: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renouncePolicy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdjustment(
    _index: BigNumberish,
    _add: boolean,
    _rate: BigNumberish,
    _target: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    adjustments(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber] & {
        add: boolean;
        rate: BigNumber;
        target: BigNumber;
      }
    >;

    distribute(overrides?: CallOverrides): Promise<boolean>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    info(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { rate: BigNumber; recipient: string }>;

    nextEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<string>;

    pullPolicy(overrides?: CallOverrides): Promise<void>;

    pushPolicy(newPolicy_: string, overrides?: CallOverrides): Promise<void>;

    removeRecipient(
      _index: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renouncePolicy(overrides?: CallOverrides): Promise<void>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adjustments(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epochLength(overrides?: CallOverrides): Promise<BigNumber>;

    info(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    nextEpochBlock(overrides?: CallOverrides): Promise<BigNumber>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRecipient(
      _index: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addRecipient(
      _recipient: string,
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adjustments(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    info(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextEpochBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextRewardAt(
      _rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextRewardFor(
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushPolicy(
      newPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRecipient(
      _index: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renouncePolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdjustment(
      _index: BigNumberish,
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
