const scenarios = [
  {
    headline: "CEO Apology Needed After Viral Insult",
    description: "A fictional space-tech CEO mocked frustrated customers online, and reporters are asking whether the company culture is hostile.",
    choices: [
      { text: "Prepare a direct apology, name the behavior, announce customer listening sessions, and set new executive social media rules.", impact: 12 },
      { text: "Say the comments were jokes, then accuse critics of trying to cancel innovation.", impact: -12 },
      { text: "Hide the story behind a shiny product teaser and hope reporters chase the new launch.", impact: -8 }
    ]
  },
  {
    headline: "Celebrity Charity Performance Backlash",
    description: "A celebrity client is accused of lip-syncing during a televised fundraiser, and donors say the moment damaged trust in the event.",
    choices: [
      { text: "Share a transparent statement, release rehearsal context, and schedule a live acoustic benefit with matched donations.", impact: 10 },
      { text: "Blame the production crew before checking the facts.", impact: -10 },
      { text: "Post a vague statement saying live TV is complicated and move on.", impact: -5 }
    ]
  },
  {
    headline: "False Safety Rumor Spreads Fast",
    description: "A viral video falsely claims a snack brand contains a banned ingredient, and parents are demanding answers from the company.",
    choices: [
      { text: "Publish verified lab results, create a clear FAQ, and put a food safety expert in front of media questions.", impact: 11 },
      { text: "Respond with jokes because the rumor is obviously ridiculous.", impact: -6 },
      { text: "Threaten legal action against every customer who reposts the video.", impact: -11 }
    ]
  },
  {
    headline: "Guest Video Exposes Service Failure",
    description: "A luxury hotel guest posts a viral video of room damage, poor staff response, and unanswered complaint messages.",
    choices: [
      { text: "Apologize publicly, contact the guest privately, refund the stay, explain the repair plan, and retrain the response team.", impact: 12 },
      { text: "Tell the public that storms happen and guests should be more understanding.", impact: -12 },
      { text: "Offer an upgrade only if the guest deletes the video first.", impact: -9 }
    ]
  },
  {
    headline: "Insensitive Campaign Copy Sparks Outrage",
    description: "A brand campaign is criticized for mocking a vulnerable group, and advocacy organizations are calling for accountability.",
    choices: [
      { text: "Pause the campaign, acknowledge the harm, meet with advocates, and explain how review standards will change.", impact: 10 },
      { text: "Say people are too sensitive and the campaign was meant to be edgy.", impact: -13 },
      { text: "Delete the ads silently and refuse to answer media questions.", impact: -5 }
    ]
  },
  {
    headline: "Unverified Allegation Hits Sponsored Athlete",
    description: "An anonymous account claims a sponsored athlete failed a drug test, but no league or official body has confirmed anything.",
    choices: [
      { text: "Release a careful holding statement, support due process, monitor verified sources, and prepare messages for each outcome.", impact: 9 },
      { text: "Insult the anonymous account and declare the rumor fake without checking.", impact: -7 },
      { text: "Cancel the sponsorship immediately before facts are known.", impact: -8 }
    ]
  },
  {
    headline: "Major Outage Creates Customer Anger",
    description: "A travel company's app fails during a holiday weekend, creating long lines, missed bookings, and nonstop angry posts.",
    choices: [
      { text: "Open a live status page, update every 20 minutes, add support staff, waive fees, and explain compensation clearly.", impact: 13 },
      { text: "Tell customers they should have planned better during a busy weekend.", impact: -14 },
      { text: "Only help high-follower accounts so the public timeline looks calmer.", impact: -9 }
    ]
  },
  {
    headline: "Product Complaints Raise Safety Concerns",
    description: "Customers report rashes after using a newly launched skincare serum, and screenshots of deleted complaints are spreading.",
    choices: [
      { text: "Pause sales, collect batch numbers, offer refunds, bring in dermatology testing, and publish safety updates.", impact: 12 },
      { text: "Suggest customers probably used the product incorrectly.", impact: -12 },
      { text: "Delete complaint comments to keep the launch page positive.", impact: -15 }
    ]
  },
  {
    headline: "Creative Theft Claim Threatens Launch",
    description: "Side-by-side images make a new campaign look copied from an independent artist, and the artist's supporters are tagging journalists.",
    choices: [
      { text: "Contact the artist, investigate asset origins, pause disputed creative, and commit to credit or compensation if valid.", impact: 11 },
      { text: "Post that the idea is common and the artist is chasing attention.", impact: -10 },
      { text: "Delay any response until the launch numbers are already public.", impact: -8 }
    ]
  },
  {
    headline: "Live Demo Failure Becomes a Meme",
    description: "A high-profile product demo freezes during a livestream, and clips are spreading with claims that the company overpromised.",
    choices: [
      { text: "Own the failure, explain what happened, publish the fix timeline, and invite press to a transparent retest.", impact: 12 },
      { text: "Claim the failure was actually part of the plan.", impact: -9 },
      { text: "Remove the livestream replay and avoid all questions.", impact: -11 }
    ]
  },
  {
    headline: "Private Customer Data Accidentally Leaks",
    description: "A spreadsheet with customer emails and support notes is briefly exposed online, and screenshots are already circulating.",
    choices: [
      { text: "Confirm what happened, notify affected customers, explain protective steps, and publish a security improvement plan.", impact: 13 },
      { text: "Wait to see if the screenshots disappear before saying anything.", impact: -13 },
      { text: "Call it a tiny technical hiccup and avoid using the word leak.", impact: -10 }
    ]
  },
  {
    headline: "Employee Walkout Reaches the Press",
    description: "Employees protest working conditions at a fictional company, and journalists are asking for a response before the evening news.",
    choices: [
      { text: "Acknowledge employee concerns, schedule leadership meetings, protect workers from retaliation, and share next steps.", impact: 11 },
      { text: "Tell reporters the walkout is just a few dramatic employees.", impact: -12 },
      { text: "Send security to remove signs and refuse to comment.", impact: -14 }
    ]
  },
  {
    headline: "Brand Ambassador Arrested Overnight",
    description: "A celebrity ambassador for your campaign is arrested, but details are unclear and the campaign launches tomorrow morning.",
    choices: [
      { text: "Pause ambassador content, release a measured holding statement, and review the partnership as verified facts emerge.", impact: 10 },
      { text: "Delete every photo immediately and pretend the partnership never existed.", impact: -8 },
      { text: "Defend the ambassador aggressively before knowing the charges.", impact: -12 }
    ]
  },
  {
    headline: "Old Executive Email Resurfaces",
    description: "An old internal email with dismissive language about customers is leaked, raising questions about leadership values.",
    choices: [
      { text: "Address the email directly, apologize for the language, show what changed, and announce an independent culture review.", impact: 12 },
      { text: "Say the email is old, so nobody should care anymore.", impact: -11 },
      { text: "Attack the person who leaked it instead of answering the values question.", impact: -13 }
    ]
  },
  {
    headline: "Recall Rumor Hits Before Legal Approval",
    description: "Reports claim your product will be recalled, but legal and operations teams are still confirming the scope.",
    choices: [
      { text: "Issue a safety-first holding statement, tell customers what to stop using for now, and promise verified updates quickly.", impact: 11 },
      { text: "Deny everything until legal has the perfect statement.", impact: -12 },
      { text: "Leak partial information to a friendly influencer to soften the story.", impact: -9 }
    ]
  }
];

