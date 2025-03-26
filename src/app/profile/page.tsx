'use client';
import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';

export default function Profile() {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		const getDat = async () => {
			const response = await fetch('https://dummyjson.com/products');
			const json = await response.json();
			setProduct(json.products);
		};

		getDat();
	}, []);
	return (
		console.log('product :>> ', product),
		(
			<div className={styles.headingtext}>
				<div className='products-container'></div>
			</div>
		)
	);
}
