
// Create a bar chart for attendance
const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Category 1', 'Category 2', 'Category 3'], // Example categories
    datasets: [{
      label: 'Survey Attendance',
      data: [100, 150, 200], // Example attendance data
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});
