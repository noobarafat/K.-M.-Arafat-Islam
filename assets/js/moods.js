// ==================== Mood Switcher Functionality ====================

// Mood configuration
const MOODS = [
    { id: 'happy', emoji: '😄', name: 'Happy', path: 'happy.html' },
    { id: 'chill', emoji: '😎', name: 'Chill', path: 'chill.html' },
    { id: 'love', emoji: '❤️', name: 'Love', path: 'love.html' },
    { id: 'sad', emoji: '😢', name: 'Sad', path: 'sad.html' },
    { id: 'angry', emoji: '😤', name: 'Angry', path: 'angry.html' }
];

// Get current mood from body class or URL
function getCurrentMood() {
    const bodyClasses = document.body.classList;
    for (const mood of MOODS) {
        if (bodyClasses.contains(`mood-${mood.id}`)) {
            return mood.id;
        }
    }
    
    const pathname = window.location.pathname;
    for (const mood of MOODS) {
        if (pathname.includes(mood.path)) {
            return mood.id;
        }
    }
    
    return null;
}

// Position menu using fixed positioning
function positionMenu() {
    const switchButton = document.querySelector('.switch-mood-btn');
    const moodMenu = document.querySelector('.mood-menu');
    
    if (!switchButton || !moodMenu) return;
    
    const rect = switchButton.getBoundingClientRect();
    const menuWidth = 300;
    const menuMaxWidth = window.innerWidth * 0.92;
    const actualMenuWidth = Math.min(menuWidth, menuMaxWidth);
    
    moodMenu.style.position = 'fixed';
    moodMenu.style.top = `${rect.bottom + 12}px`;
    moodMenu.style.left = `${rect.right - actualMenuWidth}px`;
    moodMenu.style.zIndex = '99999';
    
    if (moodMenu.parentElement !== document.body) {
        document.body.appendChild(moodMenu);
    }
}

// Initialize mood switcher
function initMoodSwitcher() {
    const switchButton = document.querySelector('.switch-mood-btn');
    const moodMenu = document.querySelector('.mood-menu');
    const moodSwitch = document.querySelector('.mood-switch');
    
    if (!switchButton || !moodMenu || !moodSwitch) return;
    
    const currentMood = getCurrentMood();
    
    if (currentMood) {
        moodSwitch.setAttribute('data-current', currentMood);
        const currentItem = moodMenu.querySelector(`[data-mood="${currentMood}"]`);
        if (currentItem) currentItem.remove();
    }
    
    switchButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMoodMenu();
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mood-switch')) {
            closeMoodMenu();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMoodMenu();
        }
    });
    
    window.addEventListener('resize', () => {
        if (moodMenu && !moodMenu.hasAttribute('hidden')) {
            positionMenu();
        }
    });
    
    window.addEventListener('scroll', () => {
        if (moodMenu && !moodMenu.hasAttribute('hidden')) {
            positionMenu();
        }
    });
    
    const moodItems = moodMenu.querySelectorAll('.mood-item');
    moodItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedMood = item.getAttribute('data-mood');
            selectMood(selectedMood);
        });
    });
}

function toggleMoodMenu() {
    const switchButton = document.querySelector('.switch-mood-btn');
    const moodMenu = document.querySelector('.mood-menu');
    
    if (!switchButton || !moodMenu) return;
    
    const isOpen = switchButton.getAttribute('aria-expanded') === 'true';
    
    if (isOpen) {
        closeMoodMenu();
    } else {
        openMoodMenu();
    }
}

function openMoodMenu() {
    const switchButton = document.querySelector('.switch-mood-btn');
    const moodMenu = document.querySelector('.mood-menu');
    
    if (!switchButton || !moodMenu) return;
    
    positionMenu();
    switchButton.setAttribute('aria-expanded', 'true');
    moodMenu.removeAttribute('hidden');
    
    setTimeout(() => {
        moodMenu.classList.add('is-open');
    }, 10);
}

function closeMoodMenu() {
    const switchButton = document.querySelector('.switch-mood-btn');
    const moodMenu = document.querySelector('.mood-menu');
    
    if (!switchButton || !moodMenu) return;
    
    switchButton.setAttribute('aria-expanded', 'false');
    moodMenu.classList.remove('is-open');
    
    setTimeout(() => {
        moodMenu.setAttribute('hidden', '');
    }, 200);
}

function selectMood(moodId) {
    localStorage.setItem('lastMood', moodId);
    const mood = MOODS.find(m => m.id === moodId);
    if (!mood) return;
    
    closeMoodMenu();
    setTimeout(() => {
        window.location.href = mood.path;
    }, 150);
}

