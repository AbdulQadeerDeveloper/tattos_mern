import React, { useEffect, useRef, useMemo, useState } from 'react';
import Chart from 'chart.js/auto';
import './admin.css';

function RightSide() {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const [chartInstance1, setChartInstance1] = useState(null);
    const [chartInstance2, setChartInstance2] = useState(null);
    const chartConfigs = useMemo(() => ({
        salesChart: {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        },
        revenueChart: {
            type: 'line',
            data: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                datasets: [{
                    label: "Sales",
                    data: [15, 30, 55, 45, 70, 65, 85],
                    backgroundColor: "rgba(0, 156, 255, .5)",
                    borderColor: "rgba(0, 156, 255, .7)",
                    fill: true,
                }, {
                    label: "Revenue",
                    data: [99, 135, 170, 130, 190, 180, 270],
                    backgroundColor: "rgba(255, 99, 132, .5)",
                    borderColor: "rgba(255, 99, 132, .7)",
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    }), []);

  
 

    useEffect(() => {
        // Destroy the previous instance if exists
        if (chartInstance1) {
            chartInstance1.destroy();
        }
        if (chartInstance2) {
            chartInstance2.destroy();
        }

        if (chartRef1.current) {
            const ctx1 = chartRef1.current.getContext('2d');
            const newChartInstance1 = new Chart(ctx1, chartConfigs.salesChart);
            setChartInstance1(newChartInstance1);
        }
        if (chartRef2.current) {
            const ctx2 = chartRef2.current.getContext('2d');
            const newChartInstance2 = new Chart(ctx2, chartConfigs.revenueChart);
            setChartInstance2(newChartInstance2);
        }

        // Cleanup function to destroy charts when component unmounts
        return () => {
            if (chartInstance1) chartInstance1.destroy();
            if (chartInstance2) chartInstance2.destroy();
        };
    }, [chartConfigs]);

    return (
        <div>
            {/* Dashboard widgets */}
            <div class="container-fluid pt-4 px-4" id='adminData'>
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Charts */}
            <div className="container-fluid pt-4 px-4" id='adminData'>
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <h6 className="mb-0">Worldwide Sales</h6>
                            <canvas ref={chartRef1} id="worldwide-sales"></canvas>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <h6 className="mb-0">Sales & Revenue</h6>
                            <canvas ref={chartRef2} id="sales-revenue"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            {/* Other UI elements */}

            <div class="container-fluid pt-4 px-4" id='adminData'>
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Recent Salse</h6>
                        <a href="">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col"><input class="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default RightSide;
