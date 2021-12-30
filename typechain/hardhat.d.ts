/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "Uni",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uni__factory>;
    getContractFactory(
      name: "BondStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondStakingHelper__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "DAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAI__factory>;
    getContractFactory(
      name: "IDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDAI__factory>;
    getContractFactory(
      name: "LibNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibNote__factory>;
    getContractFactory(
      name: "FRAX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FRAX__factory>;
    getContractFactory(
      name: "IFRAX",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFRAX__factory>;
    getContractFactory(
      name: "LibNote",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibNote__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "MockOlympusBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOlympusBondDepository__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Mintable__factory>;
    getContractFactory(
      name: "IOHMERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOHMERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "MockOlympusTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOlympusTreasury__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PriceTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceTest__factory>;
    getContractFactory(
      name: "IBond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBond__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "RedeemHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RedeemHelper__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SPACirculatingSupplyContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SPACirculatingSupplyContract__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SpartacusBondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SpartacusBondDepository__factory>;
    getContractFactory(
      name: "IBondingCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondingCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "SpartacusBondingCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SpartacusBondingCalculator__factory>;
    getContractFactory(
      name: "Divine",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Divine__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "ITWAPOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITWAPOracle__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SpartacusERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SpartacusERC20Token__factory>;
    getContractFactory(
      name: "TWAPOracleUpdater",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TWAPOracleUpdater__factory>;
    getContractFactory(
      name: "VaultOwned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultOwned__factory>;
    getContractFactory(
      name: "IDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDistributor__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IsOHM",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IsOHM__factory>;
    getContractFactory(
      name: "IWarmup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWarmup__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SpartacusStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SpartacusStaking__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Mintable__factory>;
    getContractFactory(
      name: "IOHMERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOHMERC20__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SpartacusTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SpartacusTreasury__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SPASale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SPASale__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC2612Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612Permit__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "SSpartacusERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SSpartacusERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPolicy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPolicy__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Policy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Policy__factory>;
    getContractFactory(
      name: "StakingDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingDistributor__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "StakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingHelper__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "StakingWarmup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingWarmup__factory>;

    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "Uni",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uni>;
    getContractAt(
      name: "BondStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondStakingHelper>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "DAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAI>;
    getContractAt(
      name: "IDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDAI>;
    getContractAt(
      name: "LibNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibNote>;
    getContractAt(
      name: "FRAX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FRAX>;
    getContractAt(
      name: "IFRAX",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFRAX>;
    getContractAt(
      name: "LibNote",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibNote>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "MockOlympusBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockOlympusBondDepository>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Mintable>;
    getContractAt(
      name: "IOHMERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOHMERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "MockOlympusTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockOlympusTreasury>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "PriceTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceTest>;
    getContractAt(
      name: "IBond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBond>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "RedeemHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RedeemHelper>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SPACirculatingSupplyContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SPACirculatingSupplyContract>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SpartacusBondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SpartacusBondDepository>;
    getContractAt(
      name: "IBondingCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondingCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "SpartacusBondingCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SpartacusBondingCalculator>;
    getContractAt(
      name: "Divine",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Divine>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "ITWAPOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITWAPOracle>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SpartacusERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SpartacusERC20Token>;
    getContractAt(
      name: "TWAPOracleUpdater",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TWAPOracleUpdater>;
    getContractAt(
      name: "VaultOwned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultOwned>;
    getContractAt(
      name: "IDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDistributor>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IsOHM",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IsOHM>;
    getContractAt(
      name: "IWarmup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWarmup>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SpartacusStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SpartacusStaking>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Mintable>;
    getContractAt(
      name: "IOHMERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOHMERC20>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SpartacusTreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SpartacusTreasury>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SPASale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SPASale>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC2612Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2612Permit>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "SSpartacusERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SSpartacusERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPolicy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPolicy>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Policy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Policy>;
    getContractAt(
      name: "StakingDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingDistributor>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "StakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingHelper>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "StakingWarmup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingWarmup>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
