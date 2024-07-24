import "./Dashboard.scss";

const DisplayCard = () => {
  return <p>DisplayCard</p>;
};

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

export default DashboardCard;
