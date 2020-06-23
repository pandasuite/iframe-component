import PandaBridge from 'pandasuite-bridge';

let properties = null;

function myInit() {
  document.getElementById('gframe').src = properties.url;
}

PandaBridge.init(() => {
  PandaBridge.onLoad((pandaData) => {
    properties = pandaData.properties;

    if (document.readyState === 'complete') {
      myInit();
    } else {
      document.addEventListener('DOMContentLoaded', myInit, false);
    }
  });

  PandaBridge.onUpdate((pandaData) => {
    properties = pandaData.properties;

    myInit();
  });
});
