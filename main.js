const chartData = {
  labels: ["ลำไย", "เงาะ", "ส้ม", "มะม่วง", "ฝรั่ง"],
  data: [10, 25, 15, 30, 20],
  
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".fav-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "MY FAV FRUITS",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();
