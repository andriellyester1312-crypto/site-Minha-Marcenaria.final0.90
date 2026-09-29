/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");
    });

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {
            menu.classList.remove("menu-aberto");
        });

    });
}


/* =========================
   FORMULÁRIO DE CONTATO
========================= */

const formulario = document.querySelector("form");

if (formulario && !formulario.id.includes("feedback")) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!formulario.checkValidity()) {

            alert("Por favor, preencha todos os campos obrigatórios.");

            return;
        }

        const nome = document.getElementById("nome")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const telefone = document.getElementById("telefone")?.value || "";
        const ambiente = document.getElementById("ambiente")?.value || "";
        const mensagem = document.getElementById("mensagem")?.value || "";

        alert(
            "Dados recebidos!\n\n" +
            "Nome: " + nome +
            "\nE-mail: " + email +
            "\nTelefone: " + telefone +
            "\nAmbiente: " + ambiente +
            "\nMensagem: " + mensagem
        );

        const numeroWhatsApp = "5519982463512";

        const textoWhatsApp =
            "Olá! Gostaria de solicitar um orçamento para móveis planejados.%0A%0A" +
            "Nome: " + nome + "%0A" +
            "E-mail: " + email + "%0A" +
            "Telefone: " + telefone + "%0A" +
            "Ambiente: " + ambiente + "%0A" +
            "Mensagem: " + mensagem;

        window.open(
            "https://wa.me/" + numeroWhatsApp + "?text=" + textoWhatsApp,
            "_blank"
        );

        formulario.reset();

    });
}


/* =========================
   VOLTAR AO TOPO
========================= */

const voltarTopo = document.getElementById("voltarTopo");

if (voltarTopo) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            voltarTopo.classList.add("mostrar");

        } else {

            voltarTopo.classList.remove("mostrar");

        }

    });

    voltarTopo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


/* =========================
   CHATBOT
========================= */

const chatbotBotao = document.getElementById("chatbotBotao");
const chatbot = document.getElementById("chatbot");
const chatbotFechar = document.getElementById("chatbotFechar");

const chatbotInput = document.getElementById("chatbotInput");
const chatbotEnviar = document.getElementById("chatbotEnviar");

const chatbotMensagem = document.getElementById("chatbotMensagem");
const chatbotRespostas = document.getElementById("chatbotRespostas");


/* ABRIR CHATBOT */

if (chatbotBotao && chatbot) {

    chatbotBotao.addEventListener("click", function () {

        chatbot.classList.toggle("chatbot-aberto");

        if (
            chatbot.classList.contains("chatbot-aberto") &&
            chatbotInput
        ) {

            setTimeout(function () {
                chatbotInput.focus();
            }, 200);

        }

    });

}


/* FECHAR CHATBOT */

if (chatbotFechar && chatbot) {

    chatbotFechar.addEventListener("click", function () {

        chatbot.classList.remove("chatbot-aberto");

    });

}


/* =========================
   RESPOSTA DO CHATBOT
========================= */

