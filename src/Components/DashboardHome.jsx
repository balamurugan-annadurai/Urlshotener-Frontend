import React from 'react'
import BarGraph from './BarGraph';

const DashboardHome = ({ dashboardData }) => {

    console.log(dashboardData);
    
    const urlsCreatedPerDay = dashboardData.urlsPerDay;
    const urlsCreatedPerMonth = dashboardData.urlsPerMonth;

    const monthData = dashboardData.monthsData;

    const shortLinksData = [
        { month: 'January', count: monthData[0].length },
        { month: 'February', count: monthData[1].length },
        { month: 'March', count: monthData[2].length },
        { month: 'April', count: monthData[3].length },
        { month: 'May', count: monthData[4].length },
        { month: 'June', count: monthData[5].length },
        { month: 'July', count: monthData[6].length },
        { month: 'August', count: monthData[7].length },
        { month: 'September', count: monthData[8].length },
        { month: 'October', count: monthData[9].length },
        { month: 'November', count: monthData[10].length },
        { month: 'December', count: monthData[11].length },
    ];
    return (
        <div className="dashboard-home">
            <div className="graph">
                <BarGraph data={shortLinksData}/>
            </div>
            <div className="datas">
                <h1>No of short links created</h1>
                <p>Today: {urlsCreatedPerDay.length}</p>
                <p>This month: {urlsCreatedPerMonth.length}</p>
            </div>
        </div>
    )
}

export default DashboardHome