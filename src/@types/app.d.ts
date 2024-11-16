interface LiquidityDataType {
	image: string;
	title: string;
	createdBy: string;
	createdByLogo: string;
	description: string;
	apr: number;
	fees: number;
	tvl: number;
	created: number;
}

interface VoteDataType {
	image: string;
	title: string;
	createdBy: string;
	createdByLogo: string;
	description: string;
	rewardEstimate: number;
	bribes: number;
	tvl: number;
	totalVotes: number;
	created: number;
}

interface HotCoinDataType {
	logo: string;
	name: string
	percentage: number;
}

interface CoinNotificationDataType {
	description: string;
	image1: string;
	image2: string;
}

interface LiquidityDetailDataType {
	logo: string;
	title: string;
	createdBy: string;
	createdByLogo: string;
	created: number;
	marketcap: number;
	fees: number;
	address: string;
	about: string;
	maxTotalSupply: number;
	circulatingSupply: number;
	volume: number;
	holders: number;
	liquidity: number;
	symbol: string;
	links: {
		twitter: string;
		discord: string;
		website: string;
		medium: string;
	}
}

interface DATEFIELDS {
	prefixAgo: string,
	prefixFromNow: string,
	suffixAgo: string,
	suffixFromNow: string,
	seconds: string,
	minute: string,
	minutes: string,
	hour: string,
	hours: string,
	day: string,
	days: string,
	month: string,
	months: string,
	year: string,
	years: string,
	wordSeparator: string,
	inPast?: string,
	numbers?: Array<number>
}

interface FarmDataType {
	pairs: string[];
	pairLogos: string[];
	apr: number;
	tvl: number;
	deposited: number;
	reward: number;
}

interface CoinDataType {
	logo: string;
	symbol: string;
	name: string;
}

interface HotCoinListDataType {
	logo: string;
	symbol: string;
}