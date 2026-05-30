import PageHead from '@/components/PageHead';
import CollectionCard from '@/components/CollectionCard';
import { COLLECTIONS, COMING_SOON } from '@/lib/catalog';
import styles from './page.module.css';

export const metadata = { title: "Collections — Haven's Artistry" };

export default function CollectionsPage() {
	return (
		<>
			<PageHead eyebrow="Wander the Garden" title="Collections">
				Each collection is a little patch of the garden — tended slowly, made by hand, gathered here
				for you to explore.
			</PageHead>

			<section className="section" style={{ paddingTop: 0 }}>
				<div className="wrap">
					<div className={styles.collCards}>
						{COLLECTIONS.map((c) => (
							<CollectionCard key={c.slug} collection={c} variant="full" />
						))}
						<CollectionCard collection={COMING_SOON} variant="full" comingSoon />
					</div>
				</div>
			</section>
		</>
	);
}
