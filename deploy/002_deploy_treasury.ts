import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
  ░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░██╗██╗███╗░░██╗░██████╗░
  ░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░██║██║████╗░██║██╔════╝░
  ░╚██╗████╗██╔╝███████║██████╔╝██╔██╗██║██║██╔██╗██║██║░░██╗░
  ░░████╔═████║░██╔══██║██╔══██╗██║╚████║██║██║╚████║██║░░╚██╗
  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚███║██║██║░╚███║╚██████╔╝
  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░╚══╝░╚═════╝░
  Check all variables below before execute the deployment script
  */


  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const ohm_adress = '0xe1b2C76564D5591BF0Ed530B59cD7339906049F4'
  const dai_address = '0xDEe4165ef9580a45F1540384f94C3eFBa7c7589A'
  const dai_ohm_address = '0x67E8E97104Ad7B3403BAbDEc508e0A14E5614dF5'

  await deploy('OlympusTreasury', {
    from: deployer,
    args: [
      ohm_adress,
      dai_address,
      dai_address,
      dai_ohm_address,
      0
    ],
    log: true,
    deterministicDeployment: false,
  });
};

export default func;
func.tags = ['OlympusTreasury'];