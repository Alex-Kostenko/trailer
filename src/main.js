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

  document.getElementById("toogle-menu").addEventListener('click', function() {
    sidebarElement.classList.toggle('sidebar_open');
  });
})();
