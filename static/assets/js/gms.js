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
  'Florr.io': { imageUrl: "/assets/img/florr.webp", onClick: florr },
  'Krunker.io': { imageUrl: "/assets/img/krunker.webp", onClick: krunker },
  'Time Shooter SWAT': { imageUrl: "/assets/img/time-shooter-3.webp", onClick: timeShooter3, height: 130 },
  // Sport Games
  'Retro Bowl': { imageUrl: "/assets/img/retro.webp", onClick: rBowl },
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
  'Territorial.io': { imageUrl: "/assets/img/territorial.webp", onClick: territorial },
  // Running Games
  'Subway Surfers': { imageUrl: "/assets/img/subway.webp", onClick: subway, height: 130 },
  'Temple Run': { imageUrl: "/assets/img/temple-run.webp", onClick: templeRun },
  'OvO': { imageUrl: "/assets/img/ovo.webp", onClick: ovo, height: 130 },
  'Vex 8': { imageUrl: "/assets/img/vex8.webp", onClick: vex8 },
  'Tall Man Run': { imageUrl: "/assets/img/tall-man-run.webp", onClick: tallManRun },
  'Crowd Run 3D': { imageUrl: "/assets/img/crowd-run-3d.webp", onClick: crowdRun3d },
  // Car/Racing Games
  'Drift Hunters': { imageUrl: "/assets/img/drifthunters.webp", onClick: driftHunters },
  'Drive Mad': { imageUrl: "/assets/img/drive-mad.webp", onClick: driveMad },
  'Moto X3M': { imageUrl: "/assets/img/motox3m.webp", onClick: motoX3M },
  // Brain Games
  'Bitlife': { imageUrl: "/assets/img/bitlife.webp", onClick: bitlife, height: 130 },
  '2048 ': { imageUrl: "/assets/img/2048.webp", onClick: twoZeroFourEight, height: 130 },
  'Pokemon 2048': { imageUrl: "/assets/img/p2048.webp", onClick: p2048, height: 130 },
  'Chess': { imageUrl: "/assets/img/chess.webp", onClick: chess },
  'Watermelon Game (Suika)': { imageUrl: "/assets/img/suika.webp", onClick: suikaWatermelon, height: 130 },
  // Idle/Clicking Games
  'Doge Miner 2': { imageUrl: "/assets/img/doge-miner-2.webp", onClick: dogeMiner2 },
  'Cookie Clicker': { imageUrl: "/assets/img/cookieclicker.webp", onClick: cookieClicker },
  'Idle Breakout': { imageUrl: "/assets/img/idlebreakout.webp", onClick: idleBreakout },
  // Sandbox/Arcade Games
  'There is No Game': { imageUrl: "/assets/img/there-is-no-gms.webp", onClick: thereIsNoGame, height: 130 },
  // 3kh0 games
  '1': { imageUrl: "https://lh4.googleusercontent.com/Ih1oHzV6EJI2x98na01dIm1xb4S-hteBYD9TNY3Mn579sZ-Sx7EA4Tmbznv_dl-wHsJ_Gf8S42NoHCruUD32DA=w1280", onClick: one },
  '10 minutes till dawn': { imageUrl: "https://lh6.googleusercontent.com/X9lRUyljYC7rxr4IWvFk-IYlye1qlzi5c2zQT6lOUPtrCjRfkzEV1hEOF3GijLq1ZbV9ZSANDoEBuyCtIlhJTuI=w1280", onClick: tenminutes },
  '100 player pong': { imageUrl: "https://lh4.googleusercontent.com/YBFVh9wvcPYkHE-YXGETO22IJHGZTpSs1Arc7XfakewdJpMgSHk27cJ6pZj6lv4XCi4BbAK71hJbELKM5g8xdykDwiux_JhpyGJzrQmzYx9-LWFpw0Zr41MVDeCZbRqOeg=w1280", onClick: onehundredpong },
  '2048 Multitask': { imageUrl: "https://lh4.googleusercontent.com/4iahJX3D8TIM-P1UAG-C2MNl0c2rh8IvQ357VGCP9U0ZKxfF2uts78QUyn9l16roqmp5RCSZPCSVoXv3pJpVCDfbhRZ3cGGgH6dtMBKMQydgpx9VIx12JSFTPIi2O1LlTQ=w1280", onClick: twoZeroFourEightMulti },
  '9007199254740992': { imageUrl: "https://lh6.googleusercontent.com/AXb9n0whsPAT0ycig0xFUDwVA1QLVezoSNAC9LfE27CCQPa033TLOTPGjuKG4m_Jx7jgoyAjt6Kqp2_Ct3iS3YM=w1280", onClick: longNumber },
  'DogeMiner': { imageUrl: "https://lh4.googleusercontent.com/dufLyiPapzNyJnSyrv0Ev-lATuEdF4uiIayUU0WYnwf5Ifz-GDYKqQTsdTrWUCPr6lR2tZd6CK5CFTQeRdVe2JA=w1280", onClick: dogeMiner },
  'HexGL': { imageUrl: "https://lh3.googleusercontent.com/WvBSZ8KNL1MTdayz0Pjkic3nSNR2tPLb5ADZwBfa_N_49VNZ9EbG3PO0mcHO2YAgid3oMg6TnZyWorX2lAlCCY8=w1280", onClick: hexGL },
  'Offline Paradise': { imageUrl: "https://lh5.googleusercontent.com/y6l_I5O-4GU1b74KYCozKcSFNQVCQJ4V0Ro_dth2omElWO7iDFPHX6npLSFc2p2C_C644bw0pvEGJ0pgtjrrep4=w1280", onClick: offlineParadise },
  'A Dance of Fire and Ice': { imageUrl: "https://lh5.googleusercontent.com/StieUI8OZO-njxfk4mCoHsfbG-HZJBUE_8N-ZtBzp3zC9C47DfbluynZy4Eo65H4uQb2TLHBsqKAt0C8ephIUKIiC-Xlkkhp4DEkgPbtm37Lesh63ouAQrpP6ghyYPRsIg=w1280", onClick: danceIceFire },  
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
