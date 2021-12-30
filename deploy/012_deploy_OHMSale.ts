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

  const dai_address = '0xDEe4165ef9580a45F1540384f94C3eFBa7c7589A'
  const ohm_adress = '0xe1b2C76564D5591BF0Ed530B59cD7339906049F4'
  const dev_address = '0x18fa5D871E1790091406d84b785866909426baf6'

  await deploy('OHMSale', {
    from: deployer,
    args: [
      dai_address,
      ohm_adress,
      dev_address,
      500,
      0
    ],
    log: true,
    deterministicDeployment: false,
  });
};

export default func;
func.tags = ['OHMSale'];