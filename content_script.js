chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    var expandAll = document.querySelector('.gx');
    var collapseAll = document.querySelector('.gq');

    if (collapseAll.parentNode.parentNode.parentNode.style.display == "none") {
        expandAll.click();
    }
    else {
        collapseAll.click();
    }
  });
