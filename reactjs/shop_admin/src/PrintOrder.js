import VerifyLogin from "./VerifyLogin";


export default function PrintOrder() {
  VerifyLogin();
  return (
    <>
      <h2 align="center">Bill</h2> <hr width="90%" />
      <table border={1} cellPadding={10} align="center" width="90%">
        <tbody>
          <tr>
            <td width="25%">Name</td>
            <td width="25%">Ankit Patel</td>
            <td width="25%">Date</td>
            <td width="25%">Fri 09-08-2024</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              eva surbhi, opp akshwarwadi <br />
              Waghwadi road, bhavnagar
            </td>
            <td>Bill No</td>
            <td>125</td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>364001</td>
            <td rowSpan={2}>Remarks</td>
            <td rowSpan={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              possimus maxime debitis! Atque doloribus laborum similique officia
              deleniti delectus velit, et consequatur provident quas, ex sequi
              necessitatibus a tenetur? Culpa.
            </td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>1234567890</td>
          </tr>
        </tbody>
      </table>
      <hr width="90%" />
      <table border={1} cellPadding={10} align="center" width="90%">
        <thead>
          <tr>
            <td>Sr No</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>IPhone - 15 pro</td>
            <td>125000</td>
            <td>2</td>
            <td>250000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Macbook pro</td>
            <td>225000</td>
            <td>1</td>
            <td>225000</td>
          </tr>
          <tr>
            <td colSpan={4}>Total</td>
            <td>4,75,000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
