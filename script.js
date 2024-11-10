const taxasParcelas = [
    { parcelas: "Débito", taxa: 2.65 },
    { parcelas: "1x", taxa: 5.00 },
    { parcelas: "2x", taxa: 6.50 },
    { parcelas: "3x", taxa: 7.20 },
    { parcelas: "4x", taxa: 7.69 },
    { parcelas: "5x", taxa: 7.98 },
    { parcelas: "6x", taxa: 8.32 },
    { parcelas: "7x", taxa: 9.03 },
    { parcelas: "8x", taxa: 9.68 },
    { parcelas: "9x", taxa: 10.33 },
    { parcelas: "10x", taxa: 12.90 },
    { parcelas: "11x", taxa: 13.72 },
    { parcelas: "12x", taxa: 14.56 },
    { parcelas: "13x", taxa: 15.37 },
    { parcelas: "14x", taxa: 16.20 },
    { parcelas: "15x", taxa: 17.05 },
    { parcelas: "16x", taxa: 17.88 },
    { parcelas: "17x", taxa: 18.75 },
    { parcelas: "18x", taxa: 19.59 },
];

function calcularParcelas() {
    const valor = parseFloat(document.getElementById("valor").value);
    const tabelaParcelas = document.getElementById("tabela-parcelas");
    tabelaParcelas.innerHTML = ""; // Limpa a tabela

    if (isNaN(valor) || valor <= 0) return;

    taxasParcelas.forEach(item => {
        const valorTotal = valor * (1 + item.taxa / 100);
        const valorParcela = item.parcelas === "Débito" ? valorTotal : valorTotal / parseInt(item.parcelas);

        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${item.taxa.toFixed(2)}%</td>
            <td>${item.parcelas}</td>
            <td class="highlight">R$ ${valorParcela.toFixed(2)}</td>
            <td>R$ ${valorTotal.toFixed(2)}</td>
        `;
        tabelaParcelas.appendChild(linha);
    });
}
