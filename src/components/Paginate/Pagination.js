import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Paginate.css";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";


const Pagination = (props) => {
  let {username} = useParams();

	const { data } = props;
	const [repos, setRepos] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 5  ;
  
	useEffect(() => {
	  const endOffset = itemOffset + itemsPerPage;
	  setRepos(data.slice(itemOffset, endOffset));
	  setPageCount(Math.ceil(data.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, data]);
  
	const handlePageClick = (event) => {
	  const newOffset = (event.selected * itemsPerPage) % data.length;
	  setItemOffset(newOffset);
	};
  
	return (  
		<>
		<Helmet>
        <title>List of Repos</title>
        <meta
          name="description"
          content="List of repos with Pagination"
        />
      </Helmet>

     

	  <div className='list-users'>
			<div className='info'>
				<h2>Repositories</h2>
				<p>Page</p>
			</div>
		

			<div >
        <div className="list-item">
          {repos.map((repos) => (
            <div
            className="repo-name"
              key={repos.id}
            >
              <h2>
                NAME: {repos.name}
                <br />
                <div className="block">REPO &nbsp; ID: {repos.id}</div>
              </h2>
              <div  className="repo-bottom">
                <Link rel="canonical" to={`/repo/${username}${repos.id}`} state={repos}>

                  <button >
                    View Repo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div id='pagination-wrapper'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        pageClassName={'item Pagination-page'}
        pageLinkClassName="pagelink"
        previousClassName="iteam previous"
        previousLinkClassName={'previous-link'}
        nextClassName={'item next'}
        nextLinkClassName={"nex-link"}
        breakClassName={"item break-me"}
        breakLinkClassName={"breaklink"}
        activeClassName={"item active"}

      />
      </div>
    </>


		
  
	  
	)

}
 
export default Pagination;
