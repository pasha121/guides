const ballotAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"sendRemainingGasTo","type":"address"}],"outputs":[]},{"name":"activate","inputs":[],"outputs":[]},{"name":"vote","inputs":[{"name":"sendRemainingGasTo","type":"address"},{"name":"accept","type":"bool"}],"outputs":[]}],"data":[{"key":1,"name":"_vote","type":"address"},{"key":2,"name":"_managerPublicKey","type":"uint256"},{"key":3,"name":"_owner","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_vote","type":"address"},{"name":"_managerPublicKey","type":"uint256"},{"name":"_owner","type":"address"},{"name":"_activated","type":"bool"},{"name":"_used","type":"bool"}]} as const
const voteAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"managerPublicKey","type":"uint256"},{"name":"sendRemainingGasTo","type":"address"}],"outputs":[]},{"name":"deployBallot","inputs":[{"name":"owner","type":"address"},{"name":"sendRemainingGasTo","type":"address"}],"outputs":[]},{"name":"onBallotUsed","inputs":[{"name":"owner","type":"address"},{"name":"sendRemainingGasTo","type":"address"},{"name":"accept","type":"bool"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"accepted","type":"uint32"},{"name":"rejected","type":"uint32"}]}],"data":[{"key":1,"name":"_nonce","type":"uint16"},{"key":2,"name":"_ballotCode","type":"cell"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint16"},{"name":"_ballotCode","type":"cell"},{"name":"_managerPublicKey","type":"uint256"},{"name":"_acceptedCount","type":"uint32"},{"name":"_rejectedCount","type":"uint32"}]} as const

export const factorySource = {
    Ballot: ballotAbi,
    Vote: voteAbi
} as const

export type FactorySource = typeof factorySource
export type BallotAbi = typeof ballotAbi
export type VoteAbi = typeof voteAbi
