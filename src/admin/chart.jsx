import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import OnlineUsersCard from "./OnlineUserCard";
import NewCustomers from "./NewCustomer";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Create refs for the charts to avoid recreating them on re-renders
  const statisticsChartRef = useRef(null);
  const dailySalesChartRef = useRef(null);
  
  useEffect(() => {
    // Destroy previous chart instances if they exist
    if (statisticsChartRef.current) {
      statisticsChartRef.current.destroy();
    }
    if (dailySalesChartRef.current) {
      dailySalesChartRef.current.destroy();
    }
    
    // Initialize statistics chart
    const statisticsCtx = document.getElementById('statisticsChart');
    if (statisticsCtx) {
      statisticsChartRef.current = new Chart(statisticsCtx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Visitors",
            borderColor: "#1d7af3",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#1d7af3",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            backgroundColor: 'rgba(29, 122, 243, 0.1)',
            fill: true,
            borderWidth: 2,
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
          }, {
            label: "Subscribers",
            borderColor: "#59d05d",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#59d05d",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            backgroundColor: 'rgba(89, 208, 93, 0.1)',
            fill: true,
            borderWidth: 2,
            data: [400, 394, 415, 450, 480, 495, 510, 550, 570, 601, 652, 703]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 10,
                color: '#1d7af3'
              }
            },
            tooltip: {
              backgroundColor: '#f5f5f5',
              titleColor: '#333',
              bodyColor: '#666',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 10,
                color: '#9e9e9e',
                font: {
                  size: 11,
                  family: "Lato",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
            x: {
              grid: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 10,
                color: '#9e9e9e',
                font: {
                  size: 11,
                  family: "Lato",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            }
          }
        }
      });
    }

    // Initialize daily sales chart
    const dailySalesCtx = document.getElementById('dailySalesChart');
    if (dailySalesCtx) {
      dailySalesChartRef.current = new Chart(dailySalesCtx, {
        type: 'bar',
        data: {
          labels: ["Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Apr 01", "Apr 02"],
          datasets: [{
            label: "Sales",
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.8)',
            data: [542, 480, 430, 550, 530, 453, 380, 434]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleColor: '#fff',
              bodyColor: '#fff',
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            },
            x: {
              grid: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }
          }
        }
      });
    }

    // Clean up function to destroy charts when component unmounts
    return () => {
      if (statisticsChartRef.current) {
        statisticsChartRef.current.destroy();
      }
      if (dailySalesChartRef.current) {
        dailySalesChartRef.current.destroy();
      }
    };
  }, []);

  // Sample transaction data
  const transactions = [
    { id: 'INV-001', date: '2025-03-05 14:30', amount: '$340.00', status: 'Completed' },
    { id: 'INV-002', date: '2025-03-04 09:15', amount: '$125.50', status: 'Pending' },
    { id: 'INV-003', date: '2025-03-03 18:22', amount: '$575.25', status: 'Completed' },
    { id: 'INV-004', date: '2025-03-02 11:05', amount: '$90.00', status: 'Cancelled' },
    { id: 'INV-005', date: '2025-03-01 16:45', amount: '$210.75', status: 'Completed' }
  ];

  // Function to determine status badge style
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Completed': return 'badge bg-success';
      case 'Pending': return 'badge bg-warning';
      case 'Cancelled': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  };

  // Rest of your component remains the same...
  return (
    <div>
      {/* Your existing JSX... */}
      {/* Remember to include canvas elements with the correct IDs: */}
      {/* 
        <div className="chart-container" style={{ minHeight: "375px" }}>
          <canvas id="statisticsChart"></canvas>
        </div>
      
        <div className="pull-in">
          <canvas id="dailySalesChart"></canvas>
        </div>
      */}
    </div>
  );
}