// ==================== Mood Activities ====================

const moodActivities = {
    happy: [
        {
            id: 'energize-timer',
            title: 'Energize Timer',
            icon: '⚡',
            description: '2-minute energy boost with prompts',
            render: () => `
                <div class="timer-big" id="energizeDisplay">2:00</div>
                <div class="timer-prompt" id="energizePrompt">Get ready to energize!</div>
                <div class="progress-container">
                    <div class="progress-fill" id="energizeProgress"></div>
                </div>
                <div class="panel-btn-group">
                    <button class="panel-btn panel-btn-primary" id="energizeStart">Start</button>
                    <button class="panel-btn panel-btn-secondary" id="energizePause" style="display:none;">Pause</button>
                    <button class="panel-btn panel-btn-secondary" id="energizeReset" style="display:none;">Reset</button>
                </div>
            `,
            init: () => {
                let time = 120;
                let interval = null;
                let isPaused = false;
                const prompts = ['Smile 😊', 'Stretch 🙆', 'Hydrate 💧', 'Celebrate 🎉'];
                
                const display = document.getElementById('energizeDisplay');
                const prompt = document.getElementById('energizePrompt');
                const progress = document.getElementById('energizeProgress');
                const startBtn = document.getElementById('energizeStart');
                const pauseBtn = document.getElementById('energizePause');
                const resetBtn = document.getElementById('energizeReset');
                
                function updateDisplay() {
                    const mins = Math.floor(time / 60);
                    const secs = time % 60;
                    display.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
                    progress.style.width = `${((120 - time) / 120) * 100}%`;
                }
                
                function start() {
                    if (interval) return;
                    startBtn.style.display = 'none';
                    pauseBtn.style.display = 'inline-block';
                    resetBtn.style.display = 'inline-block';
                    
                    interval = setInterval(() => {
                        if (!isPaused) {
                            time--;
                            updateDisplay();
                            
                            if (time % 30 === 0 && time > 0) {
                                const promptIndex = Math.floor((120 - time) / 30) - 1;
                                prompt.textContent = prompts[promptIndex] || 'Keep going!';
                            }
                            
                            if (time <= 0) {
                                clearInterval(interval);
                                interval = null;
                                prompt.textContent = 'Great job! 🎉';
                                localStorage.setItem('happy_energize_done', Date.now());
                                pauseBtn.style.display = 'none';
                                resetBtn.textContent = 'Done';
                            }
                        }
                    }, 1000);
                }
                
                function pause() {
                    isPaused = !isPaused;
                    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
                }
                
                function reset() {
                    clearInterval(interval);
                    interval = null;
                    time = 120;
                    isPaused = false;
                    updateDisplay();
                    prompt.textContent = 'Get ready to energize!';
                    startBtn.style.display = 'inline-block';
                    pauseBtn.style.display = 'none';
                    resetBtn.style.display = 'none';
                }
                
                startBtn.addEventListener('click', start);
                pauseBtn.addEventListener('click', pause);
                resetBtn.addEventListener('click', reset);
            }
        },
        {
            id: 'gratitude-builder',
            title: 'Gratitude Builder',
            icon: '🙏',
            description: 'Build a list of 3 gratitude items',
            render: () => `
                <input type="text" class="panel-input" id="gratitudeInput" placeholder="I'm grateful for..." />
                <button class="panel-btn panel-btn-primary" id="gratitudeAdd">Add</button>
                <div class="panel-list" id="gratitudeList"></div>
                <div class="success-msg" id="gratitudeSuccess" style="display:none;">Nice! ✅</div>
            `,
            init: () => {
                const input = document.getElementById('gratitudeInput');
                const addBtn = document.getElementById('gratitudeAdd');
                const list = document.getElementById('gratitudeList');
                const success = document.getElementById('gratitudeSuccess');
                
                let items = JSON.parse(localStorage.getItem('happy_gratitude_list') || '[]');
                
                function render() {
                    list.innerHTML = items.map((item, i) => `
                        <div class="panel-list-item">
                            <span>${i + 1}. ${item}</span>
                        </div>
                    `).join('');
                    
                    if (items.length >= 3) {
                        success.style.display = 'block';
                        addBtn.disabled = true;
                        input.disabled = true;
                    }
                }
                
                addBtn.addEventListener('click', () => {
                    const value = input.value.trim();
                    if (value && items.length < 3) {
                        items.push(value);
                        localStorage.setItem('happy_gratitude_list', JSON.stringify(items));
                        input.value = '';
                        render();
                    }
                });
                
                render();
            }
        },
        {
            id: 'share-joy',
            title: 'Share Joy',
            icon: '💬',
            description: 'Generate & copy friendly messages',
            render: () => `
                <div class="panel-textarea" id="shareMessage" style="min-height: 80px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">Click Generate to create a message</div>
                <div class="panel-btn-group">
                    <button class="panel-btn panel-btn-primary" id="shareGenerate">Generate</button>
                    <button class="panel-btn panel-btn-secondary" id="shareCopy" style="display:none;">Copy</button>
                </div>
                <div class="success-msg" id="shareCopied" style="display:none;">Copied! ✅</div>
            `,
            init: () => {
                const messages = [
                    "Hey! Hope you're having an amazing day! 🌟",
                    "Thinking of you and sending positive vibes your way! ✨",
                    "Just wanted to say you're awesome! Keep shining! 💫",
                    "Hope something makes you smile today! 😊",
                    "You've got this! Believe in yourself! 💪"
                ];
                
                const messageEl = document.getElementById('shareMessage');
                const generateBtn = document.getElementById('shareGenerate');
                const copyBtn = document.getElementById('shareCopy');
                const copied = document.getElementById('shareCopied');
                
                generateBtn.addEventListener('click', () => {
                    const msg = messages[Math.floor(Math.random() * messages.length)];
                    messageEl.textContent = msg;
                    messageEl.style.color = 'rgba(255,255,255,0.95)';
                    copyBtn.style.display = 'inline-block';
                    localStorage.setItem('happy_share_message', msg);
                });
                
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(messageEl.textContent);
                    copied.style.display = 'block';
                    setTimeout(() => copied.style.display = 'none', 2000);
                });
                
                const saved = localStorage.getItem('happy_share_message');
                if (saved) {
                    messageEl.textContent = saved;
                    messageEl.style.color = 'rgba(255,255,255,0.95)';
                    copyBtn.style.display = 'inline-block';
                }
            }
        }
    ],
    
    chill: [
        {
            id: 'breathing-4-6',
            title: 'Breathing 4–6',
            icon: '🌬️',
            description: '60s inhale-exhale breathing',
            render: () => `
                <div class="timer-big" id="chillBreathDisplay">60s</div>
                <div class="timer-phase" id="chillBreathPhase">Ready to begin</div>
                <div class="progress-container">
                    <div class="progress-fill" id="chillBreathProgress"></div>
                </div>
                <button class="panel-btn panel-btn-primary" id="chillBreathStart">Start</button>
            `,
            init: () => {
                let time = 60;
                let interval = null;
                let cycle = 0;
                
                const display = document.getElementById('chillBreathDisplay');
                const phase = document.getElementById('chillBreathPhase');
                const progress = document.getElementById('chillBreathProgress');
                const startBtn = document.getElementById('chillBreathStart');
                
                startBtn.addEventListener('click', () => {
                    startBtn.style.display = 'none';
                    interval = setInterval(() => {
                        time--;
                        display.textContent = `${time}s`;
                        progress.style.width = `${((60 - time) / 60) * 100}%`;
                        
                        cycle++;
                        if (cycle <= 4) {
                            phase.textContent = 'Inhale (4s)';
                        } else if (cycle <= 10) {
                            phase.textContent = 'Exhale (6s)';
                        }
                        
                        if (cycle > 10) cycle = 0;
                        
                        if (time <= 0) {
                            clearInterval(interval);
                            phase.textContent = 'Complete! 🎉';
                            localStorage.setItem('chill_breath_done', Date.now());
                        }
                    }, 1000);
                });
            }
        },
        {
            id: 'ambient-focus',
            title: 'Ambient Focus',
            icon: '🎚️',
            description: 'Set your focus level',
            render: () => `
                <div class="slider-container">
                    <div class="slider-label" id="focusLabel">Neutral</div>
                    <input type="range" class="slider" id="focusSlider" min="0" max="100" value="50" />
                </div>
            `,
            init: () => {
                const slider = document.getElementById('focusSlider');
                const label = document.getElementById('focusLabel');
                
                function updateLabel(value) {
                    if (value <= 25) label.textContent = 'Very Calm';
                    else if (value <= 50) label.textContent = 'Calm';
                    else if (value <= 75) label.textContent = 'Neutral';
                    else label.textContent = 'Busy';
                }
                
                const saved = localStorage.getItem('chill_focus_level');
                if (saved) {
                    slider.value = saved;
                    updateLabel(parseInt(saved));
                }
                
                slider.addEventListener('input', (e) => {
                    const val = parseInt(e.target.value);
                    updateLabel(val);
                    localStorage.setItem('chill_focus_level', val);
                });
            }
        },
        {
            id: 'body-scan',
            title: 'Body Scan',
            icon: '🧘',
            description: 'Step-by-step relaxation',
            render: () => `
                <div class="steps-progress" id="bodyScanSteps">
                    <div class="step-dot active"></div>
                    <div class="step-dot"></div>
                    <div class="step-dot"></div>
                    <div class="step-dot"></div>
                    <div class="step-dot"></div>
                </div>
                <div class="timer-phase" id="bodyScanInstruction">Relax your eyes</div>
                <button class="panel-btn panel-btn-primary" id="bodyScanNext">Next</button>
            `,
            init: () => {
                const steps = ['Relax your eyes', 'Release your jaw', 'Drop your shoulders', 'Soften your hands', 'Ground your feet'];
                let currentStep = parseInt(localStorage.getItem('chill_bodyscan_step') || '0');
                
                const instruction = document.getElementById('bodyScanInstruction');
                const nextBtn = document.getElementById('bodyScanNext');
                const dots = document.querySelectorAll('#bodyScanSteps .step-dot');
                
                function update() {
                    instruction.textContent = steps[currentStep];
                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === currentStep);
                    });
                    
                    if (currentStep >= steps.length - 1) {
                        nextBtn.textContent = 'Complete';
                    }
                }
                
                nextBtn.addEventListener('click', () => {
                    currentStep++;
                    if (currentStep >= steps.length) {
                        currentStep = 0;
                        instruction.textContent = 'Well done! 🎉';
                        setTimeout(() => update(), 1500);
                    } else {
                        update();
                    }
                    localStorage.setItem('chill_bodyscan_step', currentStep);
                });
                
                update();
            }
        }
    ],
    
    love: [
        {
            id: 'appreciation-note',
            title: 'Appreciation Note',
            icon: '💕',
            description: 'Write appreciation for someone',
            render: () => `
                <button class="panel-btn panel-btn-secondary" id="lovePrompt">Random Prompt</button>
                <textarea class="panel-textarea" id="loveNote" placeholder="Write about someone you appreciate..." rows="5"></textarea>
                <button class="panel-btn panel-btn-primary" id="loveSave">Save</button>
                <div class="success-msg" id="loveSaved" style="display:none;">Saved! ❤️</div>
            `,
            init: () => {
                const prompts = [
                    'Who made you smile recently?',
                    'Who do you admire and why?',
                    'Who has supported you lately?',
                    'Who would you like to thank?',
                    'Who inspires you?'
                ];
                
                const promptBtn = document.getElementById('lovePrompt');
                const textarea = document.getElementById('loveNote');
                const saveBtn = document.getElementById('loveSave');
                const saved = document.getElementById('loveSaved');
                
                const savedNote = localStorage.getItem('love_note_text');
                if (savedNote) textarea.value = savedNote;
                
                promptBtn.addEventListener('click', () => {
                    textarea.placeholder = prompts[Math.floor(Math.random() * prompts.length)];
                });
                
                saveBtn.addEventListener('click', () => {
                    localStorage.setItem('love_note_text', textarea.value);
                    saved.style.display = 'block';
                    setTimeout(() => saved.style.display = 'none', 2000);
                });
            }
        },
        {
            id: 'connection-ping',
            title: 'Connection Ping',
            icon: '📱',
            description: 'Send a quick message',
            render: () => `
                <div class="chip-group">
                    <div class="chip" data-type="friend">Friend</div>
                    <div class="chip" data-type="family">Family</div>
                    <div class="chip" data-type="partner">Partner</div>
                </div>
                <div class="panel-textarea" id="pingMessage" style="min-height: 80px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">Select a person type</div>
                <button class="panel-btn panel-btn-secondary" id="pingCopy" style="display:none;">Copy Message</button>
            `,
            init: () => {
                const messages = {
                    friend: "Hey! Just thinking about you. Hope you're doing great! 😊",
                    family: "Hi! Miss you. Hope all is well with you! ❤️",
                    partner: "Thinking of you right now. Love you! 💕"
                };
                
                const chips = document.querySelectorAll('.chip');
                const messageEl = document.getElementById('pingMessage');
                const copyBtn = document.getElementById('pingCopy');
                
                const savedType = localStorage.getItem('love_ping_type');
                
                chips.forEach(chip => {
                    if (chip.dataset.type === savedType) {
                        chip.classList.add('selected');
                        messageEl.textContent = messages[savedType];
                        messageEl.style.color = 'rgba(255,255,255,0.95)';
                        copyBtn.style.display = 'inline-block';
                    }
                    
                    chip.addEventListener('click', () => {
                        chips.forEach(c => c.classList.remove('selected'));
                        chip.classList.add('selected');
                        const type = chip.dataset.type;
                        messageEl.textContent = messages[type];
                        messageEl.style.color = 'rgba(255,255,255,0.95)';
                        copyBtn.style.display = 'inline-block';
                        localStorage.setItem('love_ping_type', type);
                    });
                });
                
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(messageEl.textContent);
                });
            }
        },
        {
            id: 'kindness-challenge',
            title: 'Kindness Challenge',
            icon: '✨',
            description: 'Complete a small kindness act',
            render: () => `
                <div class="panel-list">
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind1" data-id="1" />
                        <label for="kind1">Send a compliment to someone</label>
                    </div>
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind2" data-id="2" />
                        <label for="kind2">Help someone with a task</label>
                    </div>
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind3" data-id="3" />
                        <label for="kind3">Share something helpful</label>
                    </div>
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind4" data-id="4" />
                        <label for="kind4">Listen to someone's story</label>
                    </div>
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind5" data-id="5" />
                        <label for="kind5">Surprise someone with a gift</label>
                    </div>
                    <div class="panel-list-item">
                        <input type="checkbox" id="kind6" data-id="6" />
                        <label for="kind6">Express gratitude to someone</label>
                    </div>
                </div>
                <div class="success-msg" id="kindSuccess" style="display:none;">✨ Wonderful! ✨</div>
            `,
            init: () => {
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                const success = document.getElementById('kindSuccess');
                const saved = localStorage.getItem('love_kind_task');
                
                if (saved) {
                    const checkbox = document.querySelector(`[data-id="${saved}"]`);
                    if (checkbox) checkbox.checked = true;
                }
                
                checkboxes.forEach(cb => {
                    cb.addEventListener('change', (e) => {
                        if (e.target.checked) {
                            localStorage.setItem('love_kind_task', e.target.dataset.id);
                            success.style.display = 'block';
                            setTimeout(() => success.style.display = 'none', 2000);
                        }
                    });
                });
            }
        }
    ],
    
    sad: [
        {
            id: 'grounding-5-4-3-2-1',
            title: 'Grounding 5-4-3-2-1',
            icon: '🌿',
            description: 'Interactive sensory grounding',
            render: () => `
                <div class="panel-list">
                    <div class="panel-list-item">
                        <input type="text" placeholder="5 things you see" id="ground1" />
                    </div>
                    <div class="panel-list-item">
                        <input type="text" placeholder="4 things you feel" id="ground2" />
                    </div>
                    <div class="panel-list-item">
                        <input type="text" placeholder="3 things you hear" id="ground3" />
                    </div>
                    <div class="panel-list-item">
                        <input type="text" placeholder="2 things you smell" id="ground4" />
                    </div>
                    <div class="panel-list-item">
                        <input type="text" placeholder="1 thing you taste" id="ground5" />
                    </div>
                </div>
                <div class="success-msg">Progress: <span id="groundProgress">0/5</span></div>
            `,
            init: () => {
                const inputs = [1,2,3,4,5].map(i => document.getElementById(`ground${i}`));
                const progress = document.getElementById('groundProgress');
                
                const saved = JSON.parse(localStorage.getItem('sad_grounding_data') || '[]');
                inputs.forEach((input, i) => {
                    if (saved[i]) input.value = saved[i];
                });
                
                function updateProgress() {
                    const filled = inputs.filter(input => input.value.trim()).length;
                    progress.textContent = `${filled}/5`;
                    
                    const data = inputs.map(input => input.value);
                    localStorage.setItem('sad_grounding_data', JSON.stringify(data));
                }
                
                inputs.forEach(input => {
                    input.addEventListener('input', updateProgress);
                });
                
                updateProgress();
            }
        },
        {
            id: 'comfort-plan',
            title: 'Comfort Plan',
            icon: '🫂',
            description: 'Choose a comfort action',
            render: () => `
                <div class="chip-group">
                    <div class="chip" data-action="water">Drink water</div>
                    <div class="chip" data-action="shower">Warm shower</div>
                    <div class="chip" data-action="text">Text someone</div>
                </div>
                <div class="success-msg" id="comfortNext" style="display:none;">Do this next: <span id="comfortAction"></span></div>
            `,
            init: () => {
                const chips = document.querySelectorAll('.chip');
                const nextMsg = document.getElementById('comfortNext');
                const actionSpan = document.getElementById('comfortAction');
                
                const actions = {
                    water: 'Get a glass of water 💧',
                    shower: 'Take a warm shower 🚿',
                    text: 'Reach out to someone 💬'
                };
                
                const saved = localStorage.getItem('sad_comfort_choice');
                if (saved) {
                    const chip = document.querySelector(`[data-action="${saved}"]`);
                    if (chip) {
                        chip.classList.add('selected');
                        actionSpan.textContent = actions[saved];
                        nextMsg.style.display = 'block';
                    }
                }
                
                chips.forEach(chip => {
                    chip.addEventListener('click', () => {
                        chips.forEach(c => c.classList.remove('selected'));
                        chip.classList.add('selected');
                        const action = chip.dataset.action;
                        actionSpan.textContent = actions[action];
                        nextMsg.style.display = 'block';
                        localStorage.setItem('sad_comfort_choice', action);
                    });
                });
            }
        },
        {
            id: 'mini-journal-gentle',
            title: 'Mini Journal (Gentle)',
            icon: '📔',
            description: 'Compassionate self-reflection',
            render: () => `
                <textarea class="panel-textarea" id="sadJournal" placeholder="What would you say to a friend feeling this way?" rows="6"></textarea>
                <button class="panel-btn panel-btn-primary" id="sadJournalSave">Save</button>
                <div class="success-msg" id="sadJournalSaved" style="display:none;">Saved with care 💙</div>
            `,
            init: () => {
                const textarea = document.getElementById('sadJournal');
                const saveBtn = document.getElementById('sadJournalSave');
                const saved = document.getElementById('sadJournalSaved');
                
                const savedText = localStorage.getItem('sad_journal_text');
                if (savedText) textarea.value = savedText;
                
                saveBtn.addEventListener('click', () => {
                    localStorage.setItem('sad_journal_text', textarea.value);
                    saved.style.display = 'block';
                    setTimeout(() => saved.style.display = 'none', 2000);
                });
            }
        }
    ],
    
    angry: [
        {
            id: 'release-breath',
            title: 'Release Breath',
            icon: '💨',
            description: '45s exhale-focused breathing',
            render: () => `
                <div class="timer-big" id="angryBreathDisplay">45s</div>
                <div class="timer-phase" id="angryBreathPhase">Ready to release</div>
                <div class="progress-container">
                    <div class="progress-fill" id="angryBreathProgress"></div>
                </div>
                <button class="panel-btn panel-btn-primary" id="angryBreathStart">Start</button>
            `,
            init: () => {
                let time = 45;
                let interval = null;
                let cycle = 0;
                
                const display = document.getElementById('angryBreathDisplay');
                const phase = document.getElementById('angryBreathPhase');
                const progress = document.getElementById('angryBreathProgress');
                const startBtn = document.getElementById('angryBreathStart');
                
                startBtn.addEventListener('click', () => {
                    startBtn.style.display = 'none';
                    interval = setInterval(() => {
                        time--;
                        display.textContent = `${time}s`;
                        progress.style.width = `${((45 - time) / 45) * 100}%`;
                        
                        cycle++;
                        if (cycle <= 3) {
                            phase.textContent = 'Inhale (3s)';
                        } else if (cycle <= 9) {
                            phase.textContent = 'Exhale slowly (6s)';
                        }
                        
                        if (cycle > 9) cycle = 0;
                        
                        if (time <= 0) {
                            clearInterval(interval);
                            phase.textContent = 'Tension released 🌊';
                            localStorage.setItem('angry_release_done', Date.now());
                        }
                    }, 1000);
                });
            }
        },
        {
            id: 'tension-reset',
            title: 'Tension Reset',
            icon: '💪',
            description: '3-step muscle release',
            render: () => `
                <div class="timer-big" id="tensionTimer">Ready</div>
                <div class="timer-phase" id="tensionStep">Step 1: Clench fists (5s)</div>
                <button class="panel-btn panel-btn-primary" id="tensionStart">Start</button>
            `,
            init: () => {
                const steps = [
                    { text: 'Clench fists', duration: 5 },
                    { text: 'Release & breathe', duration: 5 },
                    { text: 'Roll shoulders', duration: 10 }
                ];
                
                let currentStep = 0;
                let time = 0;
                let interval = null;
                
                const timer = document.getElementById('tensionTimer');
                const stepEl = document.getElementById('tensionStep');
                const startBtn = document.getElementById('tensionStart');
                
                function runStep() {
                    const step = steps[currentStep];
                    time = step.duration;
                    stepEl.textContent = `Step ${currentStep + 1}: ${step.text}`;
                    
                    interval = setInterval(() => {
                        time--;
                        timer.textContent = `${time}s`;
                        
                        if (time <= 0) {
                            clearInterval(interval);
                            currentStep++;
                            
                            if (currentStep < steps.length) {
                                setTimeout(runStep, 1000);
                            } else {
                                stepEl.textContent = 'Complete! Tension released 🌟';
                                timer.textContent = 'Done';
                                localStorage.setItem('angry_reset_done', Date.now());
                            }
                        }
                    }, 1000);
                }
                
                startBtn.addEventListener('click', () => {
                    startBtn.style.display = 'none';
                    runStep();
                });
            }
        },
        {
            id: 'trigger-map',
            title: 'Trigger Map',
            icon: '🗺️',
            description: 'Understand your boundaries',
            render: () => `
                <input type="text" class="panel-input" id="triggerWhat" placeholder="What happened?" />
                <input type="text" class="panel-input" id="triggerBoundary" placeholder="What boundary was crossed?" />
                <button class="panel-btn panel-btn-primary" id="triggerSave">Save</button>
                <div class="success-msg" id="triggerSaved" style="display:none;">Understanding noted 📝</div>
            `,
            init: () => {
                const whatInput = document.getElementById('triggerWhat');
                const boundaryInput = document.getElementById('triggerBoundary');
                const saveBtn = document.getElementById('triggerSave');
                const saved = document.getElementById('triggerSaved');
                
                const savedData = JSON.parse(localStorage.getItem('angry_trigger_map') || '{}');
                if (savedData.what) whatInput.value = savedData.what;
                if (savedData.boundary) boundaryInput.value = savedData.boundary;
                
                saveBtn.addEventListener('click', () => {
                    const data = {
                        what: whatInput.value,
                        boundary: boundaryInput.value
                    };
                    localStorage.setItem('angry_trigger_map', JSON.stringify(data));
                    saved.style.display = 'block';
                    setTimeout(() => saved.style.display = 'none', 2000);
                });
            }
        }
    ]
};

