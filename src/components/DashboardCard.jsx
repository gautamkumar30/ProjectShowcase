import "./Dashboard.scss";

const DashboardCard = ({ value, title1, title2 }) => {
  return (
    <div className="dashboardCard">
      <h1>{value}</h1>
      <div>
        <p>{title1}</p>
        {/* <p>{title2}</p> */}
      </div>
    </div>
  );
};

// clearedss
// new line
export default DashboardCard;
