document.addEventListener("DOMContentLoaded", () => {
    let panierCount = 0;
    const panierBtn = document.getElementById("panier-btn");
    const panierCountEl = document.getElementById("panier-count");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            panierCount++;
            panierCountEl.textContent = panierCount;
            alert("Produit ajouté au panier !");
        });
    });

    panierBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Vous avez ${panierCount} article(s) dans votre panier.`);
    });
});
