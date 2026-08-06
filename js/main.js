/* ============================================================
   OmniKar Site — Shared header/footer + page logic
   ============================================================ */

(function () {
  'use strict';

  function getLangButtons() {
    var langs = I18N.langs;
    var html = '';
    for (var i = 0; i < langs.length; i++) {
      html += '<button class="lang-btn" data-lang="' + langs[i] + '">' + langs[i] + '</button>';
    }
    return html;
  }

  function renderHeader() {
    var header = document.getElementById('app-header');
    if (!header) return;

    var currentPage = document.body.getAttribute('data-page') || '';
    var lang = I18N.get();

    header.innerHTML =
      '<nav>' +
      '  <a href="index.html" class="nav-brand">' +
      '    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="#B4D400"/><circle cx="20" cy="11" r="5" fill="#1A1A1A"/><circle cx="12" cy="21" r="5" fill="#1A1A1A"/></svg>' +
      '    OmniKar' +
      '  </a>' +
      '  <div class="nav-links">' +
      '    <a href="index.html" data-i18n="nav.home"' + (currentPage === 'index' ? ' class="active"' : '') + '>' + I18N.t('nav.home') + '</a>' +
      '    <a href="download.html" data-i18n="nav.download"' + (currentPage === 'download' ? ' class="active"' : '') + '>' + I18N.t('nav.download') + '</a>' +
      '    <a href="changelog.html" data-i18n="nav.changelog"' + (currentPage === 'changelog' ? ' class="active"' : '') + '>' + I18N.t('nav.changelog') + '</a>' +
      '  </div>' +
      '  <div class="lang-switch" id="lang-switch">' + getLangButtons() + '</div>' +
      '</nav>';

    // Language switcher events
    var buttons = header.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute('data-lang') === lang) {
        buttons[i].classList.add('active');
      }
      buttons[i].addEventListener('click', function () {
        I18N.set(this.getAttribute('data-lang'));
      });
    }
  }

  function renderFooter() {
    var footer = document.getElementById('app-footer');
    if (!footer) return;
    footer.innerHTML = '';
  }

  I18N.onSwitcherUpdate(function (lang) {
    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  window.renderHeader = renderHeader;
  window.renderFooter = renderFooter;

  // Init on DOM ready
  function init() {
    renderHeader();
    renderFooter();
    I18N.apply();
    initPage();
  }

  function initPage() {
    var page = document.body.getAttribute('data-page');

    if (page === 'download') {
      fetch('version.json')
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return;
          var elVersion = document.getElementById('dl-version');
          var elFile = document.getElementById('dl-filename');
          var elDate = document.getElementById('dl-date');
          var elSize = document.getElementById('dl-size');
          var elSha = document.getElementById('dl-sha');
          var elLink = document.getElementById('dl-link');

          if (elVersion) elVersion.textContent = data.latestVersion || '—';
          var elVersionMeta = document.getElementById('dl-version-meta');
          if (elVersionMeta) elVersionMeta.textContent = data.latestVersion || '—';
          if (elFile) elFile.textContent = (data.apkFiles && data.apkFiles.versioned) || '—';
          if (elDate) elDate.textContent = data.date || '—';
          if (elSize) elSize.textContent = data.size || '—';
          if (elSha) elSha.textContent = data.sha256 || '—';
          if (elLink && data.apkFiles && data.apkFiles.latest) {
            elLink.href = 'downloads/' + data.apkFiles.latest;
          }
        })
        .catch(function () {});
    }

    if (page === 'changelog') {
      fetch('version.json')
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data || !data.changelog) return;
          renderChangelog(data.changelog);
        })
        .catch(function () {});
    }
  }

  function renderChangelog(entries) {
    var container = document.getElementById('changelog-container');
    if (!container) return;

    var html = '';
    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      html +=
        '<div class="changelog-entry">' +
        '  <div class="ch-version">' + e.version + '</div>' +
        '  <div class="ch-date">' + (e.date || '') + '</div>' +
        '  <div class="ch-notes">' + (e.notes || '') + '</div>' +
        '</div>';
    }
    // Fallback: render static entries from HTML template
    if (entries.length === 0) {
      html = container.innerHTML;
    }
    if (html) container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
