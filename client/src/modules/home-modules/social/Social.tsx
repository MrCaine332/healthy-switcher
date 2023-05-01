import React from 'react';
import styles from './Social.module.scss'
import {SectionTitle} from "@components/section-title";
import {SocialCard} from "@components/item-social";

import instagramPhoto1 from "@assets/images/instagram1.jpg"
import instagramPhoto2 from "@assets/images/instagram2.jpg"
import instagramPhoto3 from "@assets/images/instagram3.jpg"
import instagramPhoto4 from "@assets/images/instagram4.jpg"
import instagramPhoto5 from "@assets/images/instagram5.jpg"
import instagramPhoto6 from "@assets/images/instagram6.jpg"

export const Social = () => {
	return (
		<div className={styles.social}>
			<SectionTitle primaryTitle={"SOCIAL"}
			              secondaryTitle={"We In Social"} />
			<div className={styles.socialList}>
				<SocialCard title={"Twitter"} icon={"twitter"}>
					<div className={styles.post}>
						<p className={"textCaptionLarge " + styles.postHeader}>24 Jun at 16:20 pm</p>
						<p className={"textCaptionLarge " + styles.postBody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
						<p className={"textCaptionLarge "  + styles.postFooter}>@DennisFerguson</p>
					</div>
				</SocialCard>
				<SocialCard title={"Instagram"} icon={"instagram"}>
					<div className={styles.instagramPhotos}>
						<img src={instagramPhoto1} alt={""} />
						<img src={instagramPhoto2} alt={""} />
						<img src={instagramPhoto3} alt={""} />
						<img src={instagramPhoto4} alt={""} />
						<img src={instagramPhoto5} alt={""} />
						<img src={instagramPhoto6} alt={""} />
					</div>
				</SocialCard>
				<SocialCard title={"Facebook"} icon={"facebook"}>
					<div className={styles.post}>
						<p className={"textCaptionLarge " + styles.postHeader}>26 Jun at 16:20 pm</p>
						<p className={"textCaptionLarge " + styles.postBody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
						</p>
					</div>
				</SocialCard>
			</div>
		</div>
	);
};
