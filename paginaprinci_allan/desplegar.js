    document.getElementById("loadMoreBtn").addEventListener("click", function(){
        const reviews = [
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
            {title: "Me encanto", content: "Me encantaron los carros", autor: "lionel Messi", date: "5 days ago" },
        ];

        const masreseñas = document.getElementById("masreseñas");

        reviews.forEach(review => {
            const reviewCard = document.createElement("div");
            reseña_cuadro.className = "reseña_cuadro";
            reseña_cuadro.innerHTML = `
                <h3>${review.title}</h3>
                <p>${review.content}</p>
                <p><small>${review.autor} - ${review.date}</small></p>
            `;
            masreseñas.appendChild(reseña_cuadro);
        });

        //oculta el boton
        document.getElementById("loadMoreBtn").style.display = "none";
    });