const levels = [
  {
    name: "Signal Control",
    startsAt: 0,
    copy: "Handle fast-moving headlines and basic public trust problems."
  },
  {
    name: "Stakeholder Orbit",
    startsAt: 5,
    copy: "Advocates, sponsors, and angry customers are watching every word."
  },
  {
    name: "Blackout Protocol",
    startsAt: 10,
    copy: "High-risk crises are live. Move fast, stay honest, and protect the mission."
  }
];

const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const levelScreen = document.querySelector("#levelScreen");
const finalScreen = document.querySelector("#finalScreen");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const audioToggle = document.querySelector("#audioToggle");
const scenarioCount = document.querySelector("#scenarioCount");
const levelNumber = document.querySelector("#levelNumber");
const levelName = document.querySelector("#levelName");
const levelBadge = document.querySelector("#levelBadge");
const levelTitle = document.querySelector("#levelTitle");
const levelCopy = document.querySelector("#levelCopy");
const scoreDisplay = document.querySelector("#scoreDisplay");
const timerChip = document.querySelector("#timerChip");
const timerDisplay = document.querySelector("#timerDisplay");
const progressFill = document.querySelector("#progressFill");
const crisisCard = document.querySelector("#crisisCard");
const headline = document.querySelector("#headline");
const description = document.querySelector("#description");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#finalScore");
const ratingTitle = document.querySelector("#ratingTitle");
const ratingCopy = document.querySelector("#ratingCopy");
const canvas = document.querySelector("#particles");
const ctx = canvas.getContext("2d");

