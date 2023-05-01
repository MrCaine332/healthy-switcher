export type Recipe = {
	id: number
	recipeTitle: string
	publishedAt: string
	author: string
	badge: string
	viewsNum: number
	commentsNum: number
	style: 'Primary' | 'Secondary' | 'Image'
	imageLink: string | null
}