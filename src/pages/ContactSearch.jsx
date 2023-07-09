import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button } from 'react-bootstrap';
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import PhoneIcon from '@mui/icons-material/Phone';
import Checkbox from '@mui/material/Checkbox';
import './contactsearch.css';
import Side from '../components/Side';

function ContactSearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/contacts'); // Replace 'API_URL' with the actual API endpoint
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardSelection = (cardId, contactName) => {
    if (selectedContacts.includes(cardId)) {
      setSelectedContacts(selectedContacts.filter(id => id !== cardId));
    } else {
      setSelectedContacts([...selectedContacts, cardId]);
    }
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCard(null);

    if (!selectAll) {
      const selectedIds = records.map((d) => d.id);
      setSelectedContacts(selectedIds);
      setSelectedCard(selectedIds.length > 0 ? selectedIds[selectedIds.length - 1] : null);
    } else {
      setSelectedContacts([]);
    }
  };

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const showSelectedContacts = () => {
    if (selectedContacts.length > 0) {
      const selectedNames = selectedContacts.map(id => records.find(contact => contact.id === id)?.name).join(", ");
      alert(`Selected contacts: ${selectedNames}`);
    } else {
      alert("No contacts selected.");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          {/* <Side> component on the left */}
          <Side />
        </div>
        <div className="col-9">
          {/* Content in Bootstrap table */}
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>
                  <Checkbox
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>Select All</th>
              </tr>
              {records.map((d, i) => (
                <tr key={d.id}>
                  <td>
                    <Checkbox
                      checked={selectedCard === d.id || (selectAll && selectedCard !== null)}
                      onChange={() => handleCardSelection(d.id, d.name)}
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'flex-start'  }}>
                      <b><span style={{ color: '#2648f7' }}>{d.name} &nbsp; <FaLinkedin style={{ color: 'blue' }} /></span></b>
                    </div>
                    <div style={{ marginRight: "20px" }}>
                      <FaEnvelope style={{ marginLeft: '1rem' }} />
                      <span className="text-muted font-weight-light" style={{ marginLeft: '1rem', marginRight: '10px' }}>
                        ******@gmail.com
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <button className="button" color="primary" onClick={showSelectedContacts}>
                        <FaEnvelope style={{ marginRight: '1.5rem' }} />
                        Find Email
                      </button>
                    </div>
                    <div className="text-muted" style={{ display: 'flex', justifyContent: 'flex-start' }}>{d.profession}</div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'flex-start' , paddingTop:'20px' }}>
                        <FaMapMarkerAlt className="text-muted" />
                        <span className="text-muted">{d.location}</span>
                      </div>
                      <div style={{ marginRight: "20px" }}>
                        <PhoneIcon style={{ marginLeft: '1rem' }} />
                        <span className="text-muted font-weight-light">+***-***-****</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="button" color="primary">
                          <PhoneIcon style={{ marginRight: '0.5rem' }} />
                          Request Mobile
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '1rem' }}>
            <Button variant="primary" onClick={showSelectedContacts}>
              Show Selected Contacts
            </Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row">
          <div className="col-12">
            <ul className="pagination">
              <li className="page-item">
                <a href="#" className="page-link" onClick={prePage}>
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`}key={i}>
                  <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactSearch;