let currentScenario = 0;
let reputation = 50;
let timeLeft = 15;
let timerInterval;
let questionLocked = false;
let audioContext;
let musicNodes = [];
let musicMaster;
let melodyTimer;
let melodyStep = 0;
let musicEnabled = true;
let particles = [];

function showScreen(screen) {
  [startScreen, gameScreen, levelScreen, finalScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function startGame() {
  currentScenario = 0;
  reputation = 50;
  scoreDisplay.textContent = reputation;
  showScreen(gameScreen);
  startMusic();
  renderScenario();
}

function renderScenario() {
  const scenario = scenarios[currentScenario];
  const level = getCurrentLevel();
  questionLocked = false;
  scenarioCount.textContent = `${currentScenario + 1} / ${scenarios.length}`;
  levelNumber.textContent = `Level ${level.index + 1}`;
  levelName.textContent = level.name;
  progressFill.style.width = `${(currentScenario / scenarios.length) * 100}%`;
  headline.textContent = scenario.headline;
  description.textContent = scenario.description;
  feedback.textContent = "";
  feedback.className = "feedback";
  choices.innerHTML = "";

  scenario.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = choice.text;
    button.addEventListener("click", () => chooseResponse(choice, button));
    choices.appendChild(button);
  });

  crisisCard.classList.remove("swap");
  window.requestAnimationFrame(() => crisisCard.classList.add("swap"));
  startQuestionTimer();
}

function chooseResponse(choice, selectedButton) {
  if (questionLocked) {
    return;
  }

  questionLocked = true;
  stopQuestionTimer();

  const isGoodChoice = choice.impact > 0;
  reputation = Math.max(0, Math.min(100, reputation + choice.impact));
  scoreDisplay.textContent = reputation;

  document.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = true;
  });

  selectedButton.classList.add(isGoodChoice ? "correct" : "bad");
  feedback.textContent = isGoodChoice
    ? `Clean launch. Trust Shield ${choice.impact > 0 ? "+" : ""}${choice.impact}.`
    : `Hull breach. Trust Shield ${choice.impact}.`;
  feedback.classList.add(isGoodChoice ? "good" : "bad");

  if (isGoodChoice) {
    playCorrectSound();
  }

  window.setTimeout(() => {
    advanceScenario();
  }, 1250);
}

