import Image from 'next/image';

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<h1 className='text-5xl'> Site under Construction </h1>

			<div className='img-container'>
				<Image
					src='/img/construction.svg'
					alt='hero animation'
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}
