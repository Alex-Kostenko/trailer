import "./sass/build.sass";
import "./index.pug";
import "./login.pug";
import "./home.pug";
import "./customer.pug";
import "./trailers.pug";
import "./home.pug";
import "./support.pug";
import "./create_account.pug";
import "./account_info.pug";
import "./support_confirm.pug";

(function() {
  var sidebarElement = document.getElementById("sidebar");

  document.getElementById("toogle-menu").addEventListener("click", function() {
    sidebarElement.classList.toggle("sidebar_open");
  });
})();

(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    var totalLease = document.getElementById("TotalLease").getContext("2d");
    var totalMaintenance = document.getElementById("TotalMaintenance").getContext("2d");
    var totalTrailers = document.getElementById("TotalTrailers").getContext("2d");
    
    var chart = new Chart(totalLease, {
      // The type of chart we want to create
      type: "bar",
      scales: {
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.5,
            barThickness: 2,
            maxBarThickness: 4,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
    },

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });

    var chart = new Chart(totalMaintenance, {
      // The type of chart we want to create
      type: "bar",
      scales: {
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.5,
            barThickness: 2,
            maxBarThickness: 4,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
    },

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });

    var chart = new Chart(totalTrailers, {
      // The type of chart we want to create
      type: "bar",
      scales: {
        xAxes: [{
            categoryPercentage: 0.5,
            barPercentage: 0.5,
            barThickness: 2,
            maxBarThickness: 4,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
    },

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
  });
})();

(function() {
  var tablinks = document.getElementsByClassName("tab__links");
  var tabcontents = document.getElementsByClassName("tab__content");

  function closeAll() {
    for (let index = 0; index < tabcontents.length; index++) {
      tabcontents[index].style.display = "none";
    }
  }

  function removeClasses() {
    for (let index = 0; index < tablinks.length; index++) {
      tablinks[index].classList.remove("tab-active");
    }
  }

  function showSelected(tablink) {
    document.getElementById(`${tablink.id}-container`).style.display = "block";
    removeClasses();
    tablink.classList.add("tab-active");
  }

  for (let index = 0; index < tablinks.length; index++) {
    tablinks[index].addEventListener("click", function() {
      closeAll();
      showSelected(tablinks[index]);
    });
  }

  document.getElementById("Home").click();
})();
