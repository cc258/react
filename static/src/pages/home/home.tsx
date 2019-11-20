import React from 'react'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { HomeProps } from './index.d'

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch()
	const props = useSelector((state: any) => state.home)
	const { formatMessage: f } = useIntl()

	return (
		<div className="pages home" id="home">
			<h1>{f({ id: 'simple' })}123</h1>
			<h1>{JSON.stringify(props, null, 4)}</h1>
			<h1>In the end, </h1>
			<h2>everything will have a happy ending. </h2>
			<h3>If it's not happy, </h3>
			<h4>then it's not the end.</h4>
		</div>
	)
}

export default Home
