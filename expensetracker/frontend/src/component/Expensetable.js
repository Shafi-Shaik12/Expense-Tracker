
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button, Table, Spinner, Alert } from 'react-bootstrap';
// import Summaryinsights from './SummaryInsights';


// const Expensetable = () => {
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [expenses, setExpenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [editingExpense, setEditingExpense] = useState(null);
//   const [searchCategory, setSearchCategory] = useState('');

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const fetchExpenses = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3000/api/expenses/expensivetable');
//       setExpenses(response.data);
//     } catch (error) {
//       setError('Error fetching expenses');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchExpensesByCategory = async () => {
//     setLoading(true);
//     try {
//       if (searchCategory.trim() === '') {
//         // If searchCategory is empty, fetch all expenses
//         await fetchExpenses();
//       } else {
//         const response = await axios.get(`http://localhost:3000/api/expenses/category?category=${searchCategory}`);
//         setExpenses(response.data);
//       }
//     } catch (error) {
//       setError('Error fetching expenses by category');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = { date, amount, category, description };

//     try {
//       if (editingExpense) {
//         await axios.put(`http://localhost:3000/api/expenses/expensivetable/${editingExpense._id}`, data);
//         setEditingExpense(null);
//       } else {
//         await axios.post('http://localhost:3000/api/expenses/expensivetable', data);
//       }
//       fetchExpenses();
//       setDate('');
//       setAmount('');
//       setCategory('');
//       setDescription('');
//     } catch (error) {
//       setError('Error saving expense');
//     }
//   };

//   const handleDelete = async (expenseId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/expenses/expensivetable/${expenseId}`);
//       setExpenses(expenses.filter(expense => expense._id !== expenseId));
//     } catch (error) {
//       setError('Error deleting expense');
//     }
//   };

//   const handleEdit = (expense) => {
//     setDate(expense.date);
//     setAmount(expense.amount);
//     setCategory(expense.category);
//     setDescription(expense.description);
//     setEditingExpense(expense);
//   };

//   const handleSearchCategoryChange = (e) => {
//     setSearchCategory(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchExpensesByCategory();
//   };

//   return (
//     <Container>
   
      
//       <Row className="my-4">
//         <Col>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formDate">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formAmount">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formCategory">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="formDescription">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               {editingExpense ? 'Update Expense' : 'Add Expense'}
//             </Button>
//             {editingExpense && (
//               <Button variant="secondary" onClick={() => setEditingExpense(null)}>
//                 Cancel
//               </Button>
//             )}
//           </Form>
//         </Col>
//       </Row>

//       <Row className="my-4">
//         <Col>
//           <Form onSubmit={handleSearch}>
//             <Form.Group controlId="formSearchCategory">
//               <Form.Label>Search by Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={searchCategory}
//                 onChange={handleSearchCategoryChange}
//                 placeholder="Enter category"
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">Search</Button>
//           </Form>
//         </Col>
//       </Row>

//       {loading ? (
//         <Row>
//           <Col>
//             <Spinner animation="border" />
//           </Col>
//         </Row>
//       ) : error ? (
//         <Row>
//           <Col>
//             <Alert variant="danger">{error}</Alert>
//           </Col>
//         </Row>
//       ) : expenses.length === 0 ? (
//         <Row>
//           <Col>
//             <Alert variant="info">No expenses found</Alert>
//           </Col>
//         </Row>
//       ) : (
//         <Row>
//           <Col>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Amount</th>
//                   <th>Category</th>
//                   <th>Description</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {expenses.map((expense) => (
//                   <tr key={expense._id}>
//                     <td>{new Date(expense.date).toLocaleDateString()}</td>
//                     <td>{expense.amount}</td>
//                     <td>{expense.category}</td>
//                     <td>{expense.description}</td>
//                     <td>
//                       <Button variant="danger" onClick={() => handleDelete(expense._id)}>Delete</Button>
//                       <Button variant="warning" onClick={() => handleEdit(expense)}>Edit</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       )}
//        <Summaryinsights/>
//     </Container>
    
//   );
// };

// export default Expensetable;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Table, Spinner, Alert, Modal } from 'react-bootstrap';
import SummaryInsights from './SummaryInsights';



const Expensetable = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchCategory, setSearchCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/expenses/expensivetable');
      setExpenses(response.data);
    } catch (error) {
      setError('Error fetching expenses');
    } finally {
      setLoading(false);
    }
  };

  const fetchExpensesByCategory = async () => {
    setLoading(true);
    try {
      if (searchCategory.trim() === '') {
        // If searchCategory is empty, fetch all expenses
        await fetchExpenses();
      } else {
        const response = await axios.get(`http://localhost:3000/api/expenses/category?category=${searchCategory}`);
        setExpenses(response.data);
      }
    } catch (error) {
      setError('Error fetching expenses by category');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { date, amount, category, description };

    try {
      if (editingExpense) {
        await axios.put(`http://localhost:3000/api/expenses/expensivetable/${editingExpense._id}`, data);
        setEditingExpense(null);
      } else {
        await axios.post('http://localhost:3000/api/expenses/expensivetable', data);
      }
      fetchExpenses();
      setDate('');
      setAmount('');
      setCategory('');
      setDescription('');
      setShowModal(false);
    } catch (error) {
      setError('Error saving expense');
    }
  };

  const handleDelete = async (expenseId) => {
    try {
      await axios.delete(`http://localhost:3000/api/expenses/expensivetable/${expenseId}`);
      setExpenses(expenses.filter(expense => expense._id !== expenseId));
    } catch (error) {
      setError('Error deleting expense');
    }
  };

  const handleEdit = (expense) => {
    setDate(expense.date);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDescription(expense.description);
    setEditingExpense(expense);
    setShowModal(true);
  };

  const handleSearchCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchExpensesByCategory();
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formSearchCategory">
              <Form.Label>Search by Category</Form.Label>
              <Form.Control
                type="text"
                value={searchCategory}
                onChange={handleSearchCategoryChange}
                placeholder="Enter category"
              />
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form>
        </Col>
      </Row>

      {loading ? (
        <Row>
          <Col>
            <Spinner animation="border" />
          </Col>
        </Row>
      ) : error ? (
        <Row>
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      ) : expenses.length === 0 ? (
        <Row>
          <Col>
            <Alert variant="info">No expenses found</Alert>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense._id}>
                    <td>{new Date(expense.date).toLocaleDateString()}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>{expense.description}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(expense._id)}>Delete</Button>
                      <Button variant="warning" onClick={() => handleEdit(expense)}>Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}

      

      {/* Modal for editing expenses */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingExpense ? 'Edit Expense' : 'Add Expense'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingExpense ? 'Update Expense' : 'Add Expense'}
            </Button>
            {editingExpense && (
              <Button variant="secondary" onClick={() => setEditingExpense(null)}>
                Cancel
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <SummaryInsights/>
    </Container>
  );
};

export default Expensetable;
