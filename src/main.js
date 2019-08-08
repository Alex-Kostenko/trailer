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
  var tablinks = document.getElementsByClassName("tab__links");
  var tabcontents = document.getElementsByClassName("tab__content");

  function closeAll() {
    for (let index = 0; index < tabcontents.length; index++) {
      tabcontents[index].style.display = "none";
    }
  }

  function showSelected(id) {
    document.getElementById(`${id}-container`).style.display = "block";
  }

  for (let index = 0; index < tablinks.length; index++) {
    tablinks[index].addEventListener("click", function() {
      closeAll();
      showSelected(tablinks[index].id);

      //TODO add active
      // document.getElementById(tablinks[index]).className.remove(" active", "");
      // document.getElementById(tablinks[index]).className += " active";
    });
  }

  document.getElementById("Home").click();
})();
