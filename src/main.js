import "./sass/build.sass";
import "./index.pug";
import "./login.pug";
import "./home.pug";
import "./support.pug";
import "./create_account.pug";
import "./account_info.pug";
import "./support_confirm.pug";

(function () {
  var sidebarElement = document.getElementById("sidebar");
  window.onresize = navToogler;
  window.onload = navToogler;

  function navToogler(){
    if(document.body.offsetWidth < 600) {
      document.getElementById("toogle-menu").onclick = function() {
      sidebarElement.classList.remove("sidebar-compact");
      sidebarElement.classList.toggle('sidebar-full');
      }
    }else if(document.body.offsetWidth < 1000) {
      document.getElementById("toogle-menu").onclick = function() {
      sidebarElement.classList.remove("sidebar-compact");
      sidebarElement.classList.toggle('sidebar-full');
      }
    }else {
      document.getElementById("toogle-menu").onclick = function() {
      sidebarElement.classList.toggle("sidebar-compact");
      sidebarElement.classList.remove('sidebar-full');
      }
    }
  }
})();
