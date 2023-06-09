import React from 'react';

export type IconNames = 'clock' | 'phone' | 'location-arrow'
	| 'arrow-left' | 'arrow-right' | 'arrow-down-simple' | 'star' | 'star-half'
	| 'star-empty' | 'eye' | 'comment' | 'twitter' | 'facebook'
	| 'instagram' | 'search' | 'close' | 'plus' | 'minus'

interface IIcons {
	name?: IconNames
	size?: number | string
	color?: string
}

const Icons: React.FC<IIcons> = ({ name, size, color }) => {
	switch (name) {
		case "clock":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V7Z" fill={color}/>
				</svg>
			)
		case "phone":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_602_8451)">
						<path d="M21.3905 19.5804L19.4856 21.4853C19.4856 21.4853 14.5358 23.6066 7.46477 16.5356C0.393706 9.46451 2.51503 4.51476 2.51503 4.51476L4.41996 2.60983C5.28058 1.74921 6.70391 1.85036 7.43417 2.82404L9.25245 5.24841C9.84963 6.04465 9.77044 7.15884 9.06666 7.86262L7.46477 9.46451C7.46477 9.46451 7.46477 10.8787 10.2932 13.7071C13.1216 16.5356 14.5358 16.5356 14.5358 16.5356L16.1377 14.9337C16.8415 14.2299 17.9557 14.1507 18.7519 14.7479L21.1763 16.5662C22.15 17.2964 22.2511 18.7198 21.3905 19.5804Z" fill={color}/>
					</g>
					<defs>
						<clipPath id="clip0_602_8451">
							<rect width="24" height="24" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
		case "location-arrow":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M21.5223 5.74698C22.3809 3.68639 20.3136 1.61917 18.253 2.47775L4.0366 8.40127C1.25632 9.55972 1.72626 13.6345 4.69725 14.1297L9.13133 14.8687L9.87034 19.3028C10.3655 22.2738 14.4403 22.7437 15.5988 19.9634L21.5223 5.74698Z" fill={color}/>
				</svg>
			)
		case "arrow-left":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z" fill={color}/>
				</svg>
			)
		case "arrow-right":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z" fill={color}/>
				</svg>
			)
		case "star":
			return (
				<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask0_4_156" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
						<path fillRule="evenodd" clipRule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/>
					</mask>
					<g mask="url(#mask0_4_156)">
						<rect x="-3" y="-3" width="26" height="26" fill={color}/>
					</g>
				</svg>
			)
		case "star-half":
			return (
				<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask0_4_164" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
						<path fillRule="evenodd" clipRule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
					</mask>
					<g mask="url(#mask0_4_164)">
						<rect x="-3" y="-3" width="26" height="26" fill={color}/>
					</g>
				</svg>

			)
		case "star-empty":
			return (
				<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="mask0_4_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19">
						<path fillRule="evenodd" clipRule="evenodd" d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="white"/>
					</mask>
					<g mask="url(#mask0_4_170)">
						<rect x="-3" y="-3" width="26" height="26" fill={color}/>
					</g>
				</svg>
			)
		case "eye":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.0006 20C17.0271 20 20.4745 16.8417 22.3428 14.494C23.5187 13.0163 23.5187 10.9837 22.3428 9.506C20.4745 7.15826 17.0271 4 12.0006 4C6.97402 4 3.52661 7.15826 1.65833 9.506C0.482379 10.9837 0.482378 13.0163 1.65833 14.494C3.52661 16.8417 6.97402 20 12.0006 20ZM12.0005 16C14.2097 16 16.0005 14.2091 16.0005 12C16.0005 9.79086 14.2097 8 12.0005 8C9.7914 8 8.00054 9.79086 8.00054 12C8.00054 14.2091 9.7914 16 12.0005 16Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M10.0018 11.9153C10.0006 11.9434 10 11.9716 10 12C10 12.5072 10.1888 12.9703 10.5 13.3229C10.7284 13.5817 11.0228 13.781 11.3569 13.8943C11.5587 13.9628 11.775 14 12 14C13.1046 14 14 13.1046 14 12C14 11.775 13.9628 11.5587 13.8943 11.3569C13.781 11.0228 13.5817 10.7284 13.3229 10.5C12.9703 10.1888 12.5072 10 12 10C11.9716 10 11.9434 10.0006 11.9153 10.0018C11.9701 10.1577 12 10.3253 12 10.5C12 10.6308 11.9833 10.7577 11.9518 10.8786C11.8155 11.4028 11.4028 11.8155 10.8786 11.9518C10.7577 11.9833 10.6308 12 10.5 12C10.3253 12 10.1577 11.9701 10.0018 11.9153Z" fill={color}/>
				</svg>
			)
		case "comment":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M2.37546 5.66957C2.66565 3.98488 4.00472 2.74648 5.69477 2.48932C7.31411 2.24293 9.53559 2 12 2C14.4644 2 16.6859 2.24293 18.3052 2.48932C19.9953 2.74648 21.3344 3.98488 21.6245 5.66957C21.8268 6.84372 22 8.33525 22 10C22 11.6647 21.8268 13.1563 21.6245 14.3304C21.3344 16.0151 19.9953 17.2535 18.3052 17.5107C16.8238 17.7361 14.8384 17.9586 12.6241 17.9949L6.50873 21.6085C5.84211 22.0024 5 21.5219 5 20.7476V17.344C3.64656 16.8939 2.62456 15.7766 2.37546 14.3304C2.17321 13.1563 2 11.6647 2 10C2 8.33525 2.17321 6.84372 2.37546 5.66957ZM6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44771 9 6 8.55228 6 8ZM6 12C6 11.4477 6.44772 11 7 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H7C6.44772 13 6 12.5523 6 12Z" fill={color}/>
				</svg>
			)
		case "twitter":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.9997 7.5C21.4997 15 15.9997 21 8.9997 21C6.58779 21 4.17588 20.6768 2.28364 19.7706C1.85026 19.5631 2.01966 18.985 2.49911 18.9532C4.82919 18.7987 6.7574 18.2423 7.9997 17C2.5833 15.1945 1.649 8.4995 2.62199 5.00719C2.73623 4.59713 3.26936 4.59499 3.48425 4.96246C5.14573 7.80371 8.3049 9.39003 12.2643 9.02396C12.093 8.54804 11.9997 8.03492 11.9997 7.5C11.9997 5.01472 14.0144 3 16.4997 3C18.0179 3 19.3605 3.75182 20.1755 4.90346L21.8926 4.65815C22.3205 4.59703 22.6191 5.07087 22.3794 5.43047L20.9997 7.5Z" fill={color}/>
				</svg>
			)
		case "instagram":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM19 6C19 6.55228 18.5523 7 18 7C17.4477 7 17 6.55228 17 6C17 5.44772 17.4477 5 18 5C18.5523 5 19 5.44772 19 6Z" fill={color}/>
				</svg>
			)
		case "facebook":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 21.5C12 21.7761 12.2241 22.0013 12.4999 21.9877C17.7905 21.7272 22 17.3552 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.6251 5.13989 20.5168 9.40433 21.6598C9.70966 21.7417 10 21.5044 10 21.1883V14H9C8.44771 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H10V10C10 8.34315 11.3431 7 13 7H14C14.5523 7 15 7.44772 15 8C15 8.55229 14.5523 9 14 9H13C12.4477 9 12 9.44772 12 10V12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H12V21.5Z" fill={color}/>
				</svg>
			)
		case "search":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill={color}/>
				</svg>
			)
		case "close":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill={color}/>
				</svg>
			)
		case "arrow-down-simple":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill={color}/>
				</svg>
			)
		case "plus":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z" fill={color}/>
				</svg>
			)
		case "minus":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z" fill={color}/>
				</svg>
			)

		default:
			return null
	}
};

export default Icons;