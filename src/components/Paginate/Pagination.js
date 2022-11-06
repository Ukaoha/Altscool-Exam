import React , {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./Paginate.css";
import Helmet from "react-helmet";
const Pagination = (props) => {

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
			</div>

			<div className="list-item">
        <div className="flex flex-col justify-between items-center w-full h-full px-2 2xl:px-16">
          {repos.map((repos) => (
            <div
              className="bg-[#1b1b1b] block md:flex md:p-6 p-4 m-4 items-center justify-between md:w-[90%] w-[95%] rounded-lg shadow-md"
              key={repos.id}
            >
              <h2 className="text-xl font-bold">
                NAME: {repos.name}
                <br />
                <div className="block">REPO &nbsp; ID: {repos.id}</div>
              </h2>
              <div className="md:mt-6 mt-2 flex justify-center items-center">
                <Link rel="canonical" to={`/repo/${repos.id}`} state={repos}>
                  <button className="text-[#1b1b1b] hover:bg-[#c0efff] bg-white font-bold py-2 px-12 rounded-xl">
                    View Repo
                  </button>
                </Link>
              </div>
            </div>
          ))}
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
        // containerClassName="flex justify-center items-center py-5 text-xl"
        // pageClassName="px-2"
        // pageLinkClassName="text-[#fff] hover:text-[#c0efff]"
        // previousClassName="px-2"
        // previousLinkClassName="text-[#fff] hover:text-[#c0efff]"
        // nextClassName="px-2"
        // nextLinkClassName="text-[#fff] hover:text-[#c0efff]"
        // breakClassName="px-2"
        // breakLinkClassName="text-[#fff] hover:text-[#c0efff]"
        // activeClassName="text-[#c0efff]"
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
