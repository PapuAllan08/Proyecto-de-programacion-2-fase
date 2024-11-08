// va a cargar todas las reseñas junto con su nombre
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const reviews = [
        {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
        {title: "Excelente", content: "Muy buen servicio", autor: "Cristiano Ronaldo", date: "3 days ago" },
        {title: "Viva, Viva", content: "Volveré pronto", autor: "Neymar Jr", date: "1 week ago" },
        {title: "PFFFFF", content: "seguramente lo mejor que eh probado", autor: "marco", date: "1 weeks ago" },
        {title: "Totalmente encantador", content: "Exelente todo muchas gracias", autor: "Sergi", date: "9 month ago" },
        {title: "Perfecto", content: "Todo muy bien personalizado", autor: "el super papu", date: "6 months ago" },
        {title: "Muy bueno", content: "Los carros, El diseño todo me enamoro", autor: "marcelo gozo", date: "1 months ago" },
        {title: "Sin palabras", content: "Increible como avanzaron tanto", autor: "erick", date: "11 months ago" },
    ];

    const masreseñas = document.getElementById("masreseñas");

    reviews.forEach(review => {

        const reviewCard = document.createElement("div");
        reviewCard.className = "reseña_cuadro";

        reviewCard.innerHTML = `
            <div class="estrellas">⭐⭐⭐⭐⭐</div>
            <h3 class="reseñatitule">${review.title}</h3>
            <p>${review.content}</p>
            <div class="cliente">
                <span>${review.autor}</span>
                <span class="fecha">${review.date}</span>
            </div>
        `;

       
        masreseñas.appendChild(reviewCard);
    });

   
    document.getElementById("loadMoreBtn").style.display = "none";
});

function mostrar(){//abre pop up
    document.getElementById("pop").style.display ="block"
}

function cerrar(){//ciierra popup
    document.getElementById("pop").style.display ="none"
}