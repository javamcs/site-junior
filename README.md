# Site Junior Chauk - Músico e Produtor

Site pessoal do baixista Jazz Fusion Junior Chauk, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 📁 Estrutura do Projeto

```
site-junior/
├── index.html          # Página principal
├── styles.css          # Estilos CSS organizados
├── scripts.js          # JavaScript para interatividade
├── images/             # Imagens do site
│   ├── background-sessao-1.jpg
│   ├── background-sessao-2.jpg
│   ├── background-sessao-3.jpg
│   ├── background-sessao-4.jpg
│   ├── sessao-2-img1.png
│   ├── sessao-2-img2.png
│   ├── sessao-4-img1.jpg
│   ├── sessao-4-img2.webp
│   ├── sessao5-img1.jpg
│   ├── sessao5-img2.png
│   ├── capa-de-album-sessao-1.png
│   ├── apple_icon.svg
│   ├── deezer_icon.png
│   └── favicon.png
└── README.md           # Esta documentação
```

## 🎨 Seções do Site

### 1. Hero (Primeira Seção)
- Apresentação do artista
- Informações sobre o estilo musical (Jazz Fusion)
- Album "Charlestone" com links para plataformas (Spotify, Apple Music, Deezer)

### 2. Lançamentos (Segunda Seção)
- Vídeos no YouTube:
  - "Ligeiro Lá Vem Chuva - Junior Chauk"
  - "Especial Junior Chauk COMPLETO"

### 3. Meus Trabalhos (Terceira Seção)
- Músico Autoral Independente (Facebook)
- Instrumentista Baixista (Facebook)
- Produtor de Áudio e Vídeo de Shows (YouTube)

### 4. Produções em Audiovisual (Quarta Seção)
- Gilberto França - Você e Eu DVD Verso Reverso
- Alison Ramos Show do álbum "Pra você ouvir"

### 5. Contato (Quinta Seção)
- Foto do artista
- Telefone de contato
- Link para Instagram

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Variáveis CSS (`:root`)
  - Flexbox e Grid Layout
  - Media Queries para responsividade
  - Animações e transições
- **JavaScript Vanilla**: Interatividade sem frameworks
- **Google Fonts**: Fonte Inter
- **Bootstrap Icons**: Ícones SVG

## 📱 Responsividade

O site é totalmente responsivo com três breakpoints principais:

- **Mobile**: até 768px
- **Tablet**: 769px a 968px
- **Desktop**: 969px+

## 🎯 Funcionalidades

### JavaScript (scripts.js)
- Botão "Voltar ao Topo" com animação suave
- Lazy loading de imagens para melhor performance
- Event listeners otimizados com `passive: true`

### SEO
- Meta tags otimizadas
- Schema.org (JSON-LD) para rich snippets
- Open Graph e Twitter Cards
- Alt text em todas as imagens
- `aria-label` em links importantes

## 📝 Personalização

### Cores Principais
As cores são definidas como variáveis CSS no início do `styles.css`:

```css
:root {
    --color-primary: #FFD700;        /* Dourado */
    --color-primary-hover: #FFA500;  /* Laranja */
    --color-bg-dark: #000;           /* Preto */
    --color-text-white: #fff;        /* Branco */
    /* ... */
}
```

### Imagens de Background
Para alterar o background de uma seção, edite o arquivo CSS:

```css
.releases-section::before {
    background-image: url('images/seu-novo-background.jpg');
}
```

### Links de Redes Sociais
Edite os links diretamente no HTML:

```html
<a href="https://www.instagram.com/junior_chauk/">
    @junior_chauk
</a>
```

## 🚀 Como Fazer Deploy

### Hosting Estático
1. Faça upload dos arquivos para o servidor
2. Certifique-se de que a estrutura de pastas está mantida
3. Configure o servidor para servir `index.html` como página inicial

### Recomendações
- Use HTTPS
- Configure gzip compression
- Configure cache de imagens
- Considere usar CDN para arquivos estáticos

## 🔧 Suporte e Manutenção

### Adicionar Nova Seção
1. Adicione o HTML em `index.html`
2. Crie as classes CSS em `styles.css`
3. Use as variáveis CSS existentes para manter consistência

### Otimização de Imagens
- Use formatos WebP quando possível
- Comprima imagens antes de fazer upload
- Mantenha dimensões adequadas (máx. 1920px de largura)

### Performance
- Imagens já têm `loading="lazy"` para carregamento sob demanda
- Use `defer` em scripts não críticos
- Minimize o uso de bibliotecas externas

## 📧 Contato

**Site**: [juniorchauk.com.br](https://juniorchauk.com.br)  
**Instagram**: [@junior_chauk](https://www.instagram.com/junior_chauk/)  
**Telefone**: +55 11 95491-3585

## 📄 Licença

Todos os direitos reservados © Junior Chauk

---

**Desenvolvido com ❤️ por Junior Chauk**