// ==================== Toolkit Rendering ====================

let currentPanel = null;
let originalPanelParent = null;
let originalPanelNextSibling = null;

// Activity hint messages per mood
const activityHints = {
    happy: "Pick an activity card to boost your vibe — click to start →",
    chill: "Tap an activity card to relax your mind — click to start →",
    love: "Choose a card to feel more connected — click to start →",
    sad: "Click a card for a gentle step right now — click to start →",
    angry: "Click a card to release tension safely — click to start →"
};

function isMobileView() {
    return window.innerWidth <= 768;
}

function initMoodToolkit() {
    const mood = getCurrentMood();
    if (!mood || !moodActivities[mood]) return;
    
    const toolkit = document.getElementById('moodToolkit');
    const panel = document.getElementById('activityPanel');
    const hint = document.getElementById('activityHint');
    
    if (!toolkit || !panel) return;
    
    // Store original panel position for restoring later
    if (!originalPanelParent) {
        originalPanelParent = panel.parentElement;
        originalPanelNextSibling = panel.nextSibling;
    }
    
    // Set activity hint text
    if (hint && activityHints[mood]) {
        hint.textContent = activityHints[mood];
    }
    
    const activities = moodActivities[mood];
    
    toolkit.innerHTML = activities.map(activity => {
        const completionKeys = [
            `${mood}_${activity.id.replace(/-/g, '_')}_done`,
            `${mood}_${activity.id.replace(/-/g, '_')}_list`,
            `${mood}_${activity.id.replace(/-/g, '_')}_text`,
            `${mood}_${activity.id.replace(/-/g, '_')}_message`
        ];
        const isCompleted = completionKeys.some(key => localStorage.getItem(key));
        
        return `
            <div class="activity-card" data-activity="${activity.id}">
                ${isCompleted ? '<span class="activity-card-status">✅ Completed</span>' : ''}
                <span class="activity-card-icon">${activity.icon}</span>
                <h3 class="activity-card-title">${activity.title}</h3>
                <p class="activity-card-desc">${activity.description}</p>
            </div>
        `;
    }).join('');
    
    const cards = toolkit.querySelectorAll('.activity-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const activityId = card.dataset.activity;
            const activity = activities.find(a => a.id === activityId);
            
            if (activity) {
                openActivityPanel(activity, card);
            }
        });
    });
}

