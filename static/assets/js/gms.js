function loadGms() {
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

function addGms(name, imageUrl, onClickFunction, width, height) {
    var gmsContainer = document.getElementById('gmsContainer');
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

    gmsContainer.appendChild(linkElement);
}

var gms = {
  'Time Shooter SWAT': { imageUrl: "/assets/img/time-shooter-3.webp", onClick: timeShooter3, height: 130 },
  // Sport Games
  'Retro Bowl': { imageUrl: "/assets/img/retro.webp", onClick: rBowl },
  'Retro Bowl College': { imageUrl: "https://i.ibb.co/vcZ6dnJ/image.png", onClick: retrobowlcollege },
  'Basket Random': { imageUrl: "/assets/img/basketrandom.webp", onClick: basketRandom, height: 130 },
  'BasketBros.io': { imageUrl: "/assets/img/basketbros.webp", onClick: basketBros },
  // Ball/Platformer Games
  'Slope': { imageUrl: "/assets/img/slope.webp", onClick: slope },
  'Boxel Rebound': { imageUrl: "/assets/img/boxelrebound.webp", onClick: brebound, height: 130 },
  'Fireboy and Watergirl': { imageUrl: "/assets/img/fireboy-and-watergirl.webp", onClick: fBwG1, height: 130 },
  'Stickman Hook': { imageUrl: "/assets/img/stickmanhook.webp", onClick: stickManHook, height: 130 },
  // Domination Games
  'Hole.io': { imageUrl: "/assets/img/hole-io.webp", onClick: holeio, height: 130 },
  'Paper.io': { imageUrl: "/assets/img/paperio.webp", onClick: paperIo },
  // Running Games
  'Slice Master': { imageUrl: "https://i.ibb.co/3YdcxvR/image.png", onClick: slicemaster },  
  'Subway Surfers': { imageUrl: "/assets/img/subway.webp", onClick: subway, height: 130 },
  'Temple Run': { imageUrl: "/assets/img/temple-run.webp", onClick: templeRun },
  'OvO': { imageUrl: "/assets/img/ovo.webp", onClick: ovo, height: 130 },
  'Vex 8': { imageUrl: "/assets/img/vex8.webp", onClick: vex8 },
  'Tall Man Run': { imageUrl: "/assets/img/tall-man-run.webp", onClick: tallManRun },
  'Crowd Run 3D': { imageUrl: "/assets/img/crowd-run-3d.webp", onClick: crowdRun3d },
  'Geometry Dash Lite': { imageUrl: "https://i.ibb.co/Bgrjy88/image.png", onClick: geodash },
  // Gambling
  'Blackjack': { imageUrl: "https://i.ibb.co/2WZgkhr/image.png", onClick: blackjack },
  'Roulette Gambling Simulator': { imageUrl: "https://i.ibb.co/ZxfwVsw/image.png", onClick: roulette },
  // Car/Racing Games
  'Drift Hunters': { imageUrl: "/assets/img/drifthunters.webp", onClick: driftHunters },
  'Drive Mad': { imageUrl: "/assets/img/drive-mad.webp", onClick: driveMad },
  'Moto X3M': { imageUrl: "/assets/img/motox3m.webp", onClick: motoX3M },
  'Snow Rider 3D': { imageUrl: "https://i.ibb.co/FbCvThz/image.png", onClick: snowRider },
  // Brain Games
  'Bitlife': { imageUrl: "/assets/img/bitlife.webp", onClick: bitlife, height: 130 },
  '2048 ': { imageUrl: "/assets/img/2048.webp", onClick: twoZeroFourEight, height: 130 },
  'Pokemon 2048': { imageUrl: "/assets/img/p2048.webp", onClick: p2048, height: 130 },
  'Chess.com': { imageUrl: "/assets/img/chess.webp", onClick: chess },
  'Watermelon Game (Suika)': { imageUrl: "/assets/img/suika.webp", onClick: suikaWatermelon, height: 130 },
  'Block Blast': { imageUrl: "https://i.ibb.co/rmmnL6Q/image.png", onClick: blockBlast },  
  // Idle/Clicking Games
  'Doge Miner 2': { imageUrl: "/assets/img/doge-miner-2.webp", onClick: dogeMiner2 },
  'Cookie Clicker': { imageUrl: "/assets/img/cookieclicker.webp", onClick: cookieClicker },
  'Idle Breakout': { imageUrl: "/assets/img/idlebreakout.webp", onClick: idleBreakout },
  'Bloons TD 4 Expansion': { imageUrl: "https://i.ibb.co/0rQPnfK/image.png", onClick: btd4 },
  'Bloons TD 5 (Beta)': { imageUrl: "https://i.ibb.co/tJycsX9/image.png", onClick: btd5 },
  'Plants vs Zombies': { imageUrl: "https://i.ibb.co/6Dd1h7q/image.png", onClick: pvz },
  'Monkey Mart': { imageUrl: "https://i.ibb.co/PYDMwmt/image.png", onClick: monkeyMart },
  // Sandbox/Arcade Games
  'There is No Game': { imageUrl: "/assets/img/there-is-no-gms.webp", onClick: thereIsNoGame, height: 130 },
  'Worldbox 0.1': { imageUrl: "https://i.ibb.co/NN9C0pp/image.png", onClick: worldbox },  
  'Sandboxels': { imageUrl: "https://i.ibb.co/RY9Fdd9/image.png", onClick: sandboxels },
  'Roblox': { imageUrl: "https://i.ibb.co/523d8cw/image.png", onClick: rbx },    
  // 3kh0 games batch 1
  '1': { imageUrl: "https://i.ibb.co/W6Bx2vF/image.png", onClick: one },
  '10 minutes till dawn': { imageUrl: "https://i.ibb.co/mS5JYSr/6-KPt-OADP4q-Xnqcv-QKCHTTUb-TCm-Ut-QYj8wvs3-PNL1x-S70-O0tn-Xk-EZ0zm0-D3-Np-On-Qo2-Il-x5ce-Ae-Sps9-ZZ.png", onClick: tenminutes },
  '100 Player Pong': { imageUrl: "https://i.ibb.co/16TVm46/image.png", onClick: onehundredpong },
  '2048 Multitask': { imageUrl: "https://i.ibb.co/PMR8D7Q/image.png", onClick: twoZeroFourEightMulti },
  '9007199254740992': { imageUrl: "https://i.ibb.co/4pHnth9/eldf-Gw-Oeh-Do-B6-ATGRow8q-Jw-BZA6edaan-ND72-N3-ANoqbqec7-d-Rz3c3gz-QBr-M7a6u-J0-AJ5j-I3i-Yvw7hgv-PS.png", onClick: longNumber },
  'DogeMiner': { imageUrl: "https://i.ibb.co/9W41cwk/image.png", onClick: dogeMiner },
  'HexGL': { imageUrl: "https://i.ibb.co/YZ77JM7/image.png", onClick: hexGL },
  'Offline Paradise': { imageUrl: "https://i.ibb.co/TH7XQnm/image.png", onClick: offlineParadise },
  'A Dance of Fire and Ice': { imageUrl: "https://i.ibb.co/zxyZYr6/image.png", onClick: danceIceFire },  
  //3kh0 games batch 2
  'Achievement Unlocked': { imageUrl: "https://i.ibb.co/zZ9JNM0/image.png", onClick: achievementUnlocked }, 
  'Adrenaline Challenge': { imageUrl: "https://i.ibb.co/fNnJJZ7/image.png", onClick: adrenalineChallenge }, 
  'Adventure Drivers': { imageUrl: "https://i.ibb.co/L9cp8dH/image.png", onClick: adventureDrivers }, 
  'Ages Of Conflict': { imageUrl: "https://i.ibb.co/Dr8Pt1h/image.png", onClick: agesofconflict }, 
  'Alien Hominid': { imageUrl: "https://i.ibb.co/Z1d7vpv/image.png", onClick: alienHominid }, 
  'Amidst The Clouds': { imageUrl: "https://i.ibb.co/mvPLsq9/image.png", onClick: amidsttheclouds }, 
  'Angry Sharks': { imageUrl: "https://i.ibb.co/fNtvpW2/image.png", onClick: angrySharks }, 
  'Aquapark Slides': { imageUrl: "https://i.ibb.co/njrBWbz/image.png", onClick: aquaparkSlides }, 
  'Astray': { imageUrl: "https://i.ibb.co/HPRtXkX/image.png", onClick: astray }, 
  'Avalanche': { imageUrl: "https://i.ibb.co/z4QbgqF/image.png", onClick: avalanche },
  'Awesome Tanks 2': { imageUrl: "https://i.ibb.co/rMByH4X/image.png", onClick: awesomeTanksTwo },
  'Backrooms': { imageUrl: "https://i.ibb.co/54v2HQh/image.png", onClick: backrooms },
  'Bad Ice Cream': { imageUrl: "https://i.ibb.co/fXzxhdf/image.png", onClick: badicecream },
  'Bad Ice Cream 2': { imageUrl: "https://i.ibb.co/TkgsnpY/image.png", onClick: badicecreamtwo },
  'Bad Ice Cream 3': { imageUrl: "https://i.ibb.co/4851XyJ/image.png", onClick: badicecreamthree },
  //3kh0 games batch 3
  'Five Nights at Winstons': { imageUrl: "https://i.ibb.co/CQN6Dh7/image.png", onClick: fnaw },
  'Baldis Basics': { imageUrl: "https://i.ibb.co/NSkWZhD/image.png", onClick: baldis },
  'Ballistic Chickens': { imageUrl: "https://i.ibb.co/6nmCfyj/image.png", onClick: ballisticChickens },
  'Basketball Stars': { imageUrl: "https://i.ibb.co/0mRpgr0/image.png", onClick: basketballStars },
  'Battle for Gondor': { imageUrl: "https://i.ibb.co/bQXyf77/image.png", onClick: battleforgondor },
  'Big Red Button': { imageUrl: "https://i.ibb.co/QnhrP72/image.png", onClick: bigredbutton },    
  'Black Hole Square': { imageUrl: "https://i.ibb.co/51b35qS/image.png", onClick: blackholesquare },
  'Black Knight': { imageUrl: "https://i.ibb.co/m4nSQCs/image.png", onClick: blackknight },
  'Bloxors': { imageUrl: "https://i.ibb.co/0YBZ0VV/image.png", onClick: bloxors },  
  'Bob the Robber 2': { imageUrl: "https://i.ibb.co/72B1vkD/image.png", onClick: bobtherobber2 },
  'Big Tower Tiny Square': { imageUrl: "https://i.ibb.co/kQzrmQW/image.png", onClick: btts },
  'We become what we behold': { imageUrl: "https://i.ibb.co/xFbMk57/image.png", onClick: wbwwb },
  'LostGamer.io': { imageUrl: "https://i.ibb.co/s3TVxzb/image.png", onClick: lostgamer }, 
};

for (var gmsName in gms) {
    if (gms.hasOwnProperty(gmsName)) {
      try {
        const { imageUrl, onClick, width, height } = gms[gmsName];
        addGms(gmsName, imageUrl, onClick, width, height);
        fetchMessage.style.display = 'none';
      } catch (error) {
        fetchMessage.innerText = 'Failed to load, please refresh.';
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

loadGms();

var searchBar = document.querySelector('.searchbar');
var searchIcon = document.getElementById('search');
searchBar.addEventListener('focus', () => {
    searchIcon.style.marginLeft = '20px';
    searchBar.placeholder = '';
    searchBar.style.textAlign = 'left';
});

searchBar.addEventListener('blur', () => {
    searchIcon.style.marginLeft = '140px';
    searchBar.placeholder = 'Search for games';
    searchBar.style.textAlign = 'center';
});
