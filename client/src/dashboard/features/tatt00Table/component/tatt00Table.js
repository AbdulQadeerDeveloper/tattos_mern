import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import handleCheckClick from './handleCheckClick';
import handleDeleteTattoos from './handleDeleteTattoos';
import handleCheckApprovedClick from './approvedClick';
import handleCheckRejectClick from './rejectClick'
import { fetchTattoos } from '../reducers/action';
import Pagination from './pagination';
import { IoClose } from "react-icons/io5";
import BACKEND_URL_APPLICATION from "../../../../utils/index";


function TattooTable(props) {

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTattoos, setFilteredTattoos] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 10;



  useEffect(() => {
    dispatch(fetchTattoos());
  }, [dispatch]);

  const tattoos = useSelector((state) => state.tattooReducer1.tattoos);
 


  const [data, setData] = useState(tattoos);

  // Filter tattoos based on the pagination

  const totalPages = Math.ceil(tattoos.length / pageSize);
  const currentTattoos = tattoos.slice((activePage - 1) * pageSize, activePage * pageSize);




  return (
    <React.Fragment>


      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th className='text-center'>Sn.no</th>
                <th className='text-center'>Tattoos</th>
                <th className='text-left'>Title</th>
                <th className='text-center'>Placement</th>
                <th className='text-center'>Category</th>
                <th className='text-center'>Status</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentTattoos?.map((tattoo, index) => (
                <tr key={tattoo._id || index}>
                  <td className='text-center align-content-center'>
                    {((activePage - 1) * pageSize) + index + 1}
                  </td>
                  <td className='text-center'>
                    <img src={`${BACKEND_URL_APPLICATION}/${tattoo?.tattooImage}`} alt={tattoo?.tattoosTitle} style={{ width: '70px', height: '70px' }} />
                  </td>
                  <td style={{ fontSize: "15px" }} className='align-content-center'>{tattoo.tattoosTitle}</td>
                  <td className='text-center align-content-center'>{tattoo.categories?.name}</td>
                  <td className='text-center align-content-center'>{tattoo.placement?.name}</td>
                  <td className='text-center align-content-center'>
                    {tattoo.status}
                  </td>
                  <td className='text-center align-content-center'>
                    <Link to={`/tattoos-update/${tattoo._id}`}>
                      <i className="fa fa-edit" style={{ marginRight: '10px' }}></i>
                    </Link>
                    <Link onClick={() => handleDeleteTattoos(tattoo._id, data, setData)}>
                      <i className="fa fa-trash" style={{ marginRight: '10px' }}></i>
                    </Link>
                    {tattoo.status === 'Pending' && (
                      <Link onClick={() => handleCheckClick(tattoo._id)}>
                        <i className="fa fa-check"></i>
                      </Link>
                    )}
                    {tattoo.status === 'Approved' ? (
                      <span onClick={() => handleCheckApprovedClick(tattoo._id)}><IoClose style={{fontSize:"28px", color:"red"}} /></span>
                    ) : null}
                    {tattoo.status === 'Rejected' && (
                      <i className="fa fa-check" onClick={() => handleCheckRejectClick(tattoo._id)}></i>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalPages={totalPages} activePage={activePage} onChangePage={setActivePage} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TattooTable;
