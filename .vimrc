
" plugins
Plug 'tpope/vim-surround'
Plug 'machakann/vim-highlightedyank'
Plug 'preservim/nerdtree'
Plug 'vim-scripts/argtextobj.vim'


" nerdtree config
let NERDTreeQuitOnOpen = 1
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1

" register leader
let mapleader = " "

map <leader>tt :NERDTreeToggle<Enter>