function openActivityPanel(activity, card) {
    const panel = document.getElementById('activityPanel');
    const cards = document.querySelectorAll('.activity-card');
    
    if (currentPanel === activity.id && panel.classList.contains('open')) {
        closeActivityPanel();
        return;
    }
    
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    
    panel.innerHTML = `
        <div class="panel-header">
            <h3 class="panel-title">${activity.icon} ${activity.title}</h3>
            <button class="panel-close">×</button>
        </div>
        <div class="panel-content">
            ${activity.render()}
        </div>
    `;
    
    panel.classList.add('open');
    currentPanel = activity.id;
    
    // On mobile, move panel right after the clicked card
    if (isMobileView()) {
        panel.classList.add('mobile-inline');
        card.insertAdjacentElement('afterend', panel);
        
        // Smooth scroll to panel with slight offset
        setTimeout(() => {
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.scrollBy({ top: -16, left: 0, behavior: 'smooth' });
            }, 100);
        }, 50);
    } else {
        panel.classList.remove('mobile-inline');
        // Ensure panel is in original position on desktop
        restorePanelToOriginalPosition();
    }
    
    activity.init();
    
    panel.querySelector('.panel-close').addEventListener('click', closeActivityPanel);
}

function closeActivityPanel() {
    const panel = document.getElementById('activityPanel');
    const cards = document.querySelectorAll('.activity-card');
    
    panel.classList.remove('open');
    panel.classList.remove('mobile-inline');
    cards.forEach(c => c.classList.remove('active'));
    currentPanel = null;
    
    // Restore panel to original position
    restorePanelToOriginalPosition();
}

