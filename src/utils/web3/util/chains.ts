import address from '../json/address.json';

export const getChain = () => {
    switch (sessionStorage.getItem("chain_id")) {
        case "0x3":
            return address['0x3']
        case "0x4":
            return address['0x4']
        case "0x38":
            return address['0x38']
        default:
            return address['0x38']
    }
}