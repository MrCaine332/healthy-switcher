export type Dish = {
	id: number
	title: string
	servedWith: string
	composition: string
	basePrice: number
	categoryId: number
	imageLink: string | null
	votesAverage: number | null
	votesTotal: number
}