function startQuestionTimer() {
  stopQuestionTimer();
  timeLeft = 15;
  updateTimerDisplay();

  timerInterval = window.setInterval(() => {
    timeLeft -= 1;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (timerInterval) {
    window.clearInterval(timerInterval);
    timerInterval = undefined;
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = timeLeft;
  timerChip.classList.toggle("warning", timeLeft <= 5);
}

function handleTimeout() {
  if (questionLocked) {
    return;
  }

  questionLocked = true;
  stopQuestionTimer();
  reputation = Math.max(0, reputation - 10);
  scoreDisplay.textContent = reputation;

  document.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = true;
    button.classList.add("bad");
  });

  feedback.textContent = "Signal lost. Trust Shield -10.";
  feedback.className = "feedback bad";

  window.setTimeout(() => {
    advanceScenario();
  }, 1250);
}

function advanceScenario() {
  currentScenario += 1;
  if (currentScenario >= scenarios.length) {
    endGame();
  } else if (isNewLevel(currentScenario)) {
    showLevelIntro();
  } else {
    renderScenario();
  }
}

function getCurrentLevel() {
  let activeLevel = 0;

  levels.forEach((level, index) => {
    if (currentScenario >= level.startsAt) {
      activeLevel = index;
    }
  });

  return { ...levels[activeLevel], index: activeLevel };
}

function isNewLevel(scenarioIndex) {
  return levels.some((level) => level.startsAt === scenarioIndex && scenarioIndex !== 0);
}

function showLevelIntro() {
  const level = getCurrentLevel();
  stopQuestionTimer();
  timerChip.classList.remove("warning");
  levelBadge.textContent = `Level ${level.index + 1} Unlocked`;
  levelTitle.textContent = level.name;
  levelCopy.textContent = level.copy;
  showScreen(levelScreen);

  window.setTimeout(() => {
    showScreen(gameScreen);
    renderScenario();
  }, 1800);
}

function endGame() {
  stopQuestionTimer();
  timerChip.classList.remove("warning");
  progressFill.style.width = "100%";
  finalScore.textContent = reputation;
  const rating = getRating(reputation);
  ratingTitle.textContent = rating.title;
  ratingCopy.textContent = rating.copy;
  showScreen(finalScreen);
}

function getRating(score) {
  if (score >= 90) {
    return {
      title: "PR Legend",
      copy: "You piloted every reputation storm like a deep-space legend. The command deck is glowing."
    };
  }
  if (score >= 72) {
    return {
      title: "Crisis Expert",
      copy: "Sharp instincts, clear messages, and enough calm to keep the mission on course."
    };
  }
  if (score >= 50) {
    return {
      title: "Communications Officer",
      copy: "You kept the shield mostly stable, though a few calls drifted too close to the asteroid belt."
    };
  }
  return {
    title: "PR Intern",
    copy: "The comms console sparked a little. Restart the mission and rebuild the Trust Shield."
  };
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function startMusic() {
  if (!musicEnabled || musicMaster) {
    return;
  }

  ensureAudio();

  musicMaster = audioContext.createGain();
  musicMaster.gain.setValueAtTime(0.001, audioContext.currentTime);
  musicMaster.gain.exponentialRampToValueAtTime(0.085, audioContext.currentTime + 1.2);
  musicMaster.connect(audioContext.destination);

  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 980;
  filter.Q.value = 0.7;
  filter.connect(musicMaster);

  const padNotes = [110, 146.83, 196, 246.94];
  musicNodes = padNotes.map((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.value = index === 0 ? 0.18 : 0.07;
    oscillator.connect(gain);
    gain.connect(filter);
    oscillator.start();
    return { oscillator, gain };
  });

  playMusicPulse();
  melodyTimer = window.setInterval(playMusicPulse, 520);
}

function stopMusic() {
  if (melodyTimer) {
    window.clearInterval(melodyTimer);
    melodyTimer = undefined;
  }

  if (musicMaster) {
    musicMaster.gain.setTargetAtTime(0.001, audioContext.currentTime, 0.08);
  }

  musicNodes.forEach(({ oscillator, gain }) => {
    gain.gain.setTargetAtTime(0.001, audioContext.currentTime, 0.08);
    oscillator.stop(audioContext.currentTime + 0.35);
  });
  musicNodes = [];

  window.setTimeout(() => {
    if (musicMaster) {
      musicMaster.disconnect();
      musicMaster = undefined;
    }
  }, 420);
}

function playMusicPulse() {
  if (!musicEnabled || !musicMaster) {
    return;
  }

  const pattern = [392, 587.33, 739.99, 659.25, 493.88, 659.25, 880, 739.99];
  const bassPattern = [55, 55, 73.42, 73.42, 61.74, 61.74, 82.41, 82.41];
  const now = audioContext.currentTime;
  const note = pattern[melodyStep % pattern.length];
  const bass = bassPattern[melodyStep % bassPattern.length];

  playSoftNote(note, now, 0.38, 0.08, "sine");
  if (melodyStep % 2 === 0) {
    playSoftNote(bass, now, 0.72, 0.055, "triangle");
  }

  melodyStep += 1;
}

function playSoftNote(frequency, startTime, duration, volume, type) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(musicMaster);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.05);
}

function playCorrectSound() {
  if (!musicEnabled) {
    return;
  }
  ensureAudio();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(990, audioContext.currentTime + 0.16);
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.16, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.26);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.28);
}

function toggleAudio() {
  musicEnabled = !musicEnabled;
  audioToggle.textContent = musicEnabled ? "Music On" : "Music Off";
  audioToggle.setAttribute("aria-pressed", String(musicEnabled));

  if (musicEnabled && gameScreen.classList.contains("active")) {
    startMusic();
  } else if (!musicEnabled && musicNodes.length > 0) {
    stopMusic();
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.min(150, Math.floor(window.innerWidth / 9));
  const colors = ["142, 229, 255", "188, 126, 255", "255, 255, 255", "81, 255, 192"];
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 1.9 + 0.45,
    speedX: (Math.random() - 0.5) * 0.18,
    speedY: Math.random() * 0.2 + 0.04,
    alpha: Math.random() * 0.62 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0) particle.x = window.innerWidth;
    if (particle.x > window.innerWidth) particle.x = 0;
    if (particle.y < 0) particle.y = window.innerHeight;
    if (particle.y > window.innerHeight) particle.y = 0;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 110) {
        ctx.strokeStyle = `rgba(40, 215, 255, ${0.12 - distance / 1000})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  window.requestAnimationFrame(animateParticles);
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
audioToggle.addEventListener("click", toggleAudio);
window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateParticles();
