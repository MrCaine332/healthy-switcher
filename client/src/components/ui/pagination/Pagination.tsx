import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';
import Icons from "@components/ui/icons";

interface IPagination {
	pageCount: number
	pageRangeDisplayed?: number,
	onPageChange?: (selected: {selected: number}) => void,
	forcePage?: number | undefined
}

export const Pagination = ({
    pageCount,
	pageRangeDisplayed,
	onPageChange,
	forcePage
}: IPagination) => {
	return (
		<div className={styles.paginationWrap}>
			<ReactPaginate className={styles.pagination}
			               pageLinkClassName={'textNavItem ' + styles.paginationPageLink}
			               activeLinkClassName={styles.paginationActive}

			               previousLinkClassName={styles.paginationButtonLink}
			               nextLinkClassName={styles.paginationButtonLink}

			               previousClassName={styles.paginationButton + ' ' + styles.paginationPrev}
			               nextClassName={styles.paginationButton + ' ' + styles.paginationNext}
			               previousLabel={<Icons name={'arrow-left'} size={24} />}
			               nextLabel={<Icons name={'arrow-right'} size={24} />}

			               breakLinkClassName={styles.paginationPageLink}

			               pageCount={pageCount}
			               pageRangeDisplayed={pageRangeDisplayed}
			               onPageChange={onPageChange}
			               forcePage={forcePage}

			               renderOnZeroPageCount={null}
			/>
		</div>
	);
};