function responderChatbot() {

    if (!chatbotInput || !chatbotRespostas) {
        return;
    }

    const perguntaOriginal = chatbotInput.value.trim();

    const pergunta = perguntaOriginal.toLowerCase();

    if (pergunta === "") {
        return;
    }


    /* PERGUNTA DO USUÁRIO */

    const perguntaUsuario = document.createElement("div");

    perguntaUsuario.className = "chatbot-resposta";

    perguntaUsuario.textContent =
        "Você: " + perguntaOriginal;

    chatbotRespostas.appendChild(perguntaUsuario);


    let resposta = "";


    /* SAUDAÇÃO */

    if (
        pergunta.includes("oi") ||
        pergunta.includes("olá") ||
        pergunta.includes("ola") ||
        pergunta.includes("bom dia") ||
        pergunta.includes("boa tarde") ||
        pergunta.includes("boa noite")
    ) {

        resposta =
            "Olá! 👋 Como podemos ajudar? Você pode perguntar sobre nossos projetos, ambientes, serviços, orçamento, entrega ou montagem.";

    }


    /* ORÇAMENTO */

    else if (
        pergunta.includes("orçamento") ||
        pergunta.includes("orcamento") ||
        pergunta.includes("preço") ||
        pergunta.includes("preco") ||
        pergunta.includes("valor") ||
        pergunta.includes("quanto custa") ||
        pergunta.includes("quanto")
    ) {

        resposta =
            "Para solicitar um orçamento, acesse a página Contato e envie suas informações. Nossa equipe poderá analisar seu projeto e suas necessidades.";

    }


    /* COZINHA */

    else if (
        pergunta.includes("cozinha") ||
        pergunta.includes("cozinhas")
    ) {

        resposta =
            "Sim! Trabalhamos com projetos personalizados para cozinhas planejadas. Você pode conhecer alguns exemplos na página Ambientes.";

    }


    /* QUARTO */

    else if (
        pergunta.includes("quarto") ||
        pergunta.includes("quartos")
    ) {

        resposta =
            "Trabalhamos com projetos personalizados para quartos. Confira alguns ambientes na página Ambientes.";

    }


    /* SALA */

    else if (
        pergunta.includes("sala") ||
        pergunta.includes("salas")
    ) {

        resposta =
            "Também desenvolvemos projetos para salas, buscando aproveitar o espaço de acordo com as necessidades de cada ambiente.";

    }


    /* ESCRITÓRIO */

    else if (
        pergunta.includes("escritório") ||
        pergunta.includes("escritorio") ||
        pergunta.includes("escritórios") ||
        pergunta.includes("escritorios")
    ) {

        resposta =
            "Temos projetos para escritórios planejados. Você pode visualizar exemplos na página Ambientes.";

    }


    /* PROJETOS */

    else if (
        pergunta.includes("projeto") ||
        pergunta.includes("projetos")
    ) {

        resposta =
            "Você pode conhecer nossos projetos na página Projetos. Também temos exemplos organizados por ambiente na página Ambientes.";

    }


    /* SERVIÇOS */

    else if (
        pergunta.includes("serviço") ||
        pergunta.includes("servico") ||
        pergunta.includes("serviços") ||
        pergunta.includes("servicos")
    ) {

        resposta =
            "Para conhecer todos os serviços oferecidos pela Minha Marcenaria, acesse a página Serviços.";

    }


    /* ENTREGA */

    else if (
        pergunta.includes("entrega") ||
        pergunta.includes("entregam") ||
        pergunta.includes("entregar")
    ) {

        resposta =
            "Sim, trabalhamos com entrega dos móveis planejados. Para informações específicas sobre seu projeto, entre em contato conosco.";

    }


    /* MONTAGEM */

    else if (
        pergunta.includes("montagem") ||
        pergunta.includes("montam") ||
        pergunta.includes("montar")
    ) {

        resposta =
            "A montagem dos móveis pode ser realizada conforme as características do projeto. Para mais informações, entre em contato conosco.";

    }


    /* PERSONALIZAÇÃO */

    else if (
        pergunta.includes("personalizado") ||
        pergunta.includes("personalizados") ||
        pergunta.includes("personalizar") ||
        pergunta.includes("medida") ||
        pergunta.includes("medidas")
    ) {

        resposta =
            "Sim! Os projetos são desenvolvidos de acordo com as características e necessidades de cada ambiente.";

    }


    /* CONTATO */

    else if (
        pergunta.includes("contato") ||
        pergunta.includes("telefone") ||
        pergunta.includes("falar com") ||
        pergunta.includes("atendente") ||
        pergunta.includes("atendimento")
    ) {

        resposta =
            "Para falar conosco, acesse a página Contato. Lá você encontra o formulário para enviar sua solicitação.";

    }


    /* FAQ */

    else if (
        pergunta.includes("dúvida") ||
        pergunta.includes("duvida") ||
        pergunta.includes("pergunta") ||
        pergunta.includes("faq")
    ) {

        resposta =
            "Você também pode consultar nossa página FAQ, onde reunimos as principais dúvidas sobre nossos serviços.";

    }


    /* NÃO ENTENDEU */

    else {

        resposta =
            "Não encontrei uma resposta para essa dúvida. Tente perguntar sobre orçamento, projetos, cozinhas, quartos, salas, escritórios, serviços, entrega, montagem ou contato.";

    }


    /* RESPOSTA DO BOT */

    setTimeout(function () {

        const respostaBot = document.createElement("div");

        respostaBot.className = "chatbot-resposta";

        respostaBot.textContent =
            "Atendimento: " + resposta;

        chatbotRespostas.appendChild(respostaBot);

        chatbotRespostas.scrollTop =
            chatbotRespostas.scrollHeight;

    }, 300);


    chatbotInput.value = "";

    chatbotInput.focus();

}


/* BOTÃO ENVIAR */

if (chatbotEnviar) {

    chatbotEnviar.addEventListener("click", function () {

        responderChatbot();

    });

}


/* ENTER */

if (chatbotInput) {

    chatbotInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            responderChatbot();

        }

    });

}


/* =========================
   CENTRAL DE AJUDA
========================= */

const abrirChatbotAjuda =
    document.getElementById("abrirChatbotAjuda");

