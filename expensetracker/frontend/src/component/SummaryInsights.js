
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Summaryinsights = () => {
// //   const [period, setPeriod] = useState('day');
// //   const [totalSpending, setTotalSpending] = useState(0);
// //   const [spendingByCategory, setSpendingByCategory] = useState([]);

// //   useEffect(() => {
// //     fetchSummary();
// //   }, [period]);

// //   const fetchSummary = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:3000/api/expenses/summary?period=${period}`);
// //       setTotalSpending(response.data.total);

// //       const categoryResponse = await axios.get(`http://localhost:3000/api/expenses/spending-by-category?period=${period}`);
// //       setSpendingByCategory(categoryResponse.data);
// //     } catch (error) {
// //       console.error('Error fetching summary:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Summary</h2>
// //       <label>
// //         Select period:
// //         <select value={period} onChange={(e) => setPeriod(e.target.value)}>
// //           <option value="day">Day</option>
// //           <option value="week">Week</option>
// //           <option value="month">Month</option>
// //         </select>
// //       </label>
// //       <div>
// //         <h3>Total Spending: ${totalSpending}</h3>
// //       </div>
// //       <div>
// //         <h3>Spending by Category</h3>
// //         <ul>
// //           {spendingByCategory.map((category) => (
// //             <li key={category._id}>
// //               {category._id}: ${category.total}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Summaryinsights;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SummaryInsights = () => {
//   const [period, setPeriod] = useState('day');
//   const [totalSpending, setTotalSpending] = useState(0);
//   const [spendingByCategory, setSpendingByCategory] = useState([]);

//   useEffect(() => {
//     fetchSummary();
//   }, [period]);

//   const fetchSummary = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/expenses/summary?period=${period}`);
//       setTotalSpending(response.data.total);

//       const categoryResponse = await axios.get(`http://localhost:3000/api/expenses/spending-by-category?period=${period}`);
//       setSpendingByCategory(categoryResponse.data);
//     } catch (error) {
//       console.error('Error fetching summary:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Summary</h2>
//       <label>
//         Select period:
//         <select value={period} onChange={(e) => setPeriod(e.target.value)}>
//           <option value="day">Day</option>
//           <option value="week">Week</option>
//           <option value="month">Month</option>
//         </select>
//       </label>
//       <div>
//         <h3>Total Spending: ${totalSpending}</h3>
//       </div>
//       <div>
//         <h3>Spending by Category</h3>
//         <ul>
//           {spendingByCategory.map((category) => (
//             <li key={category._id}>
//               {category._id}: ${category.total}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SummaryInsights;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SummaryInsights = () => {
  const [period, setPeriod] = useState('day');
  const [totalSpending, setTotalSpending] = useState(0);
  const [spendingByCategory, setSpendingByCategory] = useState([]);

  useEffect(() => {
    fetchSummary();
  }, [period]);

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/expenses/summary?period=${period}`);
      setTotalSpending(response.data.total);

      const categoryResponse = await axios.get(`http://localhost:3000/api/expenses/spending-by-category?period=${period}`);
      setSpendingByCategory(categoryResponse.data);
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };

  return (
    <div>
      <h2>Summary</h2>
      <label>
        Select period:
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </label>
      <div>
        <h3>Total Spending: ${totalSpending}</h3>
      </div>
      <div>
        <h3>Spending by Category</h3>
        <ul>
          {spendingByCategory.map((category) => (
            <li key={category._id}>
              {category._id}: ${category.total}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryInsights;
