function loadApps() {
  const squareBtns = document.querySelectorAll('.square_btn');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadSquareBtn(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  squareBtns.forEach(btn => {
    observer.observe(btn);
  });
}

function loadSquareBtn(btn) {
  btn.classList.add('loaded');
}

function addApp(name, imageUrl, onClickFunction, width, height) {
  var appContainer = document.getElementById('appContainer');
  var linkElement = document.createElement('a');
  linkElement.href = "#";
  linkElement.className = "square_btn";
  linkElement.onclick = onClickFunction;

  if (width) {
      linkElement.style.width = width + 'px';
  }

  if (height) {
      linkElement.style.height = height + 'px';
  }

  var imageElement = document.createElement('img');
  imageElement.className = "rounded";
  imageElement.src = imageUrl;
  imageElement.alt = name;
  imageElement.draggable = false;

  var brElement = document.createElement('br');
  var textElement = document.createTextNode(name);

  linkElement.appendChild(imageElement);
  linkElement.appendChild(brElement);
  linkElement.appendChild(textElement);

  appContainer.appendChild(linkElement);
}

var apps = {
  'Blackjack': { imageUrl: "https://i.ibb.co/2WZgkhr/image.png", onClick: blackjack },
  'Roulette Gambling Simulator': { imageUrl: "https://i.ibb.co/ZxfwVsw/image.png", onClick: roulette },
};


for (var appName in apps) {
  if (apps.hasOwnProperty(appName)) {
    try {
      const { imageUrl, onClick, width, height } = apps[appName];
      addApp(appName, imageUrl, onClick, width, height);
      fetchMessage.style.display = 'none';
    } catch (error) {
      fetchMessage.innerText = 'Loading has encountered a error. Please refresh!';
    }
  }
}

/* search bar */
document.getElementById('searchApps').addEventListener('input', function(event) {
  const query = this.value.toLowerCase();
  const links = document.getElementsByClassName('search-results')[0].getElementsByTagName('a');
  let foundResults = false;
  for(let i = 0; i < links.length; i++) {
      const link = links[i];
      const linkText = link.innerText.toLowerCase();
      if(linkText.includes(query)) {
          link.style.display = 'block';
          foundResults = true;
      } else {
          link.style.display = 'none';
      }
  }
  if(!foundResults) {
      const message = document.getElementById('searchMessage');
      message.innerText = 'No Results Found.';
      message.style.display = 'block';
  } else {
      const message = document.getElementById('searchMessage');
      message.style.display = 'none';
  }
});

loadApps();

var searchBar = document.querySelector('.searchbar');
var searchIcon = document.getElementById('search');
searchBar.addEventListener('focus', () => {
  searchIcon.style.marginLeft = '20px';
  searchBar.placeholder = '';
  searchBar.style.textAlign = 'left';
});

searchBar.addEventListener('blur', () => {
  searchIcon.style.marginLeft = '147px';
  searchBar.placeholder = 'Search for apps';
  searchBar.style.textAlign = 'center';
});

/*
var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.innerHTML = `atOptions = {
'key': 'f1818624979d7b153c0194b4c3ce4d7e',
'format': 'iframe',
'height': 60,
'width': 468,
'params': {}
};
document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/f1818624979d7b153c0194b4c3ce4d7e/invoke.js"></scr' + 'ipt>');
`;
document.body.appendChild(scriptElement);

window.onload = function() {
function centerIframe() {
  var adFrame = document.querySelector('iframe');
  var containerWidth = adFrame.parentElement.clientWidth;
  var adFrameWidth = adFrame.clientWidth;
  var marginLeft = (containerWidth - adFrameWidth) / 2 + 'px';
  adFrame.style.marginLeft = marginLeft;
}
setInterval(centerIframe, 900);
};
*/
