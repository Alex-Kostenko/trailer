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
  var isMobile = undefined;

  function updateWindowSize() {
    var windowWidth = document.body.offsetWidth;
    isMobile = windowWidth < 1000;
    return isMobile;
  }

  function handleResize() {
    if (isMobile !== updateWindowSize()) {
      var action = isMobile ? 'add' : 'remove';
      sidebarElement.classList[action]('sidebar_mobile');
    }

    return handleResize;
  }

  document.getElementById("toogle-menu").addEventListener('click', function() {
    sidebarElement.classList.toggle('sidebar_open');
  });

  window.addEventListener('resize', handleResize());
})();
