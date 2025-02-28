// Função para exibir uma mensagem de boas-vindas
function welcomeMessage() {
    alert("Bem-vindo ao meu site!");
}

// Função para alternar o tema da página
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

// Função para rolagem suave
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
}

// Função para efeito de fade-in
function fadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in');
    for (const element of fadeElements) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';
        element.style.opacity = 1;
    }
}

// Função para animação de entrada da imagem de perfil
function profileImageAnimation() {
    const profileImage = document.querySelector('.profile-image');
    profileImage.style.opacity = 0;
    profileImage.style.transform = 'translateY(-20px)';
    profileImage.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    profileImage.style.opacity = 1;
    profileImage.style.transform = 'translateY(0)';
}

// Função para animação de digitação do título
function typeWriterEffect(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Função para mostrar o botão de voltar ao topo
function scrollFunction() {
    const topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Função para voltar ao topo
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Adiciona um evento para exibir a mensagem de boas-vindas quando a página carrega
window.onload = function() {
    smoothScroll();
    fadeInEffect();
    profileImageAnimation();
    typeWriterEffect(document.querySelector('h2'));
};

// Adiciona um evento para mostrar o botão de voltar ao topo ao rolar a página
window.onscroll = function() {
    scrollFunction();
};