function restorePanelToOriginalPosition() {
    const panel = document.getElementById('activityPanel');
    
    if (!panel || !originalPanelParent) return;
    
    // Only move if it's not already in the correct position
    if (panel.parentElement !== originalPanelParent) {
        if (originalPanelNextSibling) {
            originalPanelParent.insertBefore(panel, originalPanelNextSibling);
        } else {
            originalPanelParent.appendChild(panel);
        }
    }
}

// Handle view changes (mobile ↔ desktop)
let lastWasMobile = isMobileView();

const handleToolkitResize = debounce(() => {
    const currentIsMobile = isMobileView();
    
    // If we crossed the mobile/desktop boundary
    if (currentIsMobile !== lastWasMobile) {
        lastWasMobile = currentIsMobile;
        
        const panel = document.getElementById('activityPanel');
        if (panel && panel.classList.contains('open')) {
            // Restore panel to original position when switching viewports
            if (!currentIsMobile) {
                panel.classList.remove('mobile-inline');
                restorePanelToOriginalPosition();
            }
        }
    }
}, 250);

// ==================== Video Smart Autoplay ====================

function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function buildYouTubeURL(videoId, isMobile) {
    const origin = encodeURIComponent(window.location.origin);
    const baseUrl = `https://www.youtube.com/embed/${videoId}`;
    
    const params = new URLSearchParams({
        autoplay: isMobile ? '0' : '1',
        mute: isMobile ? '0' : '1',
        playsinline: '1',
        controls: '1',
        modestbranding: '1',
        rel: '0',
        origin: origin
    });
    
    return `${baseUrl}?${params.toString()}`;
}

function initVideoEmbeds() {
    const iframes = document.querySelectorAll('.video-shell iframe');
    
    iframes.forEach(iframe => {
        const videoShell = iframe.closest('.video-shell');
        if (!videoShell) return;
        
        const videoId = videoShell.getAttribute('data-video-id');
        if (!videoId) return;
        
        const isMobile = isMobileDevice();
        const newSrc = buildYouTubeURL(videoId, isMobile);
        
        // Only update if different to avoid unnecessary reload
        if (iframe.src !== newSrc) {
            iframe.src = newSrc;
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize events (debounced to avoid excessive reloads)
let lastIsMobile = isMobileDevice();

const handleResize = debounce(() => {
    const currentIsMobile = isMobileDevice();
    
    // Only reinitialize if we crossed the mobile/desktop boundary
    if (currentIsMobile !== lastIsMobile) {
        lastIsMobile = currentIsMobile;
        initVideoEmbeds();
    }
}, 250);

// ==================== Initialize ====================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initMoodSwitcher();
        initMoodToolkit();
        initVideoEmbeds();
        window.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleToolkitResize);
    });
} else {
    initMoodSwitcher();
    initMoodToolkit();
    initVideoEmbeds();
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleToolkitResize);
}
