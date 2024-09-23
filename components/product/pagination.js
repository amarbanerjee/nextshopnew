import classes from './pagination.module.css';

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10
   
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   
     return (
      <div className={classes.container}>
        <ul className={classes.pagination}>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? classes.pageItemActive : classes.pageItem
              }
            >
              <a className={classes.pageLink} onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
   };
   
   export default Pagination;