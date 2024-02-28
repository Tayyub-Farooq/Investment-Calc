import "../index.css";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ data }) {
  const result = calculateInvestmentResults(data);
let initialINST=0;
  if(result.length>0){
     initialINST =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
 
  }
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investmeant Value</th>
          <th>Intreast(Year)</th>
          <th>Total Intreast</th>
          <th>Invested Capiital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => {
          const intrestEOYT =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialINST;
          const amtInvsted = yearData.valueEndOfYear - intrestEOYT;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(intrestEOYT)}</td>
              <td>{formatter.format(amtInvsted)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
