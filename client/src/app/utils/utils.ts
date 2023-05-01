import moment from "moment";

export function transformArrayFromFlatToNested<T = unknown>(arr: T[], n: number) {
	const arrCopy = [...arr]
	const newArr = []

	while (arrCopy.length > 0) {
		const innerArr = []

		for (let i = arrCopy.length < n ? arrCopy.length : n;
		     i > 0;
		     i--) {
			innerArr.push(arrCopy.splice(0, 1)[0])
		}
		newArr.push(innerArr)
	}

	return newArr
}


export function transformIsoStringToNormalDate(isoString: string) {
	return moment(isoString).format('DD MMM YYYY')
}

export function getISOStringWithoutSomeTime(milliseconds: number) {
	const millisecondsForTimePoint = Date.now() - milliseconds
	const date = new Date(millisecondsForTimePoint)
	return date.toISOString()
}