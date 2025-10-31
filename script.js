// Navegação mobile
(function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
    }
})();

// Smooth scroll para âncoras internas
(function(){
    document.addEventListener('click', function(e){
        const t = e.target;
        if (t instanceof HTMLAnchorElement && t.hash && t.getAttribute('href')?.startsWith('#')) {
            const el = document.querySelector(t.hash);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
})();

// Voltar ao topo e Scroll Spy
(function(){
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 400 ? 'inline-block' : 'none';
        });
    }

    // Scroll spy para nav e TOC
    const sectionIds = ['introducao','historia','estrategias','iniciante','mestres','cerebro','eventos','guia-visual','aberturas','taticas','meiojogo','finais'];
    const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const anchorMap = new Map();
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        const id = a.getAttribute('href')?.slice(1);
        if (id) {
            const arr = anchorMap.get(id) || [];
            arr.push(a);
            anchorMap.set(id, arr);
        }
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const anchors = id ? anchorMap.get(id) : undefined;
            if (!anchors) return;
            anchors.forEach(a => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    a.classList.add('active');
                } else {
                    a.classList.remove('active');
                }
            });
        });
    }, { rootMargin: '0px 0px -40% 0px', threshold: [0, 0.5, 1] });
    sections.forEach(sec => observer.observe(sec));
})();

// Ano no footer
(function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Newsletter (validação simples + localStorage)
(function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const hint = document.getElementById('newsletter-hint');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = String(emailInput.value || '').trim();
        const valid = /.+@.+\..+/.test(email);
        if (!valid) {
            hint.textContent = 'Informe um e-mail válido.';
            hint.style.color = '#ffb3b3';
            return;
        }
        const key = 'newsletter-subs';
        const subs = JSON.parse(localStorage.getItem(key) || '[]');
        if (!subs.includes(email)) subs.push(email);
        localStorage.setItem(key, JSON.stringify(subs));
        hint.textContent = 'Obrigado! Você está inscrito.';
        hint.style.color = '#8fe388';
        form.reset();
    });
})();

// Tabuleiro de Xadrez com AI simples
(function () {
    const boardEl = document.getElementById('board');
    if (!boardEl || typeof Chess === 'undefined' || typeof Chessboard === 'undefined') return;

    const statusEl = document.getElementById('status');
    const btnNew = document.getElementById('btn-new');
    const btnUndo = document.getElementById('btn-undo');
    const depthSelect = document.getElementById('ai-depth');

    const game = new Chess();

    const materialValue = {
        p: 100,
        n: 320,
        b: 330,
        r: 500,
        q: 900,
        k: 20000
    };

    function evaluateBoard(chess) {
        const board = chess.board();
        let score = 0;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const piece = board[r][c];
                if (!piece) continue;
                const v = materialValue[piece.type] || 0;
                score += piece.color === 'w' ? v : -v;
            }
        }
        return score;
    }

    function minimaxRoot(depth, isWhite) {
        const moves = game.moves({ verbose: true });
        let bestMove = null;
        let bestScore = isWhite ? -Infinity : Infinity;
        for (const move of moves) {
            game.move(move);
            const score = minimax(depth - 1, -Infinity, Infinity, !isWhite);
            game.undo();
            if (isWhite && score > bestScore) { bestScore = score; bestMove = move; }
            if (!isWhite && score < bestScore) { bestScore = score; bestMove = move; }
        }
        return bestMove;
    }

    function minimax(depth, alpha, beta, isWhite) {
        if (depth === 0 || game.isGameOver()) {
            return evaluateBoard(game);
        }
        const moves = game.moves({ verbose: true });
        if (isWhite) {
            let maxEval = -Infinity;
            for (const move of moves) {
                game.move(move);
                const evalScore = minimax(depth - 1, alpha, beta, false);
                game.undo();
                maxEval = Math.max(maxEval, evalScore);
                alpha = Math.max(alpha, evalScore);
                if (beta <= alpha) break;
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            for (const move of moves) {
                game.move(move);
                const evalScore = minimax(depth - 1, alpha, beta, true);
                game.undo();
                minEval = Math.min(minEval, evalScore);
                beta = Math.min(beta, evalScore);
                if (beta <= alpha) break;
            }
            return minEval;
        }
    }

    function updateStatus() {
        let status = '';
        const moveColor = game.turn() === 'w' ? 'Brancas' : 'Negras';
        if (game.isCheckmate()) {
            status = `Xeque-mate! ${moveColor === 'Brancas' ? 'Negras' : 'Brancas'} vencem.`;
        } else if (game.isDraw()) {
            status = 'Empate.';
        } else {
            status = `${moveColor} a jogar${game.isCheck() ? ' (xeque!)' : ''}.`;
        }
        if (statusEl) statusEl.textContent = status;
    }

    const board = Chessboard('board', {
        draggable: true,
        position: 'start',
        moveSpeed: 150,
        snapSpeed: 50,
        snapbackSpeed: 50,
        onDragStart: (source, piece) => {
            if (game.isGameOver()) return false;
            if ((game.turn() === 'w' && piece.startsWith('b')) || (game.turn() === 'b' && piece.startsWith('w'))) return false;
            return true;
        },
        onDrop: (source, target) => {
            const move = game.move({ from: source, to: target, promotion: 'q' });
            if (move == null) return 'snapback';
            window.requestAnimationFrame(botPlay);
            updateStatus();
        },
        onSnapEnd: () => {
            board.position(game.fen());
        }
    });

    function botPlay() {
        if (game.isGameOver()) return;
        if (game.turn() === 'b') {
            const depth = parseInt(depthSelect?.value || '2', 10);
            const best = minimaxRoot(depth, false);
            if (best) game.move(best);
            board.position(game.fen());
            updateStatus();
        }
    }

    btnNew?.addEventListener('click', () => {
        game.reset();
        board.start();
        updateStatus();
    });
    btnUndo?.addEventListener('click', () => {
        game.undo();
        game.undo();
        board.position(game.fen());
        updateStatus();
    });

    updateStatus();
})();


