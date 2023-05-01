import styles from './ChefCard.module.scss'

interface IChefCard {
	avatar: any
	name: string
	role: string
	images: any[]
}

export const ChefCard = ({ avatar, name, role, images }: IChefCard) => {
	return (
		<div className={styles.chefCard}>
			<div className={styles.chefInfo}>
				<div className={styles.chefAvatar}>
					<img src={avatar} alt=""/>
				</div>
				<div className={styles.chefDetails}>
					<h5>{ name }</h5>
					<p className={"textCaptionSmall"}>{ role }</p>
				</div>
			</div>
			<div className={styles.chefWorks}>
				<div className={styles.workBig}>
					<img src={images[0]} alt=""/>
				</div>
				<div className={styles.workSmall}>
					<img src={images[1]} alt=""/>
				</div>
				<div className={styles.workSmall}>
					<img src={images[2]} alt=""/>
				</div>
			</div>

		</div>
	);
};