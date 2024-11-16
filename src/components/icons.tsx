import React from 'react'

interface IconProps {
	className?: string
	fill?: string
	size?: number
	marginLeft?: number
	margin?: number
	icon: string
}
export const Icon = ({className, fill, size, icon, marginLeft, margin}: IconProps) => (
	<div className={className} style={{color: fill, width: size || 16, height: size || 16, marginLeft: marginLeft || 0, marginRight: margin || 0, lineHeight: 1}}>
		{icons[icon] as any}
	</div>
)

const icons = {
	Search: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="100%" width="100%">
			<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
		</svg>
	),
	DownArrow: (
		<svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="100%" width="100%">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"></path>
		</svg>
	),
	UpArrow: (
		<svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="100%" width="100%">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"></path>
		</svg>
	),
	UpFillArrow: (
		<svg width="100%" height="100%" viewBox="0 0 10 10" fill="none">
			<path d="M5 0.5L10 9.5L0 9.5L5 0.5Z" fill="currentColor"/>
			<path d="M5 0.5L10 9.5L0 9.5L5 0.5Z" fill="currentColor"/>
		</svg>

	),
	DownFillArrow: (
		<svg width="100%" height="100%" viewBox="0 0 10 10" fill="none">
			<path d="M5 9.62573L-1.66869e-07 0.625733L10 0.625733L5 9.62573Z" fill="currentColor"/>
		</svg>
	),
	Plus: (
		<svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="100%" width="100%">
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		</svg>
	),
	Close: (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%">
			<path fill="none" d="M0 0h24v24H0V0z"></path>
			<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
		</svg>
	)
} as {[key: string]: React.SVGProps<SVGSVGElement>}

export default Icon