if (abrirChatbotAjuda && chatbot) {

    abrirChatbotAjuda.addEventListener("click", function (event) {

        event.preventDefault();

        chatbot.classList.add("chatbot-aberto");

        if (chatbotInput) {

            setTimeout(function () {

                chatbotInput.focus();

            }, 200);

        }

    });

}


/* =========================
   FORMULÁRIO DE FEEDBACK
========================= */

const formFeedback =
    document.getElementById("form-feedback");

const feedbackSucesso =
    document.getElementById("feedbackSucesso");

if (formFeedback) {

    formFeedback.addEventListener("submit", function (event) {

        event.preventDefault();

        if (feedbackSucesso) {

            feedbackSucesso.textContent =
                "Obrigado pelo seu feedback! Sua opinião foi registrada.";

        }

        formFeedback.reset();

    });

}


/* =========================
   TELA DE ENTRADA
========================= */

const telaEntrada =
    document.getElementById("telaEntrada");

const entrarSite =
    document.getElementById("entrarSite");

if (telaEntrada && entrarSite) {

    entrarSite.addEventListener("click", function () {

        telaEntrada.classList.add("saindo");

        setTimeout(function () {

            telaEntrada.style.display = "none";

        }, 800);

    });

}


/* =========================================
   CARROSSÉIS DE PROJETOS
========================================= */

const carrosseisProjetos =
    document.querySelectorAll(
        ".projeto-carrossel[data-carrossel]"
    );

carrosseisProjetos.forEach(function (carrossel) {

    const slides =
        carrossel.querySelectorAll(
            ".carrossel-slide"
        );

    const setaAnterior =
        carrossel.querySelector(
            ".carrossel-seta-esquerda"
        );

    const setaProxima =
        carrossel.querySelector(
            ".carrossel-seta-direita"
        );

    let slideAtualProjeto = 0;

    function mostrarSlideProjeto(numero) {

        if (slides.length === 0) {
            return;
        }

        if (numero < 0) {
            numero = slides.length - 1;
        }

        if (numero >= slides.length) {
            numero = 0;
        }

        slides.forEach(function (slide, index) {

            if (index === numero) {

                slide.classList.add("ativo");

            } else {

                slide.classList.remove("ativo");

            }

        });

        slideAtualProjeto = numero;

    }


    if (setaAnterior) {

        setaAnterior.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                mostrarSlideProjeto(
                    slideAtualProjeto - 1
                );

            }
        );

    }


    if (setaProxima) {

        setaProxima.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                mostrarSlideProjeto(
                    slideAtualProjeto + 1
                );

            }
        );

    }


    let inicioToqueProjeto = 0;

    carrossel.addEventListener(
        "touchstart",
        function (event) {

            inicioToqueProjeto =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    carrossel.addEventListener(
        "touchend",
        function (event) {

            const fimToqueProjeto =
                event.changedTouches[0].screenX;

            const distancia =
                fimToqueProjeto - inicioToqueProjeto;

            if (Math.abs(distancia) < 50) {
                return;
            }

            if (distancia < 0) {

                mostrarSlideProjeto(
                    slideAtualProjeto + 1
                );

            } else {

                mostrarSlideProjeto(
                    slideAtualProjeto - 1
                );

            }

        },
        { passive: true }
    );


    slides.forEach(function (slide) {

        const imagem =
            slide.querySelector("img");

        if (imagem) {

            imagem.addEventListener(
                "dragstart",
                function (event) {

                    event.preventDefault();

                }
            );

        }

    });


    mostrarSlideProjeto(0);

});

/* =========================================
   CARROSSÉIS DA PÁGINA AMBIENTES
========================================= */

const carrosseisAmbientes = document.querySelectorAll(
    ".ambiente-card .carrossel"
);

carrosseisAmbientes.forEach(function (carrossel) {

    const slides = carrossel.querySelectorAll(".carrossel-slide");
    const setaAnterior = carrossel.querySelector(".ambiente-seta-esquerda");
    const setaProxima = carrossel.querySelector(".ambiente-seta-direita");

    let slideAtual = 0;

    function mostrarSlide(numero) {

        if (slides.length === 0) return;

        if (numero < 0) {
            numero = slides.length - 1;
        }

        if (numero >= slides.length) {
            numero = 0;
        }

        slides.forEach(function (slide, index) {
            slide.classList.toggle("ativo", index === numero);
        });

        slideAtual = numero;
    }

    if (setaAnterior) {
        setaAnterior.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            mostrarSlide(slideAtual - 1);
        });
    }

    if (setaProxima) {
        setaProxima.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            mostrarSlide(slideAtual + 1);
        });
    }

    mostrarSlide(0);
});