import Web3 from 'web3';
//configure web3 with a provider from metamask
const web3=new Web3(window.web3.currentProvider);